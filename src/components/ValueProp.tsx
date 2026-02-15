import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-10 h-10 text-purple-600" />,
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
        icon: <Brain className="w-10 h-10 text-white" />,
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
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                        style={{ color: 'var(--color-text)' }}
                    >
                        WHY <span className="font-handwritten text-primary italic text-6xl md:text-8xl">VIZ</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-dim text-xl font-medium"
                    >
                        Designed for clarity. Built for speed.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`${feature.bgColor} ${feature.borderColor} border-4 rounded-3xl p-10 relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${index === 0 ? 'md:-rotate-1' : 'md:rotate-1'}`}
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className={`w-16 h-16 rounded-2xl ${index === 1 ? 'bg-white/20' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${feature.textColor || 'text-gray-800'}`}>
                                {feature.title}
                            </h3>

                            {/* Benefits */}
                            <ul className="space-y-4">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i} className={`text-base md:text-lg leading-relaxed flex items-start gap-3 ${feature.textColor ? 'text-white/90' : 'text-gray-700'}`}>
                                        <span className={`text-2xl ${feature.textColor ? 'text-white' : 'text-primary'}`}>•</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
