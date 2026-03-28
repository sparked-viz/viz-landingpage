import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
    return (
        <section id="viz" className="section bg-bg">
            <div className="container">
                <div className="flex flex-col gap-24 items-center">
                    {/* Feature 1: Explainer Tool */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-8 w-full max-w-4xl"
                    >
                        <div className="space-y-4 px-4 sm:px-0">
                            <span className="badge badge-neutral">
                                <MessageSquare size={13} />
                                Interactive
                            </span>
                            <h3 className="text-display-lg font-bold text-ink">Explainer tool</h3>
                            <p className="text-body-lg text-ink-secondary max-w-lg">
                                Write, zoom, laser point and explain. Break down complex physics into logical, visual steps that build lasting mental models.
                            </p>
                        </div>
                        <div className="media-frame w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-0">
                            <video
                                src="/resources/irodov-bolt-lift-1min-reduced-size.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Feature 2: Templates + Edit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-8 w-full max-w-4xl"
                    >
                        <div className="space-y-4 px-4 sm:px-0">
                            <h3 className="text-display-lg font-bold text-ink">Templates + Editor</h3>
                            <p className="text-body-lg text-ink-secondary max-w-lg">
                                Turn problem statements into interactive physical models instantly.
                            </p>
                        </div>
                        <div className="media-frame w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-0">
                            <video
                                src="/resources/ai-integration.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
