// Renders the icons used by the Compendium's object/animation entries to static SVG files
// under public/guide-icons/, so markdown can reference the exact same glyph shown in the
// Add Object Bar / Floating Toolbar via a plain ![]() image reference.
//
// Objects don't use their ObjectDefinition.icon (a generic Lucide fallback) as their visible
// thumbnail — the Add Object Bar actually renders a hand-drawn per-type SVG illustration via
// viz3's <ObjectDefinitionThumbnail>, only falling back to the generic icon for a handful of
// types that component doesn't special-case (see its `default:` branch). So objects are
// exported by bundling and server-rendering that real component against the real
// getAllVisibleToolbarObjects() list — not by hand-picking a Lucide icon per object, which
// would silently drift from the actual UI the moment ObjectDefinitionThumbnail changes.
// Animations have no such illustrated-thumbnail component (Floating Toolbar buttons are
// plain Lucide icons), so those 9 are exported directly from their known icon names.

import { existsSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');
const viz3Src = join(repoRoot, '..', 'viz3', 'src');
const outDir = join(repoRoot, 'public', 'guide-icons');

if (!existsSync(viz3Src)) {
    console.log(`[export-guide-icons] viz3 checkout not found at ${viz3Src} — skipping (using icons already committed under public/guide-icons/).`);
    process.exit(0);
}

mkdirSync(outDir, { recursive: true });

// --- Object thumbnails: bundle + render the real component against the real object list ---

const entryContents = `
export { ObjectDefinitionThumbnail } from '${join(viz3Src, 'components/viewport/ObjectDefinitionThumbnail.tsx').replace(/\\/g, '/')}';
export { getAllVisibleToolbarObjects } from '${join(viz3Src, 'constants/ObjectDefinitions.ts').replace(/\\/g, '/')}';
`;
const scratchDir = join(here, '.icon-export-scratch');
mkdirSync(scratchDir, { recursive: true });
const entryPath = join(scratchDir, 'entry.tsx');
writeFileSync(entryPath, entryContents, 'utf8');
const bundlePath = join(scratchDir, 'bundle.mjs');

await esbuild.build({
    entryPoints: [entryPath],
    bundle: true,
    format: 'esm',
    platform: 'node',
    jsx: 'automatic',
    outfile: bundlePath,
    external: ['react', 'react-dom', 'lucide-react'],
    logLevel: 'warning',
});

const bundleUrl = pathToFileURL(bundlePath).href;
const { ObjectDefinitionThumbnail, getAllVisibleToolbarObjects } = await import(`${bundleUrl}?t=${Date.now()}`);

const SVG_RE = /<svg[\s\S]*?<\/svg>/;

let objectCount = 0;
for (const definition of getAllVisibleToolbarObjects()) {
    const markup = renderToStaticMarkup(
        React.createElement(ObjectDefinitionThumbnail, { definition, size: 72 })
    );
    const match = markup.match(SVG_RE);
    if (!match) {
        console.warn(`[export-guide-icons] No <svg> rendered for object "${definition.id}" — skipping.`);
        continue;
    }
    // Lucide-rendered fallback icons (Label, Brace, Fill Region, Function, LaTeX) already
    // carry their own xmlns from lucide-react's defaults — adding a second one produces
    // invalid SVG that browsers refuse to render at all (broken-image icon).
    const svgRaw = match[0];
    const svg = svgRaw.includes('xmlns=')
        ? svgRaw
        : svgRaw.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    writeFileSync(join(outDir, `${definition.id}.svg`), svg, 'utf8');
    objectCount += 1;
}

rmSync(scratchDir, { recursive: true, force: true });

// --- Animation icons: plain Lucide exports, keyed by the Floating Toolbar's own labels ---

const ANIMATION_ICONS = {
    create: Lucide.Sparkles,
    destroy: Lucide.Trash2,
    move: Lucide.Move,
    'rotate-around': Lucide.RefreshCw,
    rotate: Lucide.RotateCw,
    'dim-in': Lucide.Sun,
    'dim-out': Lucide.SunDim,
    highlight: Lucide.Zap,
    'remove-hl': Lucide.ZapOff,
};

let animationCount = 0;
for (const [slug, Icon] of Object.entries(ANIMATION_ICONS)) {
    const svg = renderToStaticMarkup(
        React.createElement(Icon, { size: 28, strokeWidth: 1.75, color: '#52525b' })
    );
    writeFileSync(join(outDir, `${slug}.svg`), svg, 'utf8');
    animationCount += 1;
}

console.log(`[export-guide-icons] Wrote ${objectCount} object icon(s) + ${animationCount} animation icon(s) -> ${outDir}`);
