// Converts the raw guide screenshots you drop into your local staging folder into
// optimized WebP files under public/guide-images/, so guide pages can reference them
// with a plain markdown image (![alt](/guide-images/<slug>.webp)).
//
// Source is a local, uncommitted folder (not a sibling repo checkout) — this script is
// a safe no-op when it's missing, since CI (Vercel) never has it and relies on whatever
// was already committed under public/guide-images/ the last time this ran locally.

import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');
const sourceDir = 'D:\\sparkedu\\images\\guide_images';
const destDir = join(repoRoot, 'public', 'guide-images');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);
// Short screen-recording clips (linked/unlinked demos, etc.) dropped in as GIFs — converted
// to animated WebP so they keep playing as a plain <img>, same as every other guide figure,
// instead of needing a <video> element. Sized smaller than static screenshots since figures
// only ever display at max-w-xl (576px) — no point shipping 1600px-wide animation frames.
const ANIMATED_EXTENSIONS = new Set(['.gif']);
// Screen recordings saved straight from the capture tool as MP4 — sharp/libvips can't decode
// video, so these go through ffmpeg instead, sampled down to a lower frame rate (a UI demo
// doesn't need 30fps) and muxed straight to animated WebP so the output pipeline is identical
// to the GIF path below.
const VIDEO_EXTENSIONS = new Set(['.mp4']);
const VIDEO_FPS = 12;
const VIDEO_MAX_WIDTH = 640;
const VIDEO_WEBP_QUALITY = 65;
const MAX_WIDTH = 1600;
const ANIMATED_MAX_WIDTH = 640;
const WEBP_QUALITY = 80;
const ANIMATED_WEBP_QUALITY = 75;

if (!existsSync(sourceDir)) {
    console.log(`[sync-guide-images] Source not found at ${sourceDir} — skipping (using images already committed under public/guide-images/).`);
    process.exit(0);
}

function hasFfmpeg() {
    try {
        execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}
const ffmpegAvailable = hasFfmpeg();

function slugify(name) {
    return name
        .toLowerCase()
        .replace(/\.[^.]+$/, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

mkdirSync(destDir, { recursive: true });

const entries = readdirSync(sourceDir).filter(entry => {
    const full = join(sourceDir, entry);
    if (!statSync(full).isFile()) return false;
    const ext = extname(entry).toLowerCase();
    return IMAGE_EXTENSIONS.has(ext) || ANIMATED_EXTENSIONS.has(ext) || VIDEO_EXTENSIONS.has(ext);
});

let converted = 0;
for (const entry of entries) {
    const srcPath = join(sourceDir, entry);
    const slug = slugify(basename(entry));
    const destPath = join(destDir, `${slug}.webp`);
    const ext = extname(entry).toLowerCase();
    const isVideo = VIDEO_EXTENSIONS.has(ext);
    const isAnimated = ANIMATED_EXTENSIONS.has(ext);

    if (isVideo) {
        if (!ffmpegAvailable) {
            console.warn(`[sync-guide-images] Skipping ${entry} — ffmpeg not found on PATH.`);
            continue;
        }
        execFileSync('ffmpeg', [
            '-y', '-i', srcPath,
            '-vf', `fps=${VIDEO_FPS},scale=${VIDEO_MAX_WIDTH}:-1:flags=lanczos`,
            '-loop', '0', '-an', '-vsync', '0',
            '-q:v', String(VIDEO_WEBP_QUALITY),
            destPath,
        ], { stdio: 'ignore' });
    } else {
        await sharp(srcPath, isAnimated ? { animated: true } : undefined)
            .resize({
                width: isAnimated ? ANIMATED_MAX_WIDTH : MAX_WIDTH,
                withoutEnlargement: true,
                fit: 'inside',
            })
            .webp({ quality: isAnimated ? ANIMATED_WEBP_QUALITY : WEBP_QUALITY })
            .toFile(destPath);
    }

    converted += 1;
    console.log(`[sync-guide-images] ${entry} -> guide-images/${slug}.webp`);
}

console.log(`[sync-guide-images] Converted ${converted} image(s) from ${sourceDir} -> ${destDir}`);
