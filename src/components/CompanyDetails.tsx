import { Link } from 'react-router-dom';
import { SectionSquiggle } from './SectionSquiggle';
import { COMPANY } from '../content/company';

export function CompanyDetails() {
    return (
        <div className="section">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                the company
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                {COMPANY.legalName}
            </div>
            <div className="subhead" style={{ maxWidth: 560 }}>
                {COMPANY.brand} and {COMPANY.product} are brands of {COMPANY.legalName}, {COMPANY.entity}.
            </div>

            <div className="info-grid">
                <div className="info-card">
                    <h2>Registered office</h2>
                    <address>
                        {COMPANY.addressLines.map(line => (
                            <div key={line}>{line}</div>
                        ))}
                    </address>
                </div>
                <div className="info-card">
                    <h2>Registration</h2>
                    <div>Legal name: {COMPANY.legalName}</div>
                    <div>GSTIN: {COMPANY.gstin}</div>
                </div>
                <div className="info-card">
                    <h2>Get in touch</h2>
                    <div><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
                    <div><a href={`tel:${COMPANY.phone.tel}`}>{COMPANY.phone.display}</a></div>
                    <div style={{ marginTop: 6 }}><Link to="/contact">All contact details →</Link></div>
                </div>
            </div>
        </div>
    );
}
