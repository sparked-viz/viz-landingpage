import { Link } from 'react-router-dom';
import { LegalContactBlock, LegalDocument } from '../../components/LegalDocument';
import { COMPANY } from '../../content/company';

export function PrivacyPage() {
    return (
        <LegalDocument
            title="Privacy Policy"
            kicker="your data, handled with care"
            summary={
                <ul>
                    <li>We collect only what we need to run your account, deliver {COMPANY.product}, take payments and improve the product.</li>
                    <li>Card, UPI and bank details are handled by our payment gateway partner — we never see or store your full card number, CVV or PIN.</li>
                    <li>We do not sell your personal data. You can ask us to access, correct or delete it at any time.</li>
                </ul>
            }
        >
            <h2>1. Who is responsible for your data</h2>
            <p>
                {COMPANY.legalName} ("{COMPANY.brand}", "we", "us"), with its registered office at {COMPANY.addressLines.join(', ')}, operates this website and the{' '}
                {COMPANY.product} application and decides how personal data is used for them. Depending on the law that applies, we act as the data fiduciary (India) or controller
                (Brazil, under the LGPD). Privacy requests and complaints: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>

            <h2>2. Information we collect</h2>
            <ul>
                <li><strong>Account and profile:</strong> email address, name, country, role, teaching subject, language and appearance preferences, onboarding status and when you accepted our Terms. Sign-in is handled by our authentication infrastructure.</li>
                <li><strong>Your content:</strong> projects, folders, text, formulas, images, geometry, animations, revisions, audio you record or upload, and recorded timing, pointer and in-app camera movements used to replay your explanation.</li>
                <li><strong>Payment and billing:</strong> plan purchased, amount, currency, date, transaction/order ID, payment status, payment method type, billing name and address, and your GSTIN if you provide one for a business invoice. Card numbers, CVV, UPI PIN and banking passwords are collected directly by our payment gateway partner and are never received or stored by us.</li>
                <li><strong>AI and feedback:</strong> messages and project context you send to AI features, generated responses, usage and error information, and feedback you submit.</li>
                <li><strong>Support:</strong> emails and messages you send us and our replies.</li>
                <li><strong>Website analytics:</strong> pages visited, clicks on buttons and videos, referring site, device and browser type and approximate location (country/city), collected through Google Analytics cookies on this website.</li>
                <li><strong>Technical and usage data:</strong> device and browser information, network and security logs, session times, feature interactions and error events inside {COMPANY.product}.</li>
            </ul>

            <h2>3. How we use it</h2>
            <ul>
                <li>To create and secure your account and provide the features you request, including sync, recording and export.</li>
                <li>To process payments, activate and renew subscriptions, send pre-debit notifications, issue tax invoices and handle refunds.</li>
                <li>To answer support requests and send service messages (for example, receipts, renewal reminders and security notices).</li>
                <li>To understand how the website and product are used, fix problems and improve usability.</li>
                <li>To prevent fraud and abuse and comply with legal, tax and accounting obligations.</li>
            </ul>
            <p>
                We send marketing emails only where permitted by law, and every marketing email lets you opt out. Service and billing messages are not marketing.
            </p>

            <h2>4. Legal basis</h2>
            <p>
                Where the Digital Personal Data Protection Act, 2023 applies, we process personal data with your consent or for the legitimate uses the Act permits, such as a service
                you have requested. Where the Brazilian LGPD applies, we rely on performance of a contract, compliance with legal obligations, exercise of rights and legitimate
                interests (for proportionate security and product measurement), and on consent where it is required. You can withdraw consent at any time by writing to us; this does
                not affect processing already carried out.
            </p>

            <h2>5. Cookies and analytics</h2>
            <p>
                This website uses Google Analytics 4 cookies to measure visits and interactions. The {COMPANY.product} app uses browser storage (local databases and session storage)
                to keep you signed in, remember settings, keep projects available and queue sync. You can block or delete cookies and site data in your browser settings or install
                Google's Analytics opt-out browser add-on. Clearing {COMPANY.product}'s browser storage may remove work that has not yet synced.
            </p>

            <h2>6. Who we share it with</h2>
            <p>We do not sell personal data. We share it only with service providers that help us run the service, and only as needed:</p>
            <ul>
                <li><strong>Our payment gateway partner</strong> — payment processing, recurring mandates and refunds.</li>
                <li><strong>Vercel</strong> — website and app hosting.</li>
                <li><strong>Supabase</strong> — authentication, database and file storage.</li>
                <li><strong>Google Analytics</strong> — website analytics.</li>
                <li><strong>OpenAI and Google (Gemini)</strong> — only when you use AI features.</li>
                <li><strong>YouTube/Google</strong> — when you play an embedded tutorial video.</li>
            </ul>
            <p>
                We may also disclose information when required by law or a valid order of a court or government authority, to establish or defend legal rights, or as part of a
                merger or acquisition subject to confidentiality. Content you choose to share or export goes to the recipients you select.
            </p>

            <h2>7. International transfers</h2>
            <p>
                We operate from India. Our providers may store or process data in other countries whose laws may differ from yours. Where the law requires a transfer mechanism (for
                example, contractual safeguards under the LGPD), we use one.
            </p>

            <h2>8. How long we keep it</h2>
            <ul>
                <li>Account and project data: while your account is active, and deleted or anonymised after a valid deletion request unless we must keep it by law.</li>
                <li>Payment and invoice records: for the period required by Indian tax and accounting laws.</li>
                <li>AI diagnostic records: normally 48 hours; up to 90 days where you submit feedback on an interaction.</li>
                <li>Backups are removed through the normal backup cycle.</li>
            </ul>

            <h2>9. Security</h2>
            <p>
                We use access controls, encryption in transit and other technical and organisational measures to protect personal data, and payments are processed on{' '}
                our payment gateway partner's PCI-DSS compliant infrastructure. No online service is perfectly secure; please protect your password and tell us about any suspected misuse.
                Where a breach triggers a legal duty to notify, we will notify the authorities and affected users as required.
            </p>

            <h2>10. Your rights</h2>
            <p>
                Depending on the law that applies to you, you may ask to access, correct, update, complete or delete your personal data, restrict or object to certain processing,
                receive a copy of your data, withdraw consent, and nominate another person to exercise your rights. Brazilian users may also lodge a complaint with the ANPD. Email{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> from your registered email address with your request. We will never ask for your password.
            </p>

            <h2>11. Children</h2>
            <p>
                {COMPANY.product} accounts are for people aged 18 or over. Do not create an account for a child or upload identifiable data about children. If you believe a child has
                given us personal data, contact us and we will delete it.
            </p>

            <h2>12. Changes to this policy</h2>
            <p>
                We will update the "Last updated" date and tell you about material changes by email or in the app. See also our <Link to="/terms">Terms &amp; Conditions</Link>.
            </p>

            <h2>13. Grievance officer</h2>
            <p>
                For privacy questions or complaints, contact our Grievance Officer, <strong>{COMPANY.grievanceOfficer}</strong>, at{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We acknowledge complaints within 48 hours and aim to resolve them within 30 days.
            </p>
            <LegalContactBlock />
        </LegalDocument>
    );
}
