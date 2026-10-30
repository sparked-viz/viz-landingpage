import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '../analytics';
import { COMPANY } from '../content/company';

interface SiteHeaderProps {
    activePage: 'home' | 'about';
}

export function SiteHeader({ activePage }: SiteHeaderProps) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    const aboutLinkStyle = activePage === 'about' ? { color: 'var(--primary)', fontWeight: 700 } : undefined;

    return (
        <div
            className="site-header"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,.08)' }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <img src="/assets/sparkEd_logo.webp" alt="SparkEdu logo" style={{ width: 34, height: 34, display: 'block' }} />
                <span style={{ fontWeight: 700, fontSize: 18, color: 'var(--primary)' }}>SparkEdu</span>
            </Link>

            <div className={`nav-links${open ? ' open' : ''}`} id="navLinks" style={{ fontWeight: 500 }}>
                <Link className="nav-link" to="/" onClick={close}>Home</Link>
                <Link className="nav-link" to="/about" onClick={close} style={aboutLinkStyle}>About Us</Link>
                <a className="nav-link" href="/#pricing" onClick={close}>Pricing</a>
                <Link className="nav-link" to="/guide" onClick={close}>Guide</Link>
                <Link className="nav-link" to="/contact" onClick={close}>Contact</Link>
                <a className="nav-link" href={COMPANY.appUrl} onClick={() => { close(); trackCTAClick('Log In', 'header'); }}>Log in</a>
                <a className="nav-signup" href={COMPANY.appUrl} onClick={() => { close(); trackCTAClick('Sign Up', 'header'); }}>Sign up</a>
            </div>

            <button
                className={`nav-toggle${open ? ' open' : ''}`}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="navLinks"
                onClick={() => setOpen(o => !o)}
            >
                <span></span><span></span><span></span>
            </button>
        </div>
    );
}
