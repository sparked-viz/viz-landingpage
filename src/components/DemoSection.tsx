import React from 'react';
import { motion } from 'framer-motion';

export const DemoSection: React.FC = () => {
    return (
        <section className="section overflow-hidden py-32">
            <div className="container">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
                    >
                        See It In <span className="text-gradient">Action</span>
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Image 1 - NLM Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="aspect-video bg-surface/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors backdrop-blur-sm"
                        >
                            <img
                                src="/nlm example image.png"
                                alt="Newton's Laws of Motion Example"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>

                        {/* Image 2 - Waves Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="aspect-video bg-surface/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-secondary/30 transition-colors backdrop-blur-sm"
                        >
                            <img
                                src="/waves example image.png"
                                alt="Waves Physics Example"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>
                    </div>

                    {/* Full Demo Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full aspect-video bg-surface/50 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors backdrop-blur-sm"
                    >
                        <video
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
