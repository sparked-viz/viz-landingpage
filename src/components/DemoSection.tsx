import React from 'react';
import { motion } from 'framer-motion';

export const DemoSection: React.FC = () => {
    return (
        <section className="section overflow-hidden py-24 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: 'var(--color-text)' }}
                    >
                        See It In <span className="font-handwritten text-primary italic">Action</span>
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Image 1 - NLM Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="aspect-video bg-purple-100 border-4 border-purple-300 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2"
                        >
                            <img
                                src="/nlm example image.png"
                                alt="Newton's Laws of Motion Example"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Image 2 - Waves Example */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="aspect-video bg-yellow-100 border-4 border-yellow-400 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-yellow-200 transition-all duration-300 hover:-translate-y-2"
                        >
                            <img
                                src="/waves example image.png"
                                alt="Waves Physics Example"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Full Demo Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full aspect-video bg-white border-4 border-accent rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
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
