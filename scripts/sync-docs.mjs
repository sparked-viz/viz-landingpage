// Copies the user-facing guide (docs/guide/**/*.md) from the sibling viz3
// checkout into src/content/guide/, so the landing page can render it.
//
// Source of truth for guide content lives in the viz3 repo, not here — this
// script is how it gets mirrored into this repo for the build. It's run via
// `predev`/`prebuild` and is a safe no-op (skip, not fail) when the sibling
// checkout isn't present, since CI (Vercel) only checks out this repo and
// relies on the last-synced copy already committed under src/content/guide/.

import { existsSync, mkdirSync, readdirSync, statSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');
const sourceDir = join(repoRoot, '..', 'viz3', 'docs', 'guide');
const destDir = join(repoRoot, 'src', 'content', 'guide');

if (!existsSync(sourceDir)) {
    console.log(`[sync-docs] Source not found at ${sourceDir} — skipping (using content already committed under src/content/guide/).`);
    process.exit(0);
}

function copyMdTree(src, dest) {
    mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) {
        const srcPath = join(src, entry);
        const destPath = join(dest, entry);
        if (statSync(srcPath).isDirectory()) {
            copyMdTree(srcPath, destPath);
        } else if (entry.endsWith('.md')) {
            copyFileSync(srcPath, destPath);
        }
    }
}

rmSync(destDir, { recursive: true, force: true });
copyMdTree(sourceDir, destDir);
console.log(`[sync-docs] Synced ${sourceDir} -> ${destDir}`);
