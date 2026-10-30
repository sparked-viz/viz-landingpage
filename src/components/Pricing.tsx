import { Link } from 'react-router-dom';
import { SectionSquiggle } from './SectionSquiggle';
import { trackCTAClick } from '../analytics';
import { COMPANY } from '../content/company';
import { PLAN_FEATURES, PRICING_REGIONS, REGION_PRICING, formatPrice, type PlanCell } from '../content/pricing';
import { usePricingRegion } from '../hooks/usePricingRegion';

function PlanValue({ cell }: { cell: PlanCell }) {
    if (cell.tone === 'no') {
        return (
            <>
                <span className="plan-dash" aria-hidden="true">—</span>
                <span className="plan-sr">Not included</span>
            </>
        );
    }
    return (
        <span className={cell.tone === 'yes' ? 'plan-yes' : 'plan-plain'}>
            {cell.tone === 'yes' && <span className="plan-check" aria-hidden="true">✓</span>}
            {cell.text}
        </span>
    );
}

export function Pricing() {
    const [region, setRegion] = usePricingRegion();
    const pricing = REGION_PRICING[region];

    return (
        <div className="section section-alt" id="pricing">
            <SectionSquiggle />
            <div className="hand" style={{ fontSize: 'clamp(17px,4.5vw,22px)', color: 'oklch(60% 0.11 25)', transform: 'rotate(-2deg)', marginBottom: 10 }}>
                simple, honest pricing
            </div>
            <div className="headline" style={{ fontSize: 'clamp(21px,5.5vw,32px)', maxWidth: 600 }}>
                Start free. <span className="accent">Upgrade when it clicks.</span>
            </div>
            <div className="subhead">Every plan includes the full create → record → export workflow.</div>

            <div className="currency-switch" role="group" aria-label="Show prices in">
                {PRICING_REGIONS.map(r => (
                    <button key={r} type="button" aria-pressed={r === region} onClick={() => setRegion(r)}>
                        {REGION_PRICING[r].label}
                    </button>
                ))}
            </div>

            <div className="plan-table-wrap">
                <table className="plan-table">
                    <caption className="plan-sr">Free and Pro plans compared</caption>
                    <colgroup>
                        <col className="plan-col-feature" />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <td className="plan-corner">
                                <span className="hand">compare plans</span>
                            </td>
                            <th scope="col" className="plan-head">
                                <div className="plan-name">Free</div>
                                <div className="plan-price">
                                    {formatPrice(region, 0)}
                                    <span> / month</span>
                                </div>
                                <div className="plan-note">free forever</div>
                                <div className="plan-desc">For trying your first visual lessons.</div>
                            </th>
                            <th scope="col" className="plan-head plan-pro">
                                <span className="plan-badge hand">most popular</span>
                                <div className="plan-name">Pro</div>
                                <div className="plan-price">
                                    {formatPrice(region, pricing.proMonthly)}
                                    <span> / month</span>
                                </div>
                                <div className="plan-note">{pricing.taxNote}</div>
                                <div className="plan-desc">For teachers and creators publishing every week.</div>
                            </th>
                        </tr>
                        <tr className="plan-cta-row">
                            <td />
                            <td>
                                <a
                                    href={COMPANY.appUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline plan-cta"
                                    onClick={() => trackCTAClick('Get Started', 'pricing_free')}
                                >
                                    Get started
                                </a>
                            </td>
                            <td className="plan-pro">
                                <a
                                    href={COMPANY.appUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary plan-cta plan-cta-primary"
                                    onClick={() => trackCTAClick('Start Creating', 'pricing_pro')}
                                >
                                    Start creating
                                </a>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {PLAN_FEATURES.map(row => (
                            <tr key={row.feature}>
                                <th scope="row">{row.feature}</th>
                                <td><PlanValue cell={row.free} /></td>
                                <td className="plan-pro"><PlanValue cell={row.pro} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="pricing-fineprint">
                Pro renews every month until cancelled. Payments are processed securely through our payment gateway partner.
                By subscribing you agree to our <Link to="/terms">Terms &amp; Conditions</Link>, <Link to="/refund-policy">Refund Policy</Link> and{' '}
                <Link to="/cancellation-policy">Cancellation Policy</Link>.
            </p>
        </div>
    );
}
