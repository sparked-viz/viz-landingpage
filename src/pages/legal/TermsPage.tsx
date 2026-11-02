import { Link } from 'react-router-dom';
import { LegalContactBlock, LegalDocument } from '../../components/LegalDocument';
import { COMPANY } from '../../content/company';

export function TermsPage() {
    return (
        <LegalDocument
            title="Terms & Conditions"
            kicker="the fine print, in plain words"
            summary={
                <p>
                    <strong>{COMPANY.brand}</strong> and <strong>{COMPANY.product}</strong> are brands of <strong>{COMPANY.legalName}</strong>. These Terms cover your
                    use of {COMPANY.website.replace('https://', '')}, the {COMPANY.product} app and any paid plan you buy from us.
                </p>
            }
        >
            <h2>1. Who we are</h2>
            <p>
                This website and the {COMPANY.product} application are owned and operated by {COMPANY.legalName} ("{COMPANY.brand}", "we", "us", "our"), {COMPANY.entity},
                GSTIN {COMPANY.gstin}, with its registered office at {COMPANY.addressLines.join(', ')}.
            </p>
            <p>
                By browsing this website, creating an account or purchasing a plan, you ("you", "user") agree to these Terms &amp; Conditions, our{' '}
                <Link to="/privacy">Privacy Policy</Link>, <Link to="/refund-policy">Refund Policy</Link>, <Link to="/cancellation-policy">Cancellation &amp; Return Policy</Link> and{' '}
                <Link to="/shipping-policy">Shipping &amp; Delivery Policy</Link>. The {COMPANY.product} Terms of Service shown inside the app also apply to your use of the app and
                are intended to be read together with these Terms. If you do not agree, please do not use our services.
            </p>

            <h2>2. Eligibility and accounts</h2>
            <ul>
                <li>You must be at least 18 years old and able to enter into a binding contract under applicable law. If you act for a school or organisation, you confirm you are authorised to bind it.</li>
                <li>Provide accurate account and billing information and keep it up to date.</li>
                <li>Keep your login credentials confidential and tell us promptly at {COMPANY.email} if you suspect unauthorised access.</li>
            </ul>

            <h2>3. Our services</h2>
            <p>
                {COMPANY.product} is a web-based software service (SaaS) for educators and creators. It lets you build visual explanations with text, LaTeX, images, geometry and
                animation; present and record them with narration; edit the recording; and export lessons, videos and short-form clips. Some features, such as cloud sync and AI
                assistance, depend on your plan and on availability. All our services are delivered online; we do not sell or ship physical goods.
            </p>

            <h2>4. Plans and pricing</h2>
            <ul>
                <li>
                    <strong>Free</strong> — no charge. Includes unlimited local projects, full creation and animation tools, LaTeX, presentation mode,
                    project file import/export and video export up to 720p with a {COMPANY.product} watermark.
                </li>
                <li>
                    <strong>Pro</strong> — a paid monthly subscription. Adds cloud backup &amp; sync, access across devices, sharing projects with your students, 1080p and 4K video export
                    without the watermark, and AI features.
                </li>
            </ul>
            <p>The full comparison is on our <Link to="/#pricing">pricing section</Link>.</p>
            <p>
                Prices are displayed in Indian Rupees (INR) to visitors from India, Brazilian Reais (BRL) to visitors from Brazil and US Dollars (USD) elsewhere. The plan, price,
                currency and taxes shown on the checkout page at the time of purchase are the amounts you will be charged.
            </p>
            <p>
                <strong>Taxes:</strong> prices shown to customers in India include Goods and Services Tax (GST) at the applicable rate (currently 18%). The GST component is shown
                separately on your tax invoice. If you are a GST-registered business, you can enter your GSTIN at checkout to receive a B2B invoice. Customers outside India
                are responsible for any taxes that apply to them locally.
            </p>
            <p>
                We may change prices from time to time. Changes never apply to a period you have already paid for; we will email you before a new price applies to your next renewal,
                and you may cancel before it takes effect.
            </p>

            <h2>5. Payments and auto-renewal</h2>
            <ul>
                <li>Payments are processed by our payment gateway partner using the methods offered at checkout (such as credit/debit cards, UPI, net banking and wallets). Your payment details are entered on the gateway's secure page; we do not collect or store your full card number, CVV, UPI PIN or net-banking password.</li>
                <li>The Pro plan renews automatically every month on your billing date until you cancel. Where you have set up a recurring payment mandate (card or UPI AutoPay), you will receive a pre-debit notification before each renewal charge, as required by the Reserve Bank of India.</li>
                <li>If a renewal payment fails, we may retry it and notify you. If it is still unpaid, your account moves to the Free plan; we do not delete your projects because a payment failed.</li>
                <li>A tax invoice/receipt is emailed to your registered email address for every successful payment.</li>
            </ul>

            <h2>6. Cancellation, refunds and delivery</h2>
            <p>
                You can cancel at any time; see our <Link to="/cancellation-policy">Cancellation &amp; Return Policy</Link>. New Pro subscriptions come with a 14-day money-back guarantee; after that,
                refunds are issued for failed, duplicate or incorrect charges, as set out in our <Link to="/refund-policy">Refund Policy</Link>. Paid plans are activated online immediately after successful payment, as described in our{' '}
                <Link to="/shipping-policy">Shipping &amp; Delivery Policy</Link>.
            </p>

            <h2>7. Your content</h2>
            <p>
                You keep the rights you hold in the projects, recordings and other material you create or upload. You grant us a non-exclusive, worldwide, royalty-free licence to host,
                copy, process, sync and deliver that content only as needed to provide the features you use, keep the service secure and answer support requests. We do not publish your
                private projects or use them in advertising. You must have the rights and permissions needed for any material, voice or likeness you upload or record.
            </p>

            <h2>8. Acceptable use</h2>
            <p>
                Do not use our services to break the law or infringe anyone's rights, harass people, distribute malware, commit fraud, impersonate others, access another person's data
                without permission, bypass security or usage limits, resell the service without our written consent, or deliberately disrupt the service.
            </p>

            <h2>9. AI features</h2>
            <p>
                Where AI assistance is available, your instructions and relevant project context may be sent to external AI providers as described in our{' '}
                <Link to="/privacy">Privacy Policy</Link>. AI output can be inaccurate or incomplete; review it before relying on or publishing it.
            </p>

            <h2>10. Our intellectual property</h2>
            <p>
                The {COMPANY.brand} and {COMPANY.product} names, logos, software, interface and supplied materials belong to {COMPANY.legalName} or its licensors. You may use them only to
                access the service as permitted by these Terms. Third-party and open-source licences continue to apply.
            </p>

            <h2>11. Suspension and termination</h2>
            <p>
                We may suspend or restrict access, proportionately, to address a material breach of these Terms, a security threat, unlawful activity or a legal requirement. Where
                reasonable and lawful, we will tell you why and give you a chance to respond. You may stop using the service and request account closure at any time by writing to{' '}
                {COMPANY.email}.
            </p>

            <h2>12. Disclaimers and liability</h2>
            <p>
                We work hard to keep the service available and accurate, but we do not guarantee that it will be uninterrupted, error-free or suitable for every purpose. Keep your own
                exports of important work. To the extent permitted by law, we are not liable for indirect or consequential losses that were not reasonably foreseeable. Nothing in these
                Terms excludes liability that cannot legally be excluded or limits your rights under applicable consumer-protection law.
            </p>

            <h2>13. Changes to these Terms</h2>
            <p>
                We may update these Terms to reflect changes to our services or the law. We will update the "Last updated" date above and notify you of material changes by email or
                in the app before they take effect.
            </p>

            <h2>14. Governing law and disputes</h2>
            <p>
                These Terms are governed by the laws of India. This does not take away any mandatory consumer protections or remedies available to you under the law of the country
                where you live, including Brazil. Please contact us first so we can try to resolve any concern informally.
            </p>

            <h2>15. Grievance officer and contact</h2>
            <p>
                In accordance with the Information Technology Act, 2000, the Consumer Protection (E-Commerce) Rules, 2020 and the rules made under them, our Grievance Officer is{' '}
                <strong>{COMPANY.grievanceOfficer}</strong>, reachable at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We acknowledge complaints within 48 hours and aim to
                resolve them within 30 days.
            </p>
            <LegalContactBlock />
        </LegalDocument>
    );
}
