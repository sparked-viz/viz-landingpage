import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { COMPANY, LEGAL_LINKS, POLICIES_LAST_UPDATED } from '../content/company';

interface LegalDocumentProps {
    title: string;
    kicker: string;
    /** Short plain-language summary shown in a box above the full text. */
    summary?: ReactNode;
    children: ReactNode;
    showUpdated?: boolean;
}

export function LegalDocument({ title, kicker, summary, children, showUpdated = true }: LegalDocumentProps) {
    return (
        <>
            <Head>
                <title>{`${title} — ${COMPANY.brand}`}</title>
            </Head>
            <div className="section" style={{ paddingTop: 72 }}>
                <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                    {kicker}
                </div>
                <h1 className="headline" style={{ fontSize: 'clamp(26px,7vw,40px)', margin: 0, maxWidth: 720 }}>
                    {title}
                </h1>
                {showUpdated && <div className="subhead">Last updated: {POLICIES_LAST_UPDATED}</div>}

                <div className="legal-doc">
                    {summary && <div className="legal-summary">{summary}</div>}
                    {children}
                    <nav className="legal-nav" aria-label="Policies">
                        {LEGAL_LINKS.filter(link => link.label !== title).map(link => (
                            <Link key={link.to} to={link.to}>{link.label}</Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}

/** The legal-entity block every policy ends with, so the reviewer always finds it. */
export function LegalContactBlock() {
    return (
        <address className="legal-contact">
            <strong>{COMPANY.legalName}</strong>
            <br />
            Registered office: {COMPANY.addressLines.join(', ')}
            <br />
            GSTIN: {COMPANY.gstin}
            <br />
            Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> · Phone: <a href={`tel:${COMPANY.phone.tel}`}>{COMPANY.phone.display}</a>
        </address>
    );
}
