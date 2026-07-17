import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselVideo {
    src: string;
    label: string;
}

interface VideoCarouselProps {
    videos: CarouselVideo[];
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [isAutoPlaying, videos.length]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <div className="flex flex-col w-full bg-bg pb-10 sm:pb-16">
            <div className="relative w-full h-[460px] sm:h-[520px] md:h-[600px] lg:h-[660px] group overflow-hidden pt-2">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {videos.map((vid, i) => {
                        let diff = i - currentIndex;
                        if (diff > videos.length / 2) diff -= videos.length;
                        else if (diff < -videos.length / 2) diff += videos.length;

                        const isCenter = diff === 0;

                        return (
                            <motion.div
                                key={i}
                                className="absolute top-0 bottom-0 my-auto w-[66vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] max-w-[340px] h-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl pointer-events-auto cursor-pointer bg-ink"
                                initial={false}
                                animate={{
                                    x: `${diff * 60}%`,
                                    scale: 1 - Math.abs(diff) * 0.2,
                                    opacity: Math.abs(diff) <= 1 ? (1 - Math.abs(diff) * 0.25) : 0,
                                    zIndex: 20 - Math.abs(diff),
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(i);
                                }}
                                style={{ pointerEvents: Math.abs(diff) <= 1 ? 'auto' : 'none' }}
                            >
                                <video
                                    src={vid.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                {!isCenter && (
                                    <div className="absolute inset-0 bg-black/20" />
                                )}
                                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <span className="text-white text-body-sm font-semibold">{vid.label}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <button
                    onClick={handlePrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-ink p-2 sm:p-3 rounded-full opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md border border-black/10 backdrop-blur-md z-20"
                    aria-label="Previous video"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-ink p-2 sm:p-3 rounded-full opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md border border-black/10 backdrop-blur-md z-20"
                    aria-label="Next video"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};
