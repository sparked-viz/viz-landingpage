// Location-based pricing. Visitors see their local currency (India → INR, Brazil → BRL,
// everyone else → USD) and can switch manually. The Viz checkout must charge the same
// amount/currency shown here — keep the two in sync.

export type PricingRegion = 'IN' | 'BR' | 'INTL';

export interface RegionPricing {
    label: string;
    currency: 'INR' | 'BRL' | 'USD';
    locale: string;
    /** Pro plan, per month, as charged (the INR price already includes GST). */
    proMonthly: number;
    /** Shown under the Pro price. */
    taxNote: string;
}

export const REGION_PRICING: Record<PricingRegion, RegionPricing> = {
    IN: {
        label: '₹ INR',
        currency: 'INR',
        locale: 'en-IN',
        proMonthly: 700,
        taxNote: 'incl. 18% GST · billed monthly in INR',
    },
    BR: {
        label: 'R$ BRL',
        currency: 'BRL',
        locale: 'pt-BR',
        proMonthly: 39,
        taxNote: 'billed monthly in BRL',
    },
    INTL: {
        label: '$ USD',
        currency: 'USD',
        locale: 'en-US',
        proMonthly: 8,
        taxNote: 'billed monthly in USD',
    },
};

/** What each plan includes. `yes` cells get a check mark, `no` cells a muted dash. */
export type PlanCell = { text: string; tone: 'yes' | 'no' | 'plain' };

const yes = (text: string): PlanCell => ({ text, tone: 'yes' });
const plain = (text: string): PlanCell => ({ text, tone: 'plain' });
const no: PlanCell = { text: '—', tone: 'no' };

export const PLAN_FEATURES: { feature: string; free: PlanCell; pro: PlanCell }[] = [
    { feature: 'Projects', free: plain('Unlimited local projects'), pro: yes('Unlimited projects + cloud') },
    { feature: 'Creation tools', free: yes('Full access'), pro: yes('Full access') },
    { feature: 'Animations', free: yes('Full access'), pro: yes('Full access') },
    { feature: 'LaTeX', free: yes('Included'), pro: yes('Included') },
    { feature: 'Presentation mode', free: yes('Included'), pro: yes('Included') },
    { feature: 'Project file import/export', free: yes('Included'), pro: yes('Included') },
    { feature: 'Cloud backup & sync', free: no, pro: yes('Included') },
    { feature: 'Access across devices', free: no, pro: yes('Included') },
    { feature: 'Share projects with students', free: no, pro: yes('Included') },
    { feature: 'Video export', free: plain('Up to 720p'), pro: yes('1080p & 4K') },
    // A watermark is a limitation, so Free's "Included" deliberately gets no check mark.
    { feature: 'Viz watermark', free: plain('Included'), pro: yes('Removed') },
    { feature: 'AI features', free: no, pro: yes('Included') },
];

export const PRICING_REGIONS = Object.keys(REGION_PRICING) as PricingRegion[];

export function formatPrice(region: PricingRegion, amount: number): string {
    const { currency, locale } = REGION_PRICING[region];
    return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(amount);
}

const BRAZIL_TIMEZONES = new Set([
    'America/Araguaina', 'America/Bahia', 'America/Belem', 'America/Boa_Vista', 'America/Campo_Grande',
    'America/Cuiaba', 'America/Eirunepe', 'America/Fortaleza', 'America/Maceio', 'America/Manaus',
    'America/Noronha', 'America/Porto_Velho', 'America/Recife', 'America/Rio_Branco', 'America/Santarem',
    'America/Sao_Paulo',
]);

// The browser's time zone is a good-enough country signal for display pricing, needs no
// network round-trip, and works on the statically pre-rendered page.
export function detectPricingRegion(): PricingRegion {
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
        if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') return 'IN';
        if (BRAZIL_TIMEZONES.has(tz) || tz.startsWith('Brazil/')) return 'BR';
    } catch {
        // fall through
    }
    return 'INTL';
}
