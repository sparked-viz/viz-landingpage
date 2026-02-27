import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { trackCTAClick } from '../analytics';

export const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="section relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
            {/* Decorative Blobs */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400 rounded-full opacity-15 blur-3xl"></div>

            <div className="container relative z-10 max-w-4xl text-center px-4 sm:px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl sm:rounded-3xl py-8 px-4 sm:p-12 md:p-20 relative overflow-hidden border-3 sm:border-4 border-primary/20 shadow-2xl shadow-primary/10 w-[calc(100%+4rem)] -mx-8 sm:w-full sm:mx-0"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 sm:mb-8 inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border-3 sm:border-4 border-primary/20"
                    >
                        <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
                    </motion.div>

                    <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 px-4" style={{ color: 'var(--color-text)' }}>
                        Transform How You{' '}
                        <br className="sm:hidden" />
                        <span className="font-handwritten text-primary italic text-3xl sm:text-6xl md:text-8xl">Teach</span>{' '}
                        Physics
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl text-dim max-w-2xl leading-relaxed mx-auto mb-8 px-4" style={{ color: 'var(--color-text-dim)' }}>
                        Join the early cohort shaping the future of visual problem solving.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScnN4HCgpU_5dBix_IIC689a3y0PmYVR-H3FkKQy9Snt2Ds9w/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 inline-flex items-center gap-3 w-full sm:w-auto justify-center group"
                            onClick={() => trackCTAClick('Get Beta Access')}
                        >
                            Get Beta Access
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-dim/70 font-medium">
                        We'll reach out personally after you apply.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
