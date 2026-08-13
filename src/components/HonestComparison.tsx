import { SectionSquiggle } from './SectionSquiggle';

const dots = (
    <div className="frame-bar">
        <span className="frame-dot dot-r"></span>
        <span className="frame-dot dot-y"></span>
        <span className="frame-dot dot-g"></span>
    </div>
);

export function HonestComparison() {
    return (
        <div className="section">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                the honest comparison
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                Looks professional, <span className="accent">feels like teaching</span>
            </div>
            <div className="subhead">If you can teach on a whiteboard, you can use Viz</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 40, width: '100%', maxWidth: 560 }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span className="badge badge-x">✗</span>
                        <span style={{ fontSize: 16, fontWeight: 600 }}>No coding required</span>
                    </div>
                    <div className="frame">
                        {dots}
                        <img src="/assets/Frame15.webp" className="frame-img" style={{ filter: 'grayscale(80%) opacity(.85)' }} alt="Code editor screenshot" loading="lazy" />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span className="badge badge-x">✗</span>
                        <span style={{ fontSize: 16, fontWeight: 600 }}>No complex animation tools</span>
                    </div>
                    <div className="frame">
                        {dots}
                        <img src="/assets/Frame16.webp" className="frame-img" style={{ filter: 'grayscale(80%) opacity(.85)' }} alt="Blender 3D animation screenshot" loading="lazy" />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span className="badge badge-x">✗</span>
                        <span style={{ fontSize: 16, fontWeight: 600 }}>No complex timelines</span>
                    </div>
                    <div className="frame">
                        {dots}
                        <img src="/assets/Frame19.webp" className="frame-img" style={{ filter: 'grayscale(80%) opacity(.85)' }} alt="Video editing timeline screenshot" loading="lazy" />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span className="badge badge-check">✓</span>
                        <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent)' }}>Designed for educators</span>
                    </div>
                    <div className="frame">
                        <img src="/assets/Frame52.webp" className="frame-img" alt="Teacher pointing at interactive whiteboard, teaching a classroom" loading="lazy" />
                    </div>
                    <div className="hand" style={{ textAlign: 'right', fontSize: 20, transform: 'rotate(-2deg)', marginTop: 8, color: 'var(--accent)' }}>
                        where every lesson starts
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 48, textAlign: 'center', maxWidth: 520 }}>
                <div style={{ fontWeight: 700, fontSize: 20, color: 'var(--primary)', marginBottom: 16 }}>Summary</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                    <span className="chip chip-x">✗ No complex animation tools</span>
                    <span className="chip chip-x">✗ No complex timelines</span>
                    <span className="chip chip-x">✗ No coding required</span>
                    <span className="chip chip-check">✓ Designed for educators</span>
                    <span className="chip chip-check">✓ Designed by educators</span>
                </div>
            </div>
        </div>
    );
}
