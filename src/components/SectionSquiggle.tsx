/** The small hand-drawn squiggle-and-dot mark used above most section headings. */
export function SectionSquiggle() {
    return (
        <svg width="46" height="56" viewBox="0 0 46 56" aria-hidden="true" style={{ marginBottom: 14, opacity: .8 }}>
            <path
                d="M23 2 C 8 16, 38 28, 23 44"
                fill="none"
                stroke="color-mix(in oklch, var(--primary) 40%, transparent)"
                strokeWidth="1.6"
                strokeDasharray="5 6"
                strokeLinecap="round"
            ></path>
            <circle cx="23" cy="50" r="3.5" fill="var(--accent)"></circle>
        </svg>
    );
}
