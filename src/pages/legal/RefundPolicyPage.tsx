import { Link } from 'react-router-dom';
import { LegalContactBlock, LegalDocument } from '../../components/LegalDocument';
import { COMPANY } from '../../content/company';

export function RefundPolicyPage() {
    return (
        <LegalDocument
            title="Refund Policy"
            kicker="clear rules, no surprises"
            summary={
                <ul>
                    <li>Subscription payments are <strong>non-refundable</strong>, except for <strong>failed, duplicate or incorrect charges</strong>.</li>
                    <li>Approved refunds are initiated within <strong>2 business days</strong> and credited within <strong>5–7 business days</strong> after that.</li>
                    <li>Refunds always go back to the <strong>original payment method</strong> (the same card, UPI ID, bank account or wallet).</li>
                </ul>
            }
        >
            <h2>1. Scope</h2>
            <p>
                This policy applies to payments made to {COMPANY.legalName} for {COMPANY.brand} / {COMPANY.product} paid plans purchased on {COMPANY.website.replace('https://', '')}{' '}
                and processed through our payment gateway partner.
            </p>

            <h2>2. When you are eligible for a refund</h2>
            <ul>
                <li><strong>Duplicate payment:</strong> you were charged more than once for the same plan and billing period.</li>
                <li><strong>Failed transaction:</strong> money was debited from your account but the payment failed, or your paid plan was not activated and we could not activate it within 48 hours of you reporting it.</li>
                <li><strong>Incorrect amount:</strong> you were charged more than the price and taxes shown on the checkout page. We refund the difference.</li>
                <li><strong>Service discontinued by us:</strong> if we discontinue the paid plan or close your account without any breach on your part, we refund the unused portion of your current billing period.</li>
            </ul>

            <h2>3. What is not refundable</h2>
            <ul>
                <li>Subscription fees for a billing period that has started and in which your plan was activated, including partly used months.</li>
                <li>Automatic renewals that were charged because the subscription was not cancelled before the renewal date (you receive a pre-debit notification before each renewal).</li>
                <li>Change of mind, unused features or lessons, or not using the service during a paid period.</li>
                <li>Accounts suspended or terminated for breach of our <Link to="/terms">Terms &amp; Conditions</Link>.</li>
            </ul>
            <p>The Free plan has no charge, so no payment or refund applies to it.</p>

            <h2>4. How to request a refund</h2>
            <p>
                Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> from your registered email address within <strong>30 days</strong> of the transaction, with the subject
                "Refund request", and include:
            </p>
            <ul>
                <li>your registered email address;</li>
                <li>the transaction/order ID or payment reference number;</li>
                <li>the date and amount of the payment; and</li>
                <li>a short description of the problem (a screenshot of the bank or UPI statement helps for duplicate or failed charges).</li>
            </ul>

            <h2>5. Refund timelines (TAT)</h2>
            <table className="legal-table">
                <thead>
                    <tr><th>Step</th><th>Timeline</th></tr>
                </thead>
                <tbody>
                    <tr><td>We acknowledge your request</td><td>Within 1 business day</td></tr>
                    <tr><td>We verify the transaction with our payment gateway and confirm approval or rejection by email</td><td>Within 3 business days of your request</td></tr>
                    <tr><td>We initiate the approved refund</td><td>Within 2 business days of approval</td></tr>
                    <tr><td>Amount credited to your original payment method</td><td>5–7 business days after initiation (depending on your bank or card issuer)</td></tr>
                </tbody>
            </table>
            <p>
                A payment that fails at checkout is usually reversed automatically by your bank or our payment gateway within 5–7 business days without any request. If you have not
                received it in that time, email us with the transaction details and we will follow up.
            </p>

            <h2>6. Mode of refund</h2>
            <ul>
                <li>Refunds are made <strong>only to the original payment source</strong> used for the purchase: the same credit/debit card, UPI ID, net-banking account or wallet.</li>
                <li>We do not refund in cash, by cheque, or to a different card or account.</li>
                <li>Refunds for international payments are made in the original currency. Any exchange-rate difference or charge applied by your card issuer is outside our control.</li>
                <li>We email you the refund reference number (ARN/RRN) once it is initiated, so you can track it with your bank.</li>
            </ul>

            <h2>7. Chargebacks</h2>
            <p>
                If you believe a charge is wrong, please contact us first. We resolve most billing issues faster than a chargeback. Raising a chargeback for a valid charge may lead to
                suspension of the paid plan while it is investigated.
            </p>

            <h2>8. Contact</h2>
            <p>
                For refund questions, write to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call <a href={`tel:${COMPANY.phone.tel}`}>{COMPANY.phone.display}</a>{' '}
                ({COMPANY.supportHours}).
            </p>
            <LegalContactBlock />
        </LegalDocument>
    );
}
