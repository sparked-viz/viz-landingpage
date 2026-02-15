import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-12 h-12 text-purple-600" />,
        title: "Short-Term Value",
        benefits: [
            "Clarity in problem visualization",
            "Enhanced student engagement",
            "Improved problem-solving efficiency"
        ],
        bgColor: "bg-purple-100",
        borderColor: "border-purple-300",
    },
    {
        icon: <Brain className="w-12 h-12 text-white" />,
        title: "Long-Term Value",
        benefits: [
            "Strong mental model formation",
            "Concept transfer across problems",
            "Deeper understanding of fundamentals"
        ],
        bgColor: "bg-purple-600",
        borderColor: "border-purple-700",
        textColor: "text-white",
    }
];

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

                <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 px-4">
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

                            <div className="relative text-center space-y-4 sm:space-y-6 md:space-y-8">
                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl ${index === 1 ? 'bg-white/20' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-2xl sm:text-3xl md:text-5xl font-bold ${feature.textColor || 'text-gray-800'}`}>
                                    {feature.title}
                                </h3>

                                {/* Benefits */}
                                <ul className="space-y-3 sm:space-y-4 md:space-y-5 max-w-3xl mx-auto">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className={`text-base sm:text-lg md:text-2xl leading-relaxed flex items-center justify-center gap-2 sm:gap-3 md:gap-4 ${feature.textColor ? 'text-white/90' : 'text-gray-700'}`}>
                                            <span className={`text-xl sm:text-2xl md:text-3xl ${feature.textColor ? 'text-white' : 'text-primary'}`}>•</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
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
