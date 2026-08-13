import { SectionSquiggle } from './SectionSquiggle';

const STEPS = [
    { n: 1, title: 'Create', img: '/assets/Frame30.webp', alt: 'In-app geometry drawing toolkit' },
    { n: 2, title: 'Record', img: '/assets/Frame31.webp', alt: 'In-app screen and voice recording UI' },
    { n: 3, title: 'Edit and export', img: '/assets/Frame35.webp', alt: 'Export MP4 panel with audio waveform', caption: 'straight to 9:16 — ready for shorts' },
];

export function ContinuousFlow() {
    return (
        <div className="section section-alt">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                one continuous flow
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                <span className="accent">Spend your time explaining</span> - not editing.
            </div>
            <div className="subhead">Everything happens in one place.</div>

            <div style={{ position: 'relative', marginTop: 40, width: '100%', maxWidth: 420, paddingLeft: 52, paddingRight: 16, boxSizing: 'border-box' }}>
                <div style={{ position: 'absolute', left: 18, top: 20, bottom: 20, width: 0, borderLeft: '2px dashed color-mix(in oklch, var(--primary) 30%, transparent)' }}></div>
                {STEPS.map((step, i) => (
                    <div key={step.n} style={{ position: 'relative', marginBottom: i < STEPS.length - 1 ? 52 : 0 }}>
                        <div
                            style={{
                                position: 'absolute',
                                left: -46,
                                top: 0,
                                width: 26,
                                height: 26,
                                borderRadius: '50%',
                                background: '#fff',
                                border: '1.5px solid color-mix(in oklch, var(--primary) 45%, transparent)',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 12,
                                fontWeight: 600,
                            }}
                        >
                            {step.n}
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 600, lineHeight: '26px', marginBottom: 10 }}>{step.title}</div>
                        <div className="frame">
                            <div className="frame-bar">
                                <span className="frame-dot dot-r"></span>
                                <span className="frame-dot dot-y"></span>
                                <span className="frame-dot dot-g"></span>
                            </div>
                            <img src={step.img} className="frame-img" alt={step.alt} loading="lazy" />
                        </div>
                        {step.caption && (
                            <div className="hand" style={{ fontSize: 20, transform: 'rotate(-2deg)', marginTop: 8, color: 'oklch(60% 0.11 25)' }}>
                                {step.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: 40, textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 20, color: 'var(--primary)', marginBottom: 16 }}>Key Points</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                    <span className="chip chip-x">✗ No switching between tools</span>
                    <span className="chip chip-check">✓ One integrated workflow</span>
                </div>
            </div>
        </div>
    );
}
