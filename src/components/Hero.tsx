import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { trackCTAClick, trackVideoPlay, trackVideoWatchTime } from '../analytics';

export const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const lastReportedSecond = useRef(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const videoName = 'Hero Demo Video';

        const handlePlay = () => {
            trackVideoPlay(videoName);
        };

        const handleTimeUpdate = () => {
            const currentSecond = Math.floor(video.currentTime);
            // Report every 10 seconds of watched time
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
        <section className="relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 bg-gradient-to-br from-purple-100 via-purple-50 to-yellow-50">
            {/* Decorative Blobs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full opacity-15 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent rounded-full opacity-10 blur-2xl"></div>

            <div className="container relative z-10 flex flex-col items-center text-center max-w-6xl">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-2xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 px-4"
                    style={{ color: 'var(--color-text)' }}
                >
                    Help students understand problems{' '}
                    <br />
                    more clearly in your <span className="font-handwritten text-primary italic text-3xl sm:text-6xl md:text-8xl">teaching sessions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm sm:text-lg md:text-xl text-dim max-w-2xl leading-relaxed mb-8 px-4"
                >
                    Build mental models, not just solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center gap-4 mb-16"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="https://docs.google.com/forms/d/1eVGQJjOtWJx2hYPDeiRs1JOgj4pngSoxKI5oN7diiX4/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                            onClick={() => trackCTAClick('Join as Creator Partner')}
                        >
                            Join as a Creator Partner
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdGuo9L7pk76kpYWZQxzRVHa3fPZtvq231rapR8o2VLKGXIxA/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary-yellow text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                            onClick={() => trackCTAClick('Join as Institute Partner')}
                        >
                            Join as Institute Partner
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-sm text-dim/60 font-medium">Limited early access spots available</p>
                </motion.div>

                {/* Video */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0 max-w-4xl aspect-video bg-white border-y-4 sm:border-4 border-primary/20 rounded-xl sm:rounded-3xl relative overflow-hidden shadow-2xl shadow-primary/10 group"
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover rounded-2xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    >
                        <source src="/youtube_solution_Nishant_jindal.mp4#t=12" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0">
                        <div className="w-16 md:w-24 h-16 md:h-24 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
                            <Play fill="currentColor" className="w-8 md:w-12 h-8 md:h-12 ml-1 md:ml-2" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
};
