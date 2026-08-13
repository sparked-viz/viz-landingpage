// Loads the synced guide content (src/content/guide/**/*.md — see scripts/sync-docs.mjs)
// and derives routes, page titles, and a sidebar nav tree from the file tree itself, so
// adding/removing a page in viz3's docs/guide/ automatically shows up here after a sync.

const rawModules = import.meta.glob('../content/guide/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>;

export interface GuideDoc {
    /** Path relative to docs/guide/, e.g. 'editor/01-adding-objects.md' */
    guidePath: string;
    /** App route, e.g. '/guide/editor/adding-objects' */
    route: string;
    title: string;
    raw: string;
}

function toGuidePath(globKey: string): string {
    const marker = '/content/guide/';
    const idx = globKey.indexOf(marker);
    return globKey.slice(idx + marker.length);
}

function dirname(guidePath: string): string {
    const idx = guidePath.lastIndexOf('/');
    return idx === -1 ? '' : guidePath.slice(0, idx);
}

/** Strips a leading "NN-" ordering prefix used for filesystem sort order. */
export function slugSegment(segment: string): string {
    return segment.replace(/^\d+-/, '');
}

export function guidePathToRoute(guidePath: string): string {
    const noExt = guidePath.replace(/\.md$/, '');
    const parts = noExt.split('/').filter(Boolean);
    const slugParts = parts.filter(p => p !== 'README').map(slugSegment);
    return '/guide' + (slugParts.length ? `/${slugParts.join('/')}` : '');
}

/** Resolves a markdown-relative link (as written inside a doc) to a docs/guide/-relative path. */
export function resolveGuideLink(fromGuidePath: string, relLink: string): string {
    const stack = dirname(fromGuidePath).split('/').filter(Boolean);
    for (const part of relLink.split('/').filter(Boolean)) {
        if (part === '.') continue;
        else if (part === '..') stack.pop();
        else stack.push(part);
    }
    return stack.join('/');
}

const MD_LINK_RE = /]\(([^)\s]+\.md)(#[^)]*)?\)/g;

/** Rewrites in-document relative `.md` links to the app's /guide/* routes. */
export function rewriteGuideLinks(markdown: string, fromGuidePath: string): string {
    return markdown.replace(MD_LINK_RE, (full: string, linkPath: string, hash: string | undefined) => {
        if (/^https?:\/\//.test(linkPath)) return full;
        const route = guidePathToRoute(resolveGuideLink(fromGuidePath, linkPath));
        return `](${route}${hash ?? ''})`;
    });
}

function extractTitle(raw: string, fallback: string): string {
    const match = raw.match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : fallback;
}

const MD_IMAGE_RE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;

/**
 * Prefixes each image's alt text with its 1-based position among the images on this page
 * (`"3|Short Name"`), computed once here rather than during render — a render-time counter
 * would double-count on React re-renders (StrictMode, hydration, unrelated state changes).
 * Pair with parseFigureAlt() on the renderer side.
 */
function annotateFigureNumbers(markdown: string): string {
    let n = 0;
    return markdown.replace(MD_IMAGE_RE, (full: string, alt: string, src: string, title?: string) => {
        // Small inline icon glyphs (Compendium entries) aren't captioned figures — leave
        // them out of the count so a page mixing icons and real screenshots doesn't have
        // its screenshot numbering thrown off by every icon before it.
        if (src.startsWith('/guide-icons/')) return full;
        n += 1;
        const encodedAlt = `${n}|${alt}`;
        return title !== undefined ? `![${encodedAlt}](${src} "${title}")` : `![${encodedAlt}](${src})`;
    });
}

export function parseFigureAlt(alt: string): { indexOnPage: number; name: string } {
    const match = alt.match(/^(\d+)\|(.*)$/s);
    if (!match) return { indexOnPage: 0, name: alt };
    return { indexOnPage: Number(match[1]), name: match[2] };
}

export const guideDocs: GuideDoc[] = Object.entries(rawModules)
    .map(([globKey, raw]) => {
        const guidePath = toGuidePath(globKey);
        const route = guidePathToRoute(guidePath);
        const lastSegment = guidePath.replace(/\.md$/, '').split('/').pop() ?? guidePath;
        const title = extractTitle(raw, slugSegment(lastSegment));
        const processed = annotateFigureNumbers(rewriteGuideLinks(raw, guidePath));
        return { guidePath, route, title, raw: processed };
    })
    .sort((a, b) => a.guidePath.localeCompare(b.guidePath));

export function getGuideDocByRoute(route: string): GuideDoc | undefined {
    return guideDocs.find(doc => doc.route === route);
}

export const guideIndexDoc = guideDocs.find(doc => doc.guidePath === 'README.md');

export interface GuideNavGroup {
    key: string;
    label: string;
    docs: GuideDoc[];
    subgroups?: GuideNavGroup[];
}

const SECTION_LABELS: Record<string, string> = {
    faq: 'FAQ',
    editor: 'Creation & Animation',
    explanar: 'Explanation & Recording',
};

const SUBSECTION_LABELS: Record<string, string> = {};

const SECTION_ORDER = ['faq', 'editor', 'explanar'];

export function buildGuideNav(): GuideNavGroup[] {
    const groups = new Map<string, GuideDoc[]>();
    const subgroups = new Map<string, Map<string, GuideDoc[]>>();

    for (const doc of guideDocs) {
        const parts = doc.guidePath.split('/');
        if (parts.length === 1) continue; // root README — linked separately by the layout
        const [top, ...rest] = parts;
        if (rest.length >= 2) {
            const [sub] = rest;
            if (!subgroups.has(top)) subgroups.set(top, new Map());
            const subMap = subgroups.get(top)!;
            if (!subMap.has(sub)) subMap.set(sub, []);
            subMap.get(sub)!.push(doc);
        } else {
            if (!groups.has(top)) groups.set(top, []);
            groups.get(top)!.push(doc);
        }
    }

    return SECTION_ORDER
        .filter(key => groups.has(key) || subgroups.has(key))
        .map(key => ({
            key,
            label: SECTION_LABELS[key] ?? key,
            docs: groups.get(key) ?? [],
            subgroups: subgroups.has(key)
                ? Array.from(subgroups.get(key)!.entries()).map(([sub, docs]) => ({
                    key: sub,
                    label: SUBSECTION_LABELS[sub] ?? sub,
                    docs,
                }))
                : undefined,
        }));
}

// Sections listed here are shown in the sidebar as a preview but aren't real, navigable
// pages yet (see routes.tsx and GuideLayout's "coming soon" treatment) — kept in one place
// so routing, the sidebar, and prev/next ordering can't drift out of sync.
export const NON_ROUTABLE_SECTION_KEYS = new Set(['faq']);

export function isRoutableDoc(doc: GuideDoc): boolean {
    return !NON_ROUTABLE_SECTION_KEYS.has(doc.guidePath.split('/')[0]);
}

/** Every real page in sidebar reading order: Guide Home, then each section/subsection in turn. */
export const orderedRoutableDocs: GuideDoc[] = (() => {
    const ordered: GuideDoc[] = [];
    if (guideIndexDoc) ordered.push(guideIndexDoc);
    for (const group of buildGuideNav()) {
        if (NON_ROUTABLE_SECTION_KEYS.has(group.key)) continue;
        ordered.push(...group.docs);
        for (const sub of group.subgroups ?? []) {
            ordered.push(...sub.docs);
        }
    }
    return ordered;
})();

export interface AdjacentDocs {
    prev?: GuideDoc;
    next?: GuideDoc;
}

export function getAdjacentDocs(route: string): AdjacentDocs {
    const idx = orderedRoutableDocs.findIndex(doc => doc.route === route);
    if (idx === -1) return {};
    return {
        prev: idx > 0 ? orderedRoutableDocs[idx - 1] : undefined,
        next: idx < orderedRoutableDocs.length - 1 ? orderedRoutableDocs[idx + 1] : undefined,
    };
}

export interface FigureAddress {
    /** 1-based position of this doc's top-level section (editor=1, explanar=2, ...) */
    section: number;
    /** 1-based position of this doc within its section */
    page: number;
}

/** doc.route -> { section, page }, derived from orderedRoutableDocs so it can't drift from the sidebar. */
const figureAddressByRoute: Map<string, FigureAddress> = (() => {
    const map = new Map<string, FigureAddress>();
    let sectionIdx = 0;
    let pageIdx = 0;
    let lastTopKey: string | null = null;

    for (const doc of orderedRoutableDocs) {
        if (doc.guidePath === 'README.md') continue; // guide index isn't part of a numbered section
        const topKey = doc.guidePath.split('/')[0];
        if (topKey !== lastTopKey) {
            sectionIdx += 1;
            pageIdx = 0;
            lastTopKey = topKey;
        }
        pageIdx += 1;
        map.set(doc.route, { section: sectionIdx, page: pageIdx });
    }
    return map;
})();

/** Returns the {section, page} address used to build "Fig. {section}.{page}.{n}" captions. */
export function getFigureAddress(route: string): FigureAddress | null {
    return figureAddressByRoute.get(route) ?? null;
}
