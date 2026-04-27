import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export interface CarouselImage {
    src: string;
    caption?: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="flex flex-col w-full bg-bg pb-10 sm:pb-16">
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[450px] lg:h-[550px] group overflow-hidden pt-2">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {images.map((img, i) => {
                        let diff = i - currentIndex;
                        if (diff > images.length / 2) diff -= images.length;
                        else if (diff < -images.length / 2) diff += images.length;

                        const isCenter = diff === 0;

                        return (
                            <motion.div
                                key={i}
                                className="absolute top-0 bottom-0 my-auto w-[90vw] sm:w-[65vw] md:w-[55vw] lg:w-[48vw] max-w-5xl h-auto aspect-video rounded-xl overflow-hidden shadow-2xl pointer-events-auto cursor-pointer bg-bg"
                                initial={false}
                                animate={{
                                    x: `${diff * 45}%`,
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
                                <img src={img.src} className="w-full h-full object-contain" alt={`Slide ${i + 1}`} />
                                {!isCenter && (
                                    <div className="absolute inset-0 bg-black/20" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <button
                    onClick={handlePrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-ink p-2 sm:p-3 rounded-full opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md border border-black/10 backdrop-blur-md z-20"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-ink p-2 sm:p-3 rounded-full opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md border border-black/10 backdrop-blur-md z-20"
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Caption display - now below the carousel stage */}
            <div className="mt-8 sm:mt-12 px-6 text-center">
                <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-body-md text-ink-secondary sm:text-body-lg max-w-2xl mx-auto carousel-caption"
                    dangerouslySetInnerHTML={{ __html: images[currentIndex].caption || '' }}
                />
            </div>
        </div>
    );
};
