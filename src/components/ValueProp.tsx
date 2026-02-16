import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

interface Benefit {
    text: string;
    media?: string;
    mediaType?: 'gif' | 'mp4';
}

interface Feature {
    icon: React.ReactNode;
    title: string;
    benefits: Benefit[];
    sharedMedia?: Array<{ src: string; type: 'gif' | 'mp4' }>;
    bgColor: string;
    borderColor: string;
    textColor?: string;
}

const features: Feature[] = [
    {
        icon: <Zap className="w-12 h-12 text-purple-600" />,
        title: "Short-Term Value",
        benefits: [
            {
                text: "Clarity in problem visualization",
                media: "/resources/clarity-in-problem-visualization.gif",
                mediaType: "gif"
            }
        ],
        bgColor: "bg-purple-100",
        borderColor: "border-purple-300",
    },
    {
        icon: <Brain className="w-12 h-12 text-white" />,
        title: "Long-Term Value",
        benefits: [
            {
                text: "Strong mental model formation",
                media: "/resources/mental-model-1.gif",
                mediaType: "gif"
            },
            {
                text: "Concept transfer across problems",
                media: "/resources/projectile-mental-model.mp4",
                mediaType: "mp4"
            }
        ],
        bgColor: "bg-purple-600",
        borderColor: "border-purple-700",
        textColor: "text-white",
    }
];


const MediaCarousel: React.FC<{ media: Array<{ src: string; type: 'gif' | 'mp4' }> }> = ({ media }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    // Auto-scroll every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [media.length]);

    const currentMedia = media[currentIndex];


    return (
        <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Fixed aspect ratio container to prevent layout shift */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                {currentMedia.type === 'gif' ? (
                    <img
                        src={currentMedia.src}
                        alt="Mental model visualization"
                        className="absolute inset-0 w-full h-full object-contain bg-purple-900/10"
                    />
                ) : (
                    <video
                        src={currentMedia.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain bg-purple-900/10"
                    />
                )}
            </div>

            {media.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 transition-all shadow-lg z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 transition-all shadow-lg z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {media.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export const ValueProp: React.FC = () => {
    return (
        <section className="section relative py-24 bg-gradient-to-b from-purple-50 to-white">
            <div className="container">
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
                        style={{ color: 'var(--color-text)' }}
                    >
                        WHY <span className="font-handwritten text-primary italic text-5xl sm:text-6xl md:text-8xl">VIZ</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dim text-base sm:text-lg md:text-xl font-medium"
                    >
                        Designed for clarity. Built for speed.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 px-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`${feature.bgColor} ${feature.borderColor} border-3 sm:border-4 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden`}
                        >
                            {/* Background glow effect */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl opacity-50 pointer-events-none"></div>

                            <div className="relative space-y-6 sm:space-y-8 md:space-y-10">
                                {/* Icon and Title */}
                                <div className="text-center space-y-4 sm:space-y-6">
                                    <div className="flex justify-center">
                                        <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl ${index === 1 ? 'bg-white/20' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl sm:text-3xl md:text-5xl font-bold ${feature.textColor || 'text-gray-800'}`}>
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Benefits */}
                                <ul className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="space-y-4">
                                            <div className={`text-base sm:text-lg md:text-2xl leading-relaxed flex items-center justify-center gap-2 sm:gap-3 md:gap-4 ${feature.textColor ? 'text-white/90' : 'text-gray-700'}`}>
                                                <span className={`text-xl sm:text-2xl md:text-3xl ${feature.textColor ? 'text-white' : 'text-primary'}`}>•</span>
                                                <span>{benefit.text}</span>
                                            </div>
                                            {benefit.media && (
                                                <div className="flex justify-center mt-4">
                                                    <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl">
                                                        {benefit.mediaType === 'gif' ? (
                                                            <img
                                                                src={benefit.media}
                                                                alt={benefit.text}
                                                                className="w-full h-auto"
                                                            />
                                                        ) : (
                                                            <video
                                                                src={benefit.media}
                                                                autoPlay
                                                                loop
                                                                muted
                                                                playsInline
                                                                className="w-full h-auto"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                {/* Shared Media Carousel */}
                                {feature.sharedMedia && feature.sharedMedia.length > 0 && (
                                    <div className="mt-8">
                                        <MediaCarousel media={feature.sharedMedia} />
                                    </div>
                                )}
                            </div>

                            {/* Separator line (only for first item) */}
                            {index === 0 && (
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

