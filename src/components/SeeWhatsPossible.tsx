import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

// Placeholder clips until real per-category recordings exist.
const EXAMPLES = [
    { label: 'Competition Math', src: '/resources/spring-mental-model.mp4' },
    { label: 'School Math', src: '/resources/constraints_mental_model.mp4' },
    { label: 'Physics', src: '/resources/irodov-bolt-lift-1min-reduced-size.mp4' },
    { label: 'Geometry', src: '/resources/theorem_6.1_triangles.mp4' },
    { label: 'Graphs', src: '/resources/clarity-in-problem-visualization.mp4' },
    { label: 'Whiteboard Lessons', src: '/resources/ai-integration.mp4' },
    { label: 'YouTube Videos', src: '/youtube_solution_Nishant_jindal.mp4' },
    { label: 'Instagram Reels', src: '/resources/nishant-jindal-reduced-size.mp4' },
    { label: 'Course Content', src: '/resources/projectile-mental-model.mp4' },
];

export const SeeWhatsPossible: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="see-whats-possible" className="section bg-bg-secondary">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-6"
                    >
                        Build the explanation you're imagining.
                    </motion.h2>
                </div>

                {/* Example grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
                    {EXAMPLES.map((ex, i) => (
                        <motion.button
                            key={ex.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            onClick={() => setActiveIndex(i)}
                            className="group relative aspect-video rounded-xl overflow-hidden shadow-sm border border-line bg-ink cursor-pointer text-left"
                        >
                            <video
                                src={ex.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 text-ink fill-ink ml-0.5" />
                                </div>
                            </div>
                            <span className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-black/70 to-transparent text-white text-body-sm font-semibold">
                                {ex.label}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setActiveIndex(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                key={EXAMPLES[activeIndex].src}
                                src={EXAMPLES[activeIndex].src}
                                controls
                                autoPlay
                                playsInline
                                className="w-full aspect-video rounded-xl bg-black"
                            />
                            <button
                                onClick={() => setActiveIndex(null)}
                                className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-ink" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
