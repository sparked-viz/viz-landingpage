import React from 'react';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
    { image: '/resources/highlights/no-coding.jpg', label: 'No coding' },
    { image: '/resources/highlights/no-animation-software.jpeg', label: 'No animation software' },
    { image: '/resources/highlights/no-complex-timelines.jpeg', label: 'No complex timelines' },
    { image: '/resources/highlights/designed-for-educators.jpeg', label: 'Designed for educators' },
];

export const EaseOfUse: React.FC = () => {
    return (
        <section id="ease-of-use" className="section bg-bg-secondary">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-6"
                    >
                        Looks professional. Feels like teaching.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-body-lg text-ink-secondary max-w-xl mx-auto"
                    >
                        If you can teach on a whiteboard, you can use SparkEdu.
                    </motion.p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-5 sm:gap-8 max-w-2xl mx-auto px-4">
                    {HIGHLIGHTS.map((h, i) => (
                        <motion.div
                            key={h.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.16 + i * 0.08, duration: 0.4 }}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-line bg-ink"
                        >
                            <img
                                src={h.image}
                                alt={h.label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <span className="absolute bottom-0 left-0 right-0 px-4 py-4 text-white text-body-md font-semibold leading-tight">
                                {h.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
