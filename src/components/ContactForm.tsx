import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="section relative overflow-hidden py-32">
            <div className="container relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass-card p-12 md:p-20 relative overflow-hidden"
                >
                    {/* Decorative background elements inside card */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg shadow-primary/10"
                    >
                        <Sparkles className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Transform How You <span className="text-gradient">Teach Physics</span>
                    </h2>
                    <p className="text-dim text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join the early cohort shaping the future of visual problem solving.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://forms.google.com/changethis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <button className="btn btn-primary text-xl px-12 py-5 rounded-full flex items-center gap-4 group-hover:shadow-[0_0_40px_rgba(138,43,226,0.5)] transition-shadow duration-300">
                                Enroll as Early Adopter
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-dim/50 font-medium tracking-wide">
                        We’ll reach out personally after you apply.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
