import { LegalDocument } from '../../components/LegalDocument';
import { COMPANY } from '../../content/company';

export function ContactPage() {
    return (
        <LegalDocument title="Contact Us" kicker="we'd love to hear from you" showUpdated={false}>
            <p style={{ textAlign: 'center' }}>
                Questions about {COMPANY.product}, billing or refunds? Email or call us. We reply within 1 business day.
            </p>

            <div className="info-grid" style={{ marginTop: 24 }}>
                <div className="info-card">
                    <h2>Email</h2>
                    <a href={`mailto:${COMPANY.email}`} style={{ fontWeight: 600 }}>{COMPANY.email}</a>
                </div>
                <div className="info-card">
                    <h2>Phone</h2>
                    <a href={`tel:${COMPANY.phone.tel}`} style={{ fontWeight: 600 }}>{COMPANY.phone.display}</a>
                    <div style={{ color: '#6f6f6b', fontSize: 13 }}>{COMPANY.supportHours}</div>
                </div>
                <div className="info-card">
                    <h2>Registered office</h2>
                    <address>
                        <strong>{COMPANY.legalName}</strong>
                        {COMPANY.addressLines.map(line => (
                            <div key={line}>{line}</div>
                        ))}
                    </address>
                </div>
                <div className="info-card">
                    <h2>Company details</h2>
                    <div>Legal name: {COMPANY.legalName}</div>
                    <div>Brands: {COMPANY.brand}, {COMPANY.product}</div>
                    <div>GSTIN: {COMPANY.gstin}</div>
                </div>
                <div className="info-card">
                    <h2>Grievance officer</h2>
                    <div style={{ fontWeight: 600 }}>{COMPANY.grievanceOfficer}</div>
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                    <div style={{ color: '#6f6f6b', fontSize: 13 }}>Acknowledged within 48 hours, resolved within 30 days.</div>
                </div>
                <div className="info-card">
                    <h2>Billing &amp; refunds</h2>
                    <div>Include your registered email and transaction ID so we can help faster.</div>
                </div>
            </div>
        </LegalDocument>
    );
}
