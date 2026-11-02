// Single source of truth for the business details the bank/payment-gateway review checks:
// legal name, GSTIN, registered address and contact. Used by the footer, About page,
// pricing and every legal page, so they can never disagree with each other.

export const COMPANY = {
    brand: 'SparkEdu',
    product: 'Viz',
    legalName: 'SPARKEDU TECHNOLOGIES LLP',
    entity: 'a limited liability partnership registered in India',
    // GSTIN and address exactly as on the GST registration certificate (Form GST REG-06, issued 02/04/2026).
    gstin: '29AFWFS9899G1ZH',
    addressLines: ['P. No. 198, Sy No. 17, 1st Biddapur', 'Hirapur, Kalaburagi', 'Karnataka – 585103, India'],
    email: 'sparkedutechnologies@gmail.com',
    phone: { display: '+91 93806 68711', tel: '+919380668711' },
    supportHours: 'Monday to Friday, 10:00 AM – 6:00 PM IST (excluding public holidays)',
    grievanceOfficer: 'Prajwal V Sangam',
    website: 'https://www.sparkedunow.com',
    appUrl: 'https://www.sparkedunow.com/viz',
} as const;

export const COMPANY_ADDRESS = COMPANY.addressLines.join(', ');

export const POLICIES_LAST_UPDATED = 'November 2, 2026';

export const LEGAL_LINKS = [
    { to: '/terms', label: 'Terms & Conditions' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/refund-policy', label: 'Refund Policy' },
    { to: '/cancellation-policy', label: 'Cancellation & Return Policy' },
    { to: '/shipping-policy', label: 'Shipping & Delivery Policy' },
    { to: '/contact', label: 'Contact Us' },
];
