import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Play } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
    return (
        <section className="section py-24 bg-gradient-to-b from-white to-purple-50">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900"
                    >
                        AI-Mediated Generation & <span className="text-primary">Persistent Visuals</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xs sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium"
                    >
                        Create models with AI and build deep explanations—all saved securely to your account for whenever you need them.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-16 lg:gap-24 items-center">
                    {/* Feature 1: AI Generation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-6 w-full max-w-5xl"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-primary font-semibold text-sm">
                                <Sparkles size={18} />
                                <span>AI-POWERED</span>
                            </div>
                            <h3 className="text-lg sm:text-3xl font-bold text-gray-900">
                                AI creation tool
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Turn problem statements into interactive physical models instantly.
                            </p>
                        </div>

                        <div className="relative w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0 rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border-y-4 sm:border-4 border-white aspect-video bg-gray-900 group">
                            <video
                                src="/resources/ai-integration.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0">
                                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
                                    <Play fill="currentColor" className="w-8 sm:w-10 h-8 sm:h-10 ml-1 sm:ml-2" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Explainer Tool */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-6 w-full max-w-5xl"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                                <MessageSquare size={18} />
                                <span>INTERACTIVE</span>
                            </div>
                            <h3 className="text-lg sm:text-3xl font-bold text-gray-900">
                                Explainor tool
                            </h3>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Write, Zoom, Laser Point and Explain. Break down complex physics into logical, visual steps that build lasting mental models.
                            </p>
                        </div>

                        <div className="relative w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0 rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border-y-4 sm:border-4 border-white aspect-video bg-gray-900 group">
                            <video
                                src="/resources/irodov-bolt-lift-1min-reduced-size.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0">
                                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-xl">
                                    <Play fill="currentColor" className="w-8 sm:w-10 h-8 sm:h-10 ml-1 sm:ml-2" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
