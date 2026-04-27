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
        dark: false,
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

    if (!media || media.length === 0) return null;

    const current = media[currentIndex];

    return (
        <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl ${dark ? 'bg-bg-dark ring-1 ring-white/10' : 'bg-bg-secondary ring-1 ring-ink/5'}`}>
            <div className="relative w-full aspect-video bg-bg-dark">
                {current.type === 'gif' ? (
                    <img
                        src={current.src}
                        alt="Mental model visualization"
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                ) : (
                    <video
                        key={current.src}
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
        <section className="section bg-bg overflow-hidden py-24 md:py-32">
            <div className="container relative">
                {/* Background Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-3xl rounded-full pointer-events-none" />

                {/* Header */}
                <div className="text-center mb-20 md:mb-32 relative z-10 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-semibold tracking-widest uppercase text-ink-secondary mb-4"
                    >
                        Why VIZ?
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-4"
                    >
                        Designed for clarity. Built for speed.
                    </motion.h2>
                </div>

                {/* Alternating Layout */}
                <div className="max-w-6xl mx-auto lg:-mx-12 space-y-32 md:space-y-30 px-4 sm:px-6 lg:px-8">
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        const allMedia = feature.benefits
                            .filter(b => b.media)
                            .map(b => ({ src: b.media!, type: b.mediaType || 'mp4' as const }))
                            .concat(feature.sharedMedia || []);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Text Content */}
                                <div className={`flex-1 w-full z-10 max-w-xl ${isEven ? '' : 'lg:text-right'}`}>
                                    <div className="mb-8">
                                        <h3 className={`text-3xl md:text-4xl font-bold mb-3 ${feature.dark ? 'text-white' : 'text-ink'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-body-lg ${feature.dark ? 'text-white/70' : 'text-ink-secondary'}`}>
                                            {feature.subtitle}
                                        </p>
                                    </div>

                                    <ul className="space-y-6">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className={`flex gap-4 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                                <div className="w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                                                </div>
                                                <p className={`text-body-lg font-medium leading-relaxed ${feature.dark ? 'text-white/90' : 'text-ink'}`}>
                                                    {benefit.text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Media Content */}
                                <div className="flex-1 w-full z-10 w-full max-w-2xl">
                                    <MediaCarousel media={allMedia} dark={feature.dark} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
