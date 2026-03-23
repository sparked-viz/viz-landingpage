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
    subtitle: string;
    benefits: Benefit[];
    sharedMedia?: Array<{ src: string; type: 'gif' | 'mp4' }>;
    dark?: boolean;
}

const features: Feature[] = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Short-Term Value',
        subtitle: 'Immediate clarity in every session.',
        benefits: [
            {
                text: 'Clarity in problem visualization',
                media: '/resources/clarity-in-problem-visualization.mp4',
                mediaType: 'mp4',
            },
        ],
        dark: false,
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'Long-Term Value',
        subtitle: 'Mental models that last a lifetime.',
        benefits: [
            {
                text: 'Strong mental model formation',
                media: '/resources/constraints_mental_model.mp4',
                mediaType: 'mp4',
            },
            {
                text: 'Concept transfer across problems',
                media: '/resources/projectile-mental-model.mp4',
                mediaType: 'mp4',
            },
        ],
        dark: true,
    },
];


const MediaCarousel: React.FC<{
    media: Array<{ src: string; type: 'gif' | 'mp4' }>;
    dark?: boolean;
}> = ({ media, dark }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex(prev => (prev + 1) % media.length);
    const prevSlide = () => setCurrentIndex(prev => (prev - 1 + media.length) % media.length);

    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [media.length]);

    const current = media[currentIndex];

    return (
        <div className={`relative w-full rounded-xl overflow-hidden ${dark ? 'media-frame-dark' : 'media-frame'}`}>
            <div className="relative w-full aspect-video bg-bg-dark">
                {current.type === 'gif' ? (
                    <img
                        src={current.src}
                        alt="Mental model visualization"
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                ) : (
                    <video
                        src={current.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
            </div>

            {media.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all backdrop-blur-sm z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all backdrop-blur-sm z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {media.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
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
        <section className="section bg-bg-secondary">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overline mb-4"
                    >
                        Why VIZ
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-4"
                    >
                        Designed for clarity. Built for speed.
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={feature.dark ? 'card-dark p-8 md:p-12' : 'card-raised p-8 md:p-12'}
                        >
                            <div className="space-y-8">
                                {/* Title block */}
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${feature.dark ? 'bg-white/10 text-white' : 'bg-bg-secondary text-ink'}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-display-lg font-bold mb-1 ${feature.dark ? 'text-white' : 'text-ink'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-body-md ${feature.dark ? 'text-white-dim' : 'text-ink-secondary'}`}>
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <ul className="space-y-8">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="space-y-5">
                                            <p className={`text-body-lg font-medium ${feature.dark ? 'text-white/80' : 'text-ink-secondary'}`}>
                                                — {benefit.text}
                                            </p>
                                            {benefit.media && (
                                                <div className="w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0">
                                                    <MediaCarousel
                                                        media={[{ src: benefit.media, type: benefit.mediaType || 'mp4' }]}
                                                        dark={feature.dark}
                                                    />
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                {/* Shared media carousel */}
                                {feature.sharedMedia && feature.sharedMedia.length > 0 && (
                                    <div className="w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0">
                                        <MediaCarousel media={feature.sharedMedia} dark={feature.dark} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
