// GA4 Analytics Utility
// Measurement ID: G-13QMPHM9F1 | Stream ID: 13629585990

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}

const safeGtag = (...args: unknown[]) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag(...args);
    }
};

/**
 * Track a CTA button click.
 * Uses transport: 'beacon' to ensure the event is sent even as the page navigates away.
 * @param label - Human-readable label for the button (e.g. "Join as Creator Partner")
 */
export const trackCTAClick = (label: string) => {
    safeGtag('event', 'cta_click', {
        button_label: label,
        transport_type: 'beacon',
    });
};

/**
 * Track when a user initiates video playback.
 * @param videoName - Identifier for the video (e.g. "Hero Demo Video")
 */
export const trackVideoPlay = (videoName: string) => {
    safeGtag('event', 'video_play', {
        video_name: videoName,
    });
};

/**
 * Track how many seconds of a video the user has watched.
 * @param videoName - Identifier for the video
 * @param secondsWatched - Number of seconds watched since last report
 */
export const trackVideoWatchTime = (videoName: string, secondsWatched: number) => {
    safeGtag('event', 'video_watch_time', {
        video_name: videoName,
        value: secondsWatched,
    });
};
