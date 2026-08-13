import { Link } from 'react-router-dom';
import { SectionSquiggle } from './SectionSquiggle';
import { trackCTAClick } from '../analytics';

export function WhyWeExist() {
    return (
        <div className="section section-alt">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                why we exist
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                The best teaching begins with <span className="accent">great explanations.</span>
            </div>
            <div className="prose" style={{ marginTop: 32 }}>
                <p>Yet turning those explanations into clear, engaging visual lessons often requires educators to learn complex software, switch between multiple tools, or compromise on quality.</p>
                <p style={{ fontWeight: 700, color: 'var(--primary)' }}>We're changing that.</p>
                <p>
                    Our first product, <strong>Viz</strong>, is a Visual Lesson Building Platform designed around how educators naturally think and explain — not how designers or video editors work.
                    From idea to finished lesson, Viz brings creation, animation, presentation, recording, and editing into one seamless workflow, allowing educators to focus on teaching instead of production.
                </p>
            </div>
            <Link
                to="/"
                className="cta-btn"
                style={{ marginTop: 8, background: 'var(--primary)', color: '#fff', padding: '11px 24px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
                onClick={() => trackCTAClick('See Viz in Action', 'about')}
            >
                See Viz in action →
            </Link>
        </div>
    );
}
