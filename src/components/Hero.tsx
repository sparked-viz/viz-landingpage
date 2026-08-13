import { useRef } from 'react';
import { trackCTAClick } from '../analytics';
import { useVideoAnalytics } from '../hooks/useVideoAnalytics';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useVideoAnalytics(videoRef, 'Hero Demo');

    return (
        <div className="section" style={{ paddingTop: 80 }}>
            <span className="mark plus" style={{ top: 64, left: '12%', fontSize: 15, color: 'color-mix(in oklch, var(--primary) 45%, transparent)' }}>+</span>
            <span className="mark plus" style={{ top: 340, right: '5%', fontSize: 12, color: 'color-mix(in oklch, var(--accent) 50%, transparent)' }}>+</span>
            <span className="mark plus" style={{ top: 300, left: '7%', fontSize: 13, color: 'oklch(72% 0.11 80 / .6)' }}>+</span>
            <span className="mark plus" style={{ top: 80, right: '4%', fontSize: 14, color: 'oklch(72% 0.11 25 / .55)' }}>+</span>

            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                teach visually
            </div>
            <div className="headline" style={{ fontSize: 'clamp(26px,7vw,44px)', maxWidth: 720, position: 'relative' }}>
                Create <span className="accent">visual explanations</span> your students instantly understand.
                <svg className="mark" style={{ top: -26, right: -34 }} width="30" height="30" viewBox="0 0 28 28" aria-hidden="true">
                    <g stroke="oklch(72% 0.11 80)" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="14" y1="3" x2="14" y2="9"></line>
                        <line x1="5" y1="7" x2="9" y2="11"></line>
                        <line x1="23" y1="7" x2="19" y2="11"></line>
                    </g>
                </svg>
            </div>

            <a
                href="https://www.sparkedunow.com/viz"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{ marginTop: 28, background: 'var(--primary)', color: '#fff', padding: '11px 24px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
                onClick={() => trackCTAClick('Start Creating', 'hero')}
            >
                Start Creating →
            </a>

            <div style={{ position: 'relative', width: '100%', maxWidth: 900, marginTop: 96 }}>
                <svg style={{ position: 'absolute', top: -46, left: -56, pointerEvents: 'none' }} width="170" height="170" viewBox="0 0 170 170" aria-hidden="true">
                    <circle cx="85" cy="85" r="76" fill="none" stroke="color-mix(in oklch, var(--primary) 20%, transparent)" strokeWidth="1.5" strokeDasharray="7 8"></circle>
                </svg>
                <div className="hand" style={{ position: 'absolute', top: -64, right: '5%', fontSize: 'clamp(19px,4.8vw,25px)', transform: 'rotate(-3deg)' }}>
                    a real lesson, made in Viz
                    <svg width="38" height="34" viewBox="0 0 38 34" style={{ position: 'absolute', right: -30, top: 16 }} aria-hidden="true">
                        <path d="M4 4 C 20 6, 28 15, 30 27" fill="none" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round"></path>
                        <path d="M24 23 L30 29 L33 21" fill="none" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                </div>
                <div className="hero-video-wrap">
                    <video
                        ref={videoRef}
                        className="hero-video"
                        src="/videos/hero/theorem_6.1_triangles.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label="Theorem 6.1 triangle-ratio proof demo"
                    />
                </div>
            </div>
        </div>
    );
}
