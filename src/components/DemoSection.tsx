import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { trackVideoPlay, trackVideoWatchTime } from '../analytics';

export const DemoSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const lastReportedSecond = useRef(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const videoName = 'Demo Section Video';

        const handlePlay = () => {
            trackVideoPlay(videoName);
        };

        const handleTimeUpdate = () => {
            const currentSecond = Math.floor(video.currentTime);
            if (currentSecond > 0 && currentSecond % 10 === 0 && currentSecond !== lastReportedSecond.current) {
                lastReportedSecond.current = currentSecond;
                trackVideoWatchTime(videoName, 10);
            }
        };

        const handlePauseOrEnd = () => {
            const remainder = Math.floor(video.currentTime) % 10;
            if (remainder > 0) {
                trackVideoWatchTime(videoName, remainder);
            }
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
        <section className="section overflow-hidden py-24 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-display-xl font-bold text-ink mb-6"
                    >
                        See It In Action
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-0 md:mb-8 space-y-4 md:space-y-0">
                        {/* Image 1 - NLM Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-[100vw] relative left-[calc(-50vw+50%)] md:w-full md:static md:left-auto aspect-video media-frame rounded-none md:rounded-xl overflow-hidden group"
                        >
                            <img
                                src="/nlm example image.png"
                                alt="Newton's Laws of Motion Example"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Image 2 - Waves Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="w-[100vw] relative left-[calc(-50vw+50%)] md:w-full md:static md:left-auto aspect-video media-frame rounded-none md:rounded-xl overflow-hidden group"
                        >
                            <img
                                src="/waves example image.png"
                                alt="Waves Physics Example"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Full Demo Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-[100vw] relative mt-4 md:mt-0 left-[calc(-50vw+50%)] md:w-full md:static md:left-auto aspect-video media-frame rounded-none md:rounded-xl overflow-hidden"
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                        >
                            <source src="/nlm q33 video.mp4#t=46" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
