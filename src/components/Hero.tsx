import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { trackCTAClick, trackVideoPlay, trackVideoWatchTime } from '../analytics';

export const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const lastReportedSecond = useRef(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const videoName = 'Hero Demo Video';

        const handlePlay = () => { trackVideoPlay(videoName); };

        const handleTimeUpdate = () => {
            const currentSecond = Math.floor(video.currentTime);
            if (currentSecond > 0 && currentSecond % 10 === 0 && currentSecond !== lastReportedSecond.current) {
                lastReportedSecond.current = currentSecond;
                trackVideoWatchTime(videoName, 10);
            }
        };

        const handlePauseOrEnd = () => {
            const remainder = Math.floor(video.currentTime) % 10;
            if (remainder > 0) trackVideoWatchTime(videoName, remainder);
        };

        video.addEventListener('play', handlePlay);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('pause', handlePauseOrEnd);
        video.addEventListener('ended', handlePauseOrEnd);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('pause', handlePauseOrEnd);
            video.removeEventListener('ended', handlePauseOrEnd);
        };
    }, []);

    return (
        <section id="home" className="bg-white pt-36 pb-24 overflow-hidden">
            <div className="container flex flex-col items-center text-center">

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overline-brand mb-6"
                >
                    SparkEdu · Where Education Meets Innovation
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="text-display-2xl font-bold text-ink max-w-4xl mb-6 px-4"
                >
                    Teach with clarity, not repetition.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className="text-body-lg text-ink-secondary max-w-xl mb-10 px-4"
                >
                    Students understand faster. Classes move forward.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.24 }}
                    className="flex flex-col sm:flex-row items-center gap-3 mb-4"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdGuo9L7pk76kpYWZQxzRVHa3fPZtvq231rapR8o2VLKGXIxA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-brand text-base px-8 py-3 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                        onClick={() => trackCTAClick('See how it works')}
                    >
                        See how it works
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.32 }}
                    className="text-label-sm text-ink-tertiary mb-20"
                >
                    Limited early access spots available
                </motion.p>

                {/* Video */}
                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-0 media-frame"
                >
                    <video
                        ref={videoRef}
                        className="w-full aspect-video object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    >
                        <source src="/resources/nishant-jindal-reduced-size.mp4#t=12" type="video/mp4" />
                    </video>
                </motion.div>
            </div>
        </section>
    );
};
