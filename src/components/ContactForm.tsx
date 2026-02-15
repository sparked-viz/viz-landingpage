import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="section relative overflow-hidden py-32 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
            {/* Decorative Blobs */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 rounded-full opacity-15 blur-3xl"></div>

            <div className="container relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-12 md:p-20 relative overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20"
                    >
                        <Sparkles className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                        Transform How You{' '}
                        <span className="font-handwritten text-primary italic">Teach</span>{' '}
                        Physics
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
                        Join the early cohort shaping the future of visual problem solving.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScwqhm8jLM7uBr26liafa6tPc8FjcSbPfH3zZo2Wyg7a3hrtg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <button className="btn btn-primary text-xl px-12 py-5 rounded-full flex items-center gap-4 group-hover:shadow-2xl transition-shadow duration-300">
                                Enroll as Early Adopter
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-dim/70 font-medium">
                        We'll reach out personally after you apply.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
