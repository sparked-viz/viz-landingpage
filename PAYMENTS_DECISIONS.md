# Payments: Decisions Log

Decisions about accepting international payments for Viz (SparkEdu Technologies LLP), and the website changes made for payment-provider review.

_Last updated: 2 November 2026_

---

## 1. Why we are changing provider

- **PayU rejected international payments (IPG) for MID 13791809 on 29 October 2026.** Reasons given:
  1. Not enough website traffic
  2. No domestic transactions (mandatory under their IPG criteria)
  3. Limited social media presence and low follower count
- We appealed on 30 October (Viz is export-first; most users are teachers in Brazil). On a call, Shivanshu Chaturvedi (PayU) confirmed IPG **cannot be activated** and advised us to **explore other providers**.
- Domestic transaction history does not fit our business: our customers are international by design, mainly in Brazil.

## 2. Provider decision

**We are applying to three providers in parallel.** Applications are free, and running them together means one slow review or rejection doesn't hold us up.

| Provider | Role | Brazil checkout | Who handles tax |
|---|---|---|---|
| **Dodo Payments** | Fastest to approve (review typically 1–3 business days) | Pix (incl. monthly auto-renewal) + cards, priced in BRL | Dodo (merchant of record) |
| **Paddle** | Most established, best long-term trust | Pix (incl. Pix Automático) + cards, priced in BRL | Paddle (merchant of record) |
| **Razorpay** | Cheapest (~3% + GST on international cards) | International cards only, **no Pix** | Us (export invoices, GST) |

Rules:
- **Integrate only the first provider approved.** Most likely Dodo or Paddle, because Brazilian users prefer **Pix**.
- **One provider per customer** at the start. Don't split the same users across providers.
- **Keep every application consistent:** same business name (SPARKEDU TECHNOLOGIES LLP), product description, prices and website.
- **Razorpay:** domestic payments must be *activated* before international can be enabled. Apply for domestic activation early.

Ruled out for now:
- **dLocal / EBANX:** enterprise-focused, sales-led onboarding, custom pricing (EBANX reportedly ~$200/month platform fee). Revisit at much higher volume.
- **Hotmart:** its Pix option requires a Brazilian account.

### Dodo Payments: risk notes
- Trustpilot: 3.6/5 from 182 reviews, very polarised. Complaints include account suspensions, payout delays, strict verification, slow support and fees.
- Our exposure is small (~₹10,000/month). The bigger risk is our users' trust if payments fail.
- Mitigations: withdraw payouts as often as allowed; run real test payments with a few friendly users before announcing; keep billing code provider-neutral so switching to Paddle is a small change.

## 3. Website URL for applications

- **Give the landing page: https://www.sparkedunow.com** (not `/viz`).
- The app at `/viz` requires login, so reviewers would only see a sign-in screen. The landing page has the description, pricing, policies and company details publicly.
- Purchase flow (normal for SaaS): landing page pricing → "Start creating" → sign up / log in at `/viz` → upgrade to Pro in the app → provider checkout → back to the app with Pro unlocked.
- Product form wording: *"Viz is a web app at sparkedunow.com/viz. Users sign up for free and upgrade to the Pro plan from within the app; checkout is handled by [provider]."*
- If a reviewer asks for a demo login, create a **separate test account**, not a personal one.

## 4. Website changes made (2 November 2026)

Not yet committed or deployed. **Deploy before submitting provider forms; reviewers check the live site.**

1. **Refund policy** (`src/pages/legal/RefundPolicyPage.tsx`)
   - Added a **14-day money-back guarantee**: full refund within 14 days of the first payment for a new Pro subscription, no questions asked, once per customer.
   - Renewals are still refunded only for failed, duplicate or incorrect charges (30-day window).
   - Removed "change of mind" from the non-refundable list (it contradicted the guarantee).
   - Reason: merchant-of-record providers expect simple, unconditional refund terms. A Paddle rejection reported publicly cited a refund policy that "contains qualifiers".
2. **Terms** (`src/pages/legal/TermsPage.tsx`) and **Cancellation policy** (`src/pages/legal/CancellationPolicyPage.tsx`): now mention the 14-day guarantee, so all three pages agree.
3. **Pricing text** (`src/content/pricing.ts`): BRL and USD now read *"billed monthly in BRL/USD · local taxes calculated at checkout"*. INR keeps "incl. 18% GST".
4. **Policy date** (`src/content/company.ts`): `POLICIES_LAST_UPDATED` set to November 2, 2026.

## 5. Still to do

- [ ] Deploy the website changes above. (`vercel.json` had an unrelated uncommitted change before these edits; check it before committing.)
- [ ] Make sure provider prices match the website exactly: **₹700 / R$39 / $8 per month**.
- [ ] Complete Dodo onboarding as a **Registered Entity**: product form, KYC/KYB (LLP certificate, partners' IDs, selfie), IndusInd bank account in the LLP's name.
- [ ] Apply to Paddle and Razorpay.
- [ ] After approval, add a reseller clause to Terms and Privacy, e.g. *"Purchases outside India are processed by our authorised reseller and merchant of record, [Paddle/Dodo Payments], who handles payment, tax and invoicing."*
- [ ] Add a line to Terms/Cancellation that international renewals follow the payment provider's renewal and notification process (current wording refers to RBI pre-debit / UPI AutoPay).
- [ ] Optional: switch the public contact email to a domain address (e.g. support@sparkedunow.com).
- [ ] Confirm with IndusInd: purpose code for software-export payouts (earlier FIRA used P0802), FIRA per payout, inward remittance charges, and acceptance of payouts via intermediaries.

## 6. Integration notes (app repo `D:\Projects\viz3`)

- `billing_orders` already has a `payment_provider` column (`cashfree`, `payu`), so the new provider is another value.
- `fulfil_payu_payment` (activation, renewal extension, AI credits) can be copied for the new provider; it currently only accepts **INR**, so allow **BRL** (and USD).
- New work: server-side checkout session creation, signature-verified webhook for payment success/failure, BRL products in the provider dashboard, test-mode testing including Pix.
- Rough estimate: **2–4 days** keeping one-time monthly/annual purchases; **+2–3 days** for true auto-renewing subscriptions (Pix Automático).
- The PayU checkout/callback code was not found in `viz3` (only migrations), so it may live in another repo.
