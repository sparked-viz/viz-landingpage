import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-12 h-12 text-primary" />,
        title: "Short-Term Value",
        benefits: [
            "Clarity in problem visualization",
            "Enhanced student engagement",
            "Improved problem-solving efficiency"
        ]
    },
    {
        icon: <Brain className="w-12 h-12 text-secondary" />,
        title: "Long-Term Value",
        benefits: [
            "Strong mental model formation",
            "Concept transfer across problems",
            "Deeper understanding of fundamentals"
        ]
    }
];

export const ValueProp: React.FC = () => {
    return (
        <section className="section relative">
            <div className="container">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
                    >
                        WHY <span className="text-gradient">VIZ</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dim text-2xl font-medium tracking-wide"
                    >
                        Designed for clarity. Built for speed.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto space-y-32">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Background glow effect */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl opacity-50 pointer-events-none"></div>

                            <div className="relative text-center space-y-10">
                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
                                    {feature.title}
                                </h3>

                                {/* Benefits */}
                                <ul className="space-y-6 max-w-3xl mx-auto">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="text-dim text-2xl md:text-3xl leading-relaxed flex items-center justify-center gap-4">
                                            <span className="text-primary text-3xl">•</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Separator line (only for first item) */}
                            {index === 0 && (
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
