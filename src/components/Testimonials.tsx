import { SectionSquiggle } from './SectionSquiggle';

const QUOTES = [
    'Congratulations on your videos. Clear explanations and extremely well-made animations.',
    'Incredible video, simple explanation combined with a fluid animation.',
    'Finally a way to record a full proof without switching between three apps.',
    'My students actually watch these before class now instead of skimming the textbook.',
    "Made a TikTok explainer in one lunch break — never thought I'd say that about a proof.",
    'Feels exactly like drawing on my classroom whiteboard, just recorded.',
    'Our comments went from confused questions to "wait this actually makes sense."',
    'Exported straight to 9:16 for Instagram — no re-editing needed at all.',
    "Wish I'd had this in college — the animation makes the geometry click instantly.",
];

export function Testimonials() {
    return (
        <div className="section section-alt">
            <svg className="mark" style={{ top: 40, left: '9%' }} width="74" height="46" viewBox="0 0 74 46" aria-hidden="true">
                <rect x="2" y="10" width="24" height="24" fill="none" stroke="color-mix(in oklch, var(--accent) 40%, transparent)" strokeWidth="1.5"></rect>
                <circle cx="46" cy="22" r="13" fill="none" stroke="oklch(72% 0.11 25 / .45)" strokeWidth="1.5"></circle>
                <path d="M58 40 L66 26 L74 40 Z" fill="none" stroke="color-mix(in oklch, var(--primary) 35%, transparent)" strokeWidth="1.5"></path>
            </svg>
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                in their words
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                Educators creating with <span className="accent">SparkEdu.</span>
            </div>
            <div className="subhead">Real reactions from the students and audiences who watch these lessons.</div>

            <div className="tv-social testimonial-rail" style={{ marginTop: 44, maxWidth: 900, width: '100%' }}>
                {QUOTES.map(quote => (
                    <div className="tcard" key={quote}>
                        <div className="tcard-head">
                            <div className="tcard-avatar"></div>
                            <div className="tcard-name"></div>
                            <div className="tcard-link">Link</div>
                        </div>
                        <div className="tcard-quote">{quote}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
