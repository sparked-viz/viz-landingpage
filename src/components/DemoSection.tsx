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
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: 'var(--color-text)' }}
                    >
                        See It In <span className="font-handwritten text-primary italic">Action</span>
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-0 md:mb-8 space-y-4 md:space-y-0">
                        {/* Image 1 - NLM Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-[100vw] relative left-[calc(-50vw+50%)] md:w-full md:static md:left-auto aspect-video bg-purple-100 border-y-4 md:border-4 border-purple-300 rounded-none md:rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2"
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
                            className="w-[100vw] relative left-[calc(-50vw+50%)] md:w-full md:static md:left-auto aspect-video bg-yellow-100 border-y-4 md:border-4 border-yellow-400 rounded-none md:rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-yellow-200 transition-all duration-300 hover:-translate-y-2"
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
                        className="w-[100vw] relative mt-4 md:mt-0 left-[calc(-50vw+50%)] md:w-full md:static md:left-auto aspect-video bg-white border-y-4 md:border-4 border-accent rounded-none md:rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
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
