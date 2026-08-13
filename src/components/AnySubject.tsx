import { SectionSquiggle } from './SectionSquiggle';

export function AnySubject() {
    return (
        <div
            className="section"
            style={{
                backgroundImage: 'radial-gradient(color-mix(in oklch, var(--primary) 9%, transparent) 1.2px, transparent 1.2px)',
                backgroundSize: '24px 24px',
            }}
        >
            <svg className="mark" style={{ top: 36, right: '8%' }} width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
                <circle cx="45" cy="45" r="38" fill="none" stroke="color-mix(in oklch, var(--primary) 30%, transparent)" strokeWidth="1.5" strokeDasharray="6 7"></circle>
                <circle cx="62" cy="34" r="7" fill="oklch(72% 0.11 80 / .35)"></circle>
            </svg>
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                any subject, any level
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                Build the explanation - <span className="accent">you're imagining</span>
            </div>
            <div className="subhead">Any idea, turned into a visual explanation.</div>
            <img
                src="/assets/Frame41.webp"
                className="shot"
                style={{ maxWidth: 900, width: '100%', marginTop: 40 }}
                alt="Six chalkboard-style math problem cards across competitions and levels"
                loading="lazy"
            />
        </div>
    );
}
