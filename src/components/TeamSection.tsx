import { SectionSquiggle } from './SectionSquiggle';

const FOUNDERS = [
    {
        photo: '/assets/founder-1.png',
        name: 'Kousthub S Kulkarni',
        bio: 'DevOps · Koch',
        linkedin: 'https://www.linkedin.com/in/koustub-s-kulkarni-278b9a1b9/',
    },
    {
        photo: '/assets/founder-3.png',
        name: 'Dr. Cristiano Benjamin',
        bio: 'Professor, UFOP (Universidade Federal de Ouro Preto) · Senior Full-Stack Architect · Creator of Matematizar',
        linkedin: 'https://www.linkedin.com/in/cristianobenjamin/',
    },
    {
        photo: '/assets/founder-2.png',
        name: 'Prajwal V Sangam',
        bio: 'IIT Bhubaneswar · Ex-Orangewood Labs (YC 2018) · Ex-TCS Research & Innovation',
        linkedin: 'https://www.linkedin.com/in/prajwalsangam24550a18b/',
    },
];

export function TeamSection() {
    return (
        <div className="section section-alt" id="team">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                the people behind it
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                Meet the co-founders.
            </div>
            <div className="subhead">Educators and builders, in equal measure.</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginTop: 44, width: '100%', maxWidth: 1000 }}>
                {FOUNDERS.map(founder => (
                    <div className="founder-card" key={founder.name}>
                        <div className="founder-photo">
                            <img src={founder.photo} alt={founder.name} loading="lazy" />
                        </div>
                        <div style={{ fontWeight: 700, fontSize: 17 }}>{founder.name}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#6f6f6b', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                            Co-founder
                        </div>
                        <div style={{ fontSize: 13, color: '#6f6f6b', lineHeight: 1.6 }}>{founder.bio}</div>
                        <a
                            className="founder-li"
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${founder.name.split(' ')[0]} on LinkedIn`}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
