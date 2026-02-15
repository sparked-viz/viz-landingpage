import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Gamepad2 } from 'lucide-react';

const features = [
    {
        icon: <Gamepad2 className="w-10 h-10 text-purple-600" />,
        title: "Fun Quiz",
        description: "Test your understanding with a short but fun quizzes!",
        bgColor: "bg-purple-100",
        borderColor: "border-purple-300",
    },
    {
        icon: <Palette className="w-10 h-10 text-white" />,
        title: "Creative Activities",
        description: "Discover enjoyable activities such as coloring, crafting, and science.",
        bgColor: "bg-purple-600",
        borderColor: "border-purple-700",
        textColor: "text-white",
    },
    {
        icon: <Sparkles className="w-10 h-10 text-gray-800" />,
        title: "Learn with Games",
        description: "Learn something new with your kids playing games!",
        bgColor: "bg-yellow-400",
        borderColor: "border-yellow-500",
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
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: 'var(--color-text)' }}
                    >
                        Our <span className="font-handwritten text-primary italic">interactive</span> features
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`${feature.bgColor} ${feature.borderColor} border-4 rounded-3xl p-8 relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${index === 1 ? 'md:-rotate-2' : index === 2 ? 'md:rotate-2' : ''}`}
                            style={{ minHeight: '280px' }}
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className={`w-16 h-16 rounded-2xl ${index === 1 ? 'bg-white/20' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${feature.textColor || 'text-gray-800'}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-base md:text-lg leading-relaxed ${feature.textColor ? 'text-white/90' : 'text-gray-700'}`}>
                                {feature.description}
                            </p>

                            {/* Decorative dots */}
                            {index === 2 && (
                                <div className="absolute top-4 right-4 grid grid-cols-3 gap-2">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-white/40"></div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
