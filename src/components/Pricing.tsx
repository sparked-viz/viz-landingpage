import { SectionSquiggle } from './SectionSquiggle';
import { trackCTAClick } from '../analytics';

export function Pricing() {
    return (
        <div className="section">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                simple, honest pricing
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                Start free. <span className="accent">Upgrade when it clicks.</span>
            </div>
            <div className="subhead">Every plan includes the full create → record → export workflow.</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginTop: 44, maxWidth: 960, width: '100%', alignItems: 'stretch' }}>
                <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,.1)', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: 17 }}>Starter</div>
                    <div>
                        <span style={{ fontSize: 'clamp(28px,7vw,38px)', fontWeight: 800, letterSpacing: '-0.02em' }}>$0</span>
                        <span style={{ fontSize: 14, color: '#6f6f6b' }}> / forever</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#6f6f6b', lineHeight: 1.5 }}>For trying your first visual lessons.</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, marginTop: 4 }}>
                        <span>✓ 3 lessons per month</span>
                        <span>✓ Full drawing &amp; recording tools</span>
                        <span>✓ 720p export with watermark</span>
                    </div>
                    <div
                        className="btn-outline"
                        style={{ marginTop: 'auto', border: '1.5px solid var(--primary)', color: 'var(--primary)', borderRadius: 999, padding: '11px 0', textAlign: 'center', fontWeight: 600, fontSize: 14 }}
                        onClick={() => trackCTAClick('Get Started', 'pricing_starter')}
                    >
                        Get started
                    </div>
                </div>

                <div style={{ background: '#fff', border: '2px solid var(--primary)', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', boxShadow: '0 12px 32px rgba(13,58,140,.12)' }}>
                    <div className="hand" style={{ position: 'absolute', top: -16, right: 22, background: 'var(--accent)', color: '#fff', borderRadius: 999, padding: '2px 14px', fontSize: 17, transform: 'rotate(2deg)' }}>
                        most popular
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 17 }}>Educator</div>
                    <div>
                        <span style={{ fontSize: 'clamp(28px,7vw,38px)', fontWeight: 800, letterSpacing: '-0.02em' }}>$12</span>
                        <span style={{ fontSize: 14, color: '#6f6f6b' }}> / month</span>
                    </div>
                    <div style={{ fontSize: 13, color: '#6f6f6b', lineHeight: 1.5 }}>For teachers and creators publishing every week.</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, marginTop: 4 }}>
                        <span>✓ Unlimited lessons</span>
                        <span>✓ 4K export, no watermark</span>
                        <span>✓ 9:16 shorts &amp; 16:9 presets</span>
                        <span>✓ Voiceover enhancement</span>
                    </div>
                    <a
                        href="https://www.sparkedunow.com/viz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ marginTop: 'auto', background: 'var(--primary)', color: '#fff', borderRadius: 999, padding: '12px 0', textAlign: 'center', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'block' }}
                        onClick={() => trackCTAClick('Start Creating', 'pricing_educator')}
                    >
                        Start creating
                    </a>
                </div>

                <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,.1)', borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: 17 }}>School</div>
                    <div><span style={{ fontSize: 'clamp(28px,7vw,38px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Custom</span></div>
                    <div style={{ fontSize: 13, color: '#6f6f6b', lineHeight: 1.5 }}>For departments and whole-school rollouts.</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, marginTop: 4 }}>
                        <span>✓ Everything in Educator</span>
                        <span>✓ Shared lesson library</span>
                        <span>✓ Admin &amp; student seats</span>
                        <span>✓ Priority support</span>
                    </div>
                    <div
                        className="btn-outline"
                        style={{ marginTop: 'auto', border: '1.5px solid var(--primary)', color: 'var(--primary)', borderRadius: 999, padding: '11px 0', textAlign: 'center', fontWeight: 600, fontSize: 14 }}
                        onClick={() => trackCTAClick('Talk to Us', 'pricing_school')}
                    >
                        Talk to us
                    </div>
                </div>
            </div>
        </div>
    );
}
