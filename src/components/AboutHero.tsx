export function AboutHero() {
    return (
        <div className="section" style={{ paddingTop: 80 }}>
            <span className="mark plus" style={{ top: 64, left: '12%', fontSize: 15, color: 'color-mix(in oklch, var(--primary) 45%, transparent)' }}>+</span>
            <span className="mark plus" style={{ top: 280, right: '6%', fontSize: 12, color: 'color-mix(in oklch, var(--accent) 50%, transparent)' }}>+</span>
            <span className="mark plus" style={{ top: 240, left: '7%', fontSize: 13, color: 'oklch(72% 0.11 80 / .6)' }}>+</span>
            <span className="mark plus" style={{ top: 80, right: '4%', fontSize: 14, color: 'oklch(72% 0.11 25 / .55)' }}>+</span>

            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                who we are
            </div>
            <div className="headline" style={{ fontSize: 'clamp(26px,7vw,44px)', maxWidth: 760, position: 'relative' }}>
                Technology that lets educators teach exactly as they imagine.
                <svg className="mark" style={{ top: -26, right: -34 }} width="30" height="30" viewBox="0 0 28 28" aria-hidden="true">
                    <g stroke="oklch(72% 0.11 80)" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="14" y1="3" x2="14" y2="9"></line>
                        <line x1="5" y1="7" x2="9" y2="11"></line>
                        <line x1="23" y1="7" x2="19" y2="11"></line>
                    </g>
                </svg>
            </div>
            <div className="subhead" style={{ maxWidth: 520 }}>
                SparkEdu builds educator-first tools that remove technical barriers between a great explanation and the students who need it.
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
                    marginTop: 36,
                }}
            >
                <img src="/assets/final-12g-bulb.svg" alt="Viz logo" style={{ width: 150, height: 150, display: 'block' }} />
            </div>
        </div>
    );
}
