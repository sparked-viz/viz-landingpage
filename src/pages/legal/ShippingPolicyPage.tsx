import { Link } from 'react-router-dom';
import { LegalContactBlock, LegalDocument } from '../../components/LegalDocument';
import { COMPANY } from '../../content/company';

export function ShippingPolicyPage() {
    return (
        <LegalDocument
            title="Shipping & Delivery Policy"
            kicker="delivered instantly, online"
            summary={
                <ul>
                    <li>{COMPANY.product} is a <strong>digital, online service</strong>. Nothing is shipped physically and there are <strong>no shipping charges</strong>.</li>
                    <li>Paid plans are <strong>activated instantly</strong> on your account after successful payment, and a confirmation email with your invoice follows.</li>
                </ul>
            }
        >
            <h2>1. What we deliver</h2>
            <p>
                {COMPANY.legalName} provides {COMPANY.product} as software accessed through a web browser at{' '}
                <a href={COMPANY.appUrl} target="_blank" rel="noopener noreferrer">{COMPANY.appUrl.replace('https://', '')}</a>. We do not sell or ship physical goods, and no courier,
                shipping or handling charges apply.
            </p>

            <h2>2. Delivery method and timeline</h2>
            <table className="legal-table">
                <thead>
                    <tr><th>Purchase</th><th>How it is delivered</th><th>When</th></tr>
                </thead>
                <tbody>
                    <tr><td>Free plan</td><td>Access on sign-up to your {COMPANY.product} account</td><td>Immediately after you create your account</td></tr>
                    <tr><td>Pro subscription</td><td>Pro features unlocked on your registered {COMPANY.product} account</td><td>Immediately after successful payment (usually within a few minutes)</td></tr>
                    <tr><td>Payment confirmation and tax invoice</td><td>Email to your registered email address</td><td>Within 24 hours of payment</td></tr>
                </tbody>
            </table>

            <h2>3. If your plan is not activated</h2>
            <p>
                If your Pro features are not available within 2 hours of a successful payment, sign out and sign in again. If they are still missing, email{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with your registered email address and transaction ID. We will activate your plan within 48 hours of your report,
                or refund the payment in full under our <Link to="/refund-policy">Refund Policy</Link>.
            </p>

            <h2>4. Where we deliver</h2>
            <p>
                {COMPANY.product} is available online in India and internationally, wherever it can lawfully be offered. You need a modern web browser and an internet connection; any
                data charges from your internet provider are your responsibility.
            </p>

            <h2>5. Your exported files</h2>
            <p>
                Videos, images and other files you export from {COMPANY.product} are generated in the app and downloaded directly to your device. We do not send exported files by post
                or email.
            </p>
            <LegalContactBlock />
        </LegalDocument>
    );
}
