import { useEffect, useRef, useState } from 'react';
import { trackCarouselInteract } from '../analytics';
import { SectionSquiggle } from './SectionSquiggle';

const SLIDES = [
    { src: '/videos/carousel/showcase-geometry.mp4', label: 'Geometry' },
    { src: '/videos/carousel/showcase-physics.mp4', label: 'Physics' },
    { src: '/videos/carousel/showcase-calculus.mp4', label: 'Calculus' },
];

function VideoCarousel() {
    const n = SLIDES.length;
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const goTo = (i: number) => setCurrent(((i % n) + n) % n);

    // Videos are 14-18MB each — don't fetch any of them until the carousel is actually
    // about to scroll into view, rather than the moment the page (and this off-screen
    // section) mounts.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        videoRefs.current.forEach((v, i) => {
            if (!v) return;
            if (i === current) {
                v.currentTime = 0;
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, [current, visible]);

    // Depending on `current` (not just mount) means any manual interaction restarts the
    // 5s countdown, matching the original's restartAutoplay() call on every click.
    useEffect(() => {
        if (!visible) return;
        const id = setInterval(() => setCurrent(c => (c + 1) % n), 5000);
        return () => clearInterval(id);
    }, [current, n, visible]);

    return (
        <div className="video-carousel" id="videoCarousel" ref={containerRef}>
            <div className="vc-track">
                {SLIDES.map((slide, i) => {
                    let diff = i - current;
                    if (diff > n / 2) diff -= n;
                    else if (diff < -n / 2) diff += n;
                    const scale = diff === 0 ? 1 : 0.8;
                    const opacity = Math.abs(diff) <= 1 ? 1 : 0;
                    return (
                        <div
                            key={slide.label}
                            className="vc-slide"
                            style={{
                                transform: `translateX(calc(-50% + ${diff * 62}%)) scale(${scale})`,
                                opacity,
                                zIndex: 10 - Math.abs(diff),
                                pointerEvents: Math.abs(diff) <= 1 ? 'auto' : 'none',
                            }}
                            onClick={() => {
                                goTo(i);
                                trackCarouselInteract('slide_click', slide.label);
                            }}
                        >
                            <video
                                ref={el => { videoRefs.current[i] = el; }}
                                src={visible ? slide.src : undefined}
                                preload="none"
                                muted
                                loop
                                playsInline
                            />
                            <div className="vc-label">{slide.label}</div>
                        </div>
                    );
                })}
            </div>
            <button
                className="vc-btn vc-prev"
                aria-label="Previous video"
                onClick={() => { goTo(current - 1); trackCarouselInteract('prev'); }}
            >
                ‹
            </button>
            <button
                className="vc-btn vc-next"
                aria-label="Next video"
                onClick={() => { goTo(current + 1); trackCarouselInteract('next'); }}
            >
                ›
            </button>
        </div>
    );
}

const badgeIconStyle = (bg: string) => ({
    width: 24,
    height: 24,
    borderRadius: 7,
    background: bg,
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexShrink: 0,
});

export function VideoShowcase() {
    return (
        <div className="section section-alt">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                made to travel
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600, position: 'relative' }}>
                Create explanations <span className="accent">worth sharing.</span>
                <svg className="mark" style={{ bottom: -8, right: -30 }} width="24" height="24" viewBox="0 0 28 28" aria-hidden="true">
                    <g stroke="oklch(72% 0.11 25)" strokeWidth="2.5" strokeLinecap="round" opacity=".7">
                        <line x1="14" y1="3" x2="14" y2="9"></line>
                        <line x1="5" y1="7" x2="9" y2="11"></line>
                        <line x1="23" y1="7" x2="19" y2="11"></line>
                    </g>
                </svg>
            </div>
            <div className="subhead">From classroom to social feed</div>

            <div className="app-badges" style={{ alignItems: 'center', marginTop: 24, fontSize: 15, fontWeight: 500 }}>
                <div className="app-badges-row" style={{ alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <span style={badgeIconStyle('#F9AB00')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"/></svg>
                        </span>
                        Classroom
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <span style={badgeIconStyle('#1a1a1a')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        </span>
                        Tik-Tok
                    </span>
                </div>
                <div className="app-badges-row" style={{ alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <span style={badgeIconStyle('#d6249f')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                        </span>
                        Instagram
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <span style={badgeIconStyle('#FF0000')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </span>
                        Youtube
                    </span>
                </div>
            </div>

            <VideoCarousel />
        </div>
    );
}
