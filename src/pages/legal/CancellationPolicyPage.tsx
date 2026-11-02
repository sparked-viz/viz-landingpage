import { Link } from 'react-router-dom';
import { LegalContactBlock, LegalDocument } from '../../components/LegalDocument';
import { COMPANY } from '../../content/company';

export function CancellationPolicyPage() {
    return (
        <LegalDocument
            title="Cancellation & Return Policy"
            kicker="cancel any time, keep your work"
            summary={
                <ul>
                    <li>You can cancel your subscription <strong>at any time</strong>. No cancellation fee.</li>
                    <li>You keep paid features <strong>until the end of the billing period</strong> you have paid for, then move to the Free plan. We never delete your projects because you cancelled.</li>
                    <li>{COMPANY.product} is a digital service, so there is <strong>nothing to return</strong>.</li>
                </ul>
            }
        >
            <h2>1. How to cancel</h2>
            <p>You can cancel your Pro subscription in any of these ways:</p>
            <ul>
                <li>In {COMPANY.product}, go to <strong>Account → Billing</strong> and choose <strong>Cancel subscription</strong>; or</li>
                <li>Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> from your registered email address with the subject "Cancel subscription". We confirm the cancellation by email within 1 business day.</li>
            </ul>
            <p>
                To avoid being charged for the next month, cancel at least <strong>24 hours before your renewal date</strong>. Your renewal date is shown in your account and in the
                pre-debit notification we send before each renewal.
            </p>

            <h2>2. What happens after you cancel</h2>
            <ul>
                <li>Automatic renewal stops and no further charges are made.</li>
                <li>You keep full Pro access until the end of the current paid billing period.</li>
                <li>
                    After that, your account moves to the Free plan: cloud backup &amp; sync, access across devices, sharing projects with students, AI features,
                    1080p/4K export and watermark-free export stop. We do not delete your projects because you cancelled; download anything you need from the cloud
                    before your Pro period ends. You can re-subscribe at any time.
                </li>
                <li>Cancelling does not by itself refund the current billing period. If you cancel within 14 days of your first payment, you can ask for a full refund under the money-back guarantee in our <Link to="/refund-policy">Refund Policy</Link>.</li>
            </ul>

            <h2>3. Payment mandates</h2>
            <p>
                If you pay by card or UPI AutoPay, cancelling your subscription with us also cancels the recurring mandate. You can additionally revoke the mandate from your bank or UPI
                app at any time; if you do, please cancel in {COMPANY.product} as well so your account status stays accurate.
            </p>

            <h2>4. Cancellation by {COMPANY.brand}</h2>
            <p>
                We may cancel a subscription for a material breach of our <Link to="/terms">Terms &amp; Conditions</Link> or if required by law. If we discontinue a paid plan or close
                your account without any breach on your part, we will give you notice where possible, a chance to export your work, and a refund of the unused portion of your current
                billing period.
            </p>

            <h2>5. Returns and exchanges</h2>
            <p>
                {COMPANY.product} is software delivered online. There are no physical products to return or exchange, and a subscription period that has been activated cannot be
                "returned". If you were charged in error, see our <Link to="/refund-policy">Refund Policy</Link>.
            </p>

            <h2>6. Upgrades and downgrades</h2>
            <ul>
                <li>Upgrading from Free to Pro takes effect immediately after successful payment.</li>
                <li>Downgrading from Pro to Free works like a cancellation: it takes effect at the end of the current billing period.</li>
            </ul>
            <LegalContactBlock />
        </LegalDocument>
    );
}
