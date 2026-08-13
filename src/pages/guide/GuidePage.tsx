import React, { useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, CornerDownLeft, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { getAdjacentDocs, getFigureAddress, parseFigureAlt, type GuideDoc } from '../../lib/guideContent';

// Non-routable sections (see guideContent.ts's NON_ROUTABLE_SECTION_KEYS) are still linked
// to from body copy (e.g. the guide index's FAQ list) — render those as inert, grayed-out
// text instead of a link to a route that doesn't exist.
function GuideLink({ href, children, node, ...props }: React.ComponentPropsWithoutRef<'a'> & { node?: unknown }) {
    void node; // react-markdown injects this for every component; must not be forwarded to the DOM <a>.
    if (href?.startsWith('/guide/faq/')) {
        return <span className="grayscale opacity-60 cursor-not-allowed select-none">{children}</span>;
    }
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}

// Images are authored as ![Short Name](src "Small description sentence.") — Short Name
// becomes the figure's bold title, the title attribute becomes its caption sentence. The
// "Fig. section.page.n" address is entirely derived, not hand-typed: guideContent.ts's
// annotateFigureNumbers bakes each image's position-on-page into its alt text at
// content-load time (a render-time counter would double-count on re-renders — StrictMode,
// hydration, unrelated state changes), and getFigureAddress() derives section/page from the
// sidebar's own ordering, so neither can drift out of sync with the actual document.
// Compendium entries reference /guide-icons/*.svg — the same Lucide glyph shown in the
// Add Object Bar / Floating Toolbar, exported once by scripts/export-guide-icons.mjs.
// These render inline (e.g. inside a heading, right before the object's name) rather than
// as a captioned figure — a 26px icon doesn't want a border, shadow, or "Fig. N.N.N" label.
function GuideIcon({ src, alt }: { src?: string; alt?: string }) {
    return (
        <img
            src={src}
            alt={alt || 'Icon'}
            width={26}
            height={26}
            loading="lazy"
            decoding="async"
            // Tailwind Typography's `.prose img` sets display:block plus its own vertical
            // margins, which pushes the icon onto its own line above the heading text —
            // the `!` overrides are what actually keep it inline and vertically centered.
            className="!inline-block !m-0 !align-middle mr-2"
        />
    );
}

function GuideImage({ src, alt, title, route }: React.ComponentPropsWithoutRef<'img'> & { route: string }) {
    if (src?.startsWith('/guide-icons/')) {
        return <GuideIcon src={src} alt={alt} />;
    }

    const { indexOnPage, name } = parseFigureAlt(alt ?? '');
    const address = getFigureAddress(route);
    const figureId = address && indexOnPage > 0 ? `Fig. ${address.section}.${address.page}.${indexOnPage}` : null;

    return (
        <figure className="not-prose my-6 flex flex-col items-center">
            <img
                src={src}
                alt={name || 'Figure'}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-[720px] w-auto h-auto rounded-lg border border-line shadow-sm"
            />
            <figcaption className="mt-2 max-w-full text-sm text-ink-secondary text-center">
                {figureId && <span className="font-semibold text-ink">{figureId}</span>}
                {name && <span className="font-medium text-ink"> — {name}</span>}
                {title && <span className="block text-xs text-ink-tertiary mt-0.5">{title}</span>}
            </figcaption>
        </figure>
    );
}

type KbdIcon = React.ComponentType<{ className?: string }>;

// No icon set (lucide included) distinguishes "right-click" from "left-click" visually — mouse
// buttons just aren't a thing icon libraries draw differently — so click actions pair a generic
// click icon with the text, which still says which button. Arrow keys are icon-only since the
// icon alone is unambiguous. Everything else (single letters, Tab, Esc) stays text-only, same
// as how every OS/app renders those — there's no icon for "F" that beats the letter itself.
const KBD_ICONS: Record<string, { icon: KbdIcon; hideText?: boolean }> = {
    '↑': { icon: ArrowUp, hideText: true },
    '↓': { icon: ArrowDown, hideText: true },
    Enter: { icon: CornerDownLeft },
    'Right-click': { icon: MousePointerClick },
    'Left-click': { icon: MousePointerClick },
    'Middle-click': { icon: MousePointerClick },
    Click: { icon: MousePointerClick },
};

// Keyboard keys and mouse actions are authored as backtick code spans (`F`, `Right-click`,
// `Esc`) and rendered as a keycap-style badge instead of a code snippet — this guide has no
// real code to show, so backtick spans always mean "a key or click," not literal source code.
// Fenced code blocks (multi-line) fall back to plain <code> so this doesn't break if one is
// ever added.
function GuideCode({ children }: React.ComponentPropsWithoutRef<'code'>) {
    const text = typeof children === 'string' ? children : String(children);
    if (text.includes('\n')) {
        return <code>{children}</code>;
    }
    const match = KBD_ICONS[text];
    return (
        <kbd className="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded-md border border-line-strong bg-bg-secondary font-mono text-[0.85em] font-semibold not-italic text-ink shadow-sm">
            {match && <match.icon className="w-3.5 h-3.5" />}
            {!match?.hideText && children}
        </kbd>
    );
}

// Reference entries (Object Types, Animation Types) are authored as nested <details>/<summary>
// HTML blocks — see docs/guide/editor/02-object-types.md — so a long catalogue collapses down
// to its category/subcategory headings by default instead of dumping every entry on the page
// at once. Raw HTML in markdown needs rehypeRaw (below) to become real elements instead of
// escaped text; styling (border, indent, chevron) lives in index.css under ".guide-details".
function GuideDetails({ node, ...props }: React.ComponentPropsWithoutRef<'details'> & { node?: unknown }) {
    void node; // react-markdown injects this for every component; must not be forwarded to the DOM <details>.
    return <details {...props} className="guide-details" />;
}

function makeMarkdownComponents(route: string): Components {
    return {
        a: GuideLink,
        img: props => <GuideImage {...props} route={route} />,
        code: GuideCode,
        details: GuideDetails,
    };
}

interface GuidePageProps {
    doc: GuideDoc;
}

const PagerLink: React.FC<{ doc?: GuideDoc; direction: 'prev' | 'next' }> = ({ doc, direction }) => {
    if (!doc) return <span />;
    const isNext = direction === 'next';
    const Icon = isNext ? ArrowRight : ArrowLeft;
    return (
        <Link
            to={doc.route}
            className={`group flex flex-col gap-1.5 rounded-lg border border-line px-4 py-3 max-w-[48%] transition-colors hover:border-brand hover:bg-brand-subtle/30 ${
                isNext ? 'items-end text-right ml-auto' : 'items-start text-left'
            }`}
        >
            <span className="text-[11px] font-semibold text-ink-tertiary uppercase tracking-wider">
                {isNext ? 'Next' : 'Previous'}
            </span>
            <span className={`flex items-center gap-1.5 text-base font-bold text-ink ${isNext ? 'flex-row-reverse' : ''}`}>
                <Icon className="w-4 h-4 shrink-0 text-ink-tertiary transition-colors group-hover:text-brand" />
                {doc.title}
            </span>
        </Link>
    );
};

export const GuidePage: React.FC<GuidePageProps> = ({ doc }) => {
    const description = `${doc.title} — Sparked Viz user guide.`;
    const { prev, next } = getAdjacentDocs(doc.route);
    const markdownComponents = useMemo(() => makeMarkdownComponents(doc.route), [doc.route]);

    return (
        <>
            <article className="prose max-w-none">
                <Head>
                    <title>{doc.title} — Sparked Viz Guide</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={`${doc.title} — Sparked Viz Guide`} />
                    <meta property="og:description" content={description} />
                </Head>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                    {doc.raw}
                </ReactMarkdown>
            </article>

            {(prev || next) && (
                <nav className="mt-10 pt-6 border-t border-line flex items-stretch gap-4" aria-label="Guide pagination">
                    <PagerLink doc={prev} direction="prev" />
                    <PagerLink doc={next} direction="next" />
                </nav>
            )}
        </>
    );
};
