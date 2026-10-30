import { useSyncExternalStore } from 'react';
import { PRICING_REGIONS, detectPricingRegion, type PricingRegion } from '../content/pricing';

const STORAGE_KEY = 'sparkedu:pricing-region';
const listeners = new Set<() => void>();
// Keeps a manual pick for this visit even when storage is unavailable (private mode, blocked site data).
let sessionPick: PricingRegion | null = null;

function readStoredRegion(): PricingRegion | null {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return PRICING_REGIONS.includes(stored as PricingRegion) ? (stored as PricingRegion) : null;
    } catch {
        return null;
    }
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

const getSnapshot = (): PricingRegion => sessionPick ?? readStoredRegion() ?? detectPricingRegion();
// The pre-rendered HTML shows INR (the home market); the visitor's region takes over after hydration.
const getServerSnapshot = (): PricingRegion => 'IN';

export function usePricingRegion() {
    const region = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const setRegion = (next: PricingRegion) => {
        sessionPick = next;
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // sessionPick still applies for this visit
        }
        listeners.forEach(listener => listener());
    };

    return [region, setRegion] as const;
}
