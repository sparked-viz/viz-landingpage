import React, { useState } from 'react';
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



    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[450px] lg:h-[650px] group overflow-hidden bg-bg pt-2 pb-8">
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
                            onClick={() => setCurrentIndex(i)}
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
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 text-ink p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 shadow-sm border border-black/15 backdrop-blur-sm z-20"
                aria-label="Previous image"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 text-ink p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 shadow-sm border border-black/15 backdrop-blur-sm z-20"
                aria-label="Next image"
            >
                <ChevronRight size={24} />
            </button>



            {/* Caption display */}
            <div className="absolute bottom-4 left-0 right-0 z-20 px-4 text-center">
                <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-body-md text-ink-secondary/80 sm:text-body-lg sm:text-ink-secondary max-w-2xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: images[currentIndex].caption || '' }}
                />
            </div>
        </div>
    );
};
