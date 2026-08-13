import { SectionSquiggle } from './SectionSquiggle';

export function WhereWereGoing() {
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
                where we're going
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 640 }}>
                An ecosystem of educator-first tools.
            </div>
            <div className="prose" style={{ marginTop: 32 }}>
                <p>Our vision extends beyond a single product. We are building tools that help teachers communicate ideas with greater clarity, creativity, and confidence.</p>
                <p>We believe technology should adapt to teaching — not the other way around.</p>
            </div>
            <div
                className="hand"
                style={{ fontSize: 'clamp(20px,5vw,26px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', maxWidth: 560, textAlign: 'center', marginTop: 8, position: 'relative' }}
            >
                when educators can <span style={{ color: 'var(--accent)' }}>express ideas without limitations</span>, students understand more, curiosity grows, and learning becomes more meaningful.
                <svg style={{ position: 'absolute', bottom: -34, left: '50%', transform: 'translateX(-50%)' }} width="140" height="20" viewBox="0 0 140 20" aria-hidden="true">
                    <path d="M4 12 C 40 4, 100 4, 136 12" fill="none" stroke="oklch(72% 0.11 80 / .7)" strokeWidth="2.5" strokeLinecap="round"></path>
                </svg>
            </div>
        </div>
    );
}
