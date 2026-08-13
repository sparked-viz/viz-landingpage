import { useEffect, type RefObject } from 'react';
import { trackVideoPlay, trackVideoProgress } from '../analytics';

const MILESTONES = [25, 50, 75, 100] as const;

/** Fires video_play once, then video_progress at each 25/50/75/100% milestone — mirrors the
 * play/timeupdate tracking the static site did with plain DOM listeners. */
export function useVideoAnalytics(ref: RefObject<HTMLVideoElement | null>, name: string) {
    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        let playFired = false;
        const fired = new Set<number>();

        const onPlay = () => {
            if (playFired) return;
            playFired = true;
            trackVideoPlay(name);
        };

        const onTimeUpdate = () => {
            if (!video.duration) return;
            const pct = (video.currentTime / video.duration) * 100;
            for (const m of MILESTONES) {
                if (pct >= m && !fired.has(m)) {
                    fired.add(m);
                    trackVideoProgress(name, m);
                }
            }
        };

        video.addEventListener('play', onPlay);
        video.addEventListener('timeupdate', onTimeUpdate);
        return () => {
            video.removeEventListener('play', onPlay);
            video.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [ref, name]);
}
