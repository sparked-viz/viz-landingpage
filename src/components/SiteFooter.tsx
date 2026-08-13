import type { CSSProperties } from 'react';
import { trackSocialClick } from '../analytics';

const socialLinkStyle: CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: '#fff',
    border: '1px solid rgba(0,0,0,.1)',
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const contactRowStyle: CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 8, color: '#8a6d5c' };
const phoneIcon = (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export function SiteFooter() {
    return (
        <div
            className="site-footer"
            id="contact"
            style={{
                background: 'oklch(96.5% 0.005 250)',
                color: '#1D1D1D',
                borderTop: '1px solid rgba(0,0,0,.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <svg style={{ position: 'absolute', top: -40, left: -40, pointerEvents: 'none' }} width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
                <circle cx="100" cy="100" r="88" fill="none" stroke="color-mix(in oklch, var(--primary) 18%, transparent)" strokeWidth="1.5" strokeDasharray="7 8"></circle>
            </svg>
            <div className="hand" style={{ fontSize: 24, color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 6 }}>
                lessons in your feed, every week
            </div>
            <div className="headline" style={{ fontSize: 'clamp(22px,5.5vw,30px)', maxWidth: 560 }}>
                Follow the lessons where you already scroll.
            </div>
            <div
                style={{
                    width: 208,
                    height: 208,
                    borderRadius: '50%',
                    background: '#fff',
                    border: '1.5px dashed color-mix(in oklch, var(--primary) 40%, transparent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 28,
                }}
            >
                <img src="/assets/final-12g-bulb.svg" alt="Viz logo" style={{ width: 150, height: 150, display: 'block' }} />
            </div>

            <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                <a
                    href="https://www.youtube.com/@SparkEdu-v4v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={socialLinkStyle}
                    aria-label="YouTube"
                    onClick={() => trackSocialClick('YouTube')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com/sparkedu_technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={socialLinkStyle}
                    aria-label="Instagram"
                    onClick={() => trackSocialClick('Instagram')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/company/sparkedu-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={socialLinkStyle}
                    aria-label="LinkedIn"
                    onClick={() => trackSocialClick('LinkedIn')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '14px 40px', marginTop: 40, fontSize: 14 }}>
                <a
                    href="mailto:sparkedutechnologies@gmail.com"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}
                >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    sparkedutechnologies@gmail.com
                </a>
                <span style={contactRowStyle}>
                    {phoneIcon}
                    Brazil · Cristiano Benjamin · <a href="tel:+5531996095978" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>+55 31 99609 5978</a>
                </span>
                <span style={contactRowStyle}>
                    {phoneIcon}
                    India · Koustub S Kulkarni · <a href="tel:+919380668711" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>+91 93806 68711</a>
                </span>
            </div>

            <div
                style={{
                    marginTop: 32,
                    paddingTop: 20,
                    borderTop: '1px solid rgba(0,0,0,.08)',
                    width: '100%',
                    maxWidth: 560,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    color: '#6f6f6b',
                }}
            >
                <img src="/assets/sparkEd_logo.webp" alt="" style={{ width: 20, height: 20, display: 'block' }} />
                <span style={{ fontWeight: 700, fontSize: 13 }}>SparkEdu</span>
                <span style={{ fontSize: 12 }}>© 2026</span>
            </div>
        </div>
    );
}
