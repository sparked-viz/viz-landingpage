import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 bg-gradient-to-br from-purple-100 via-purple-50 to-yellow-50">
            {/* Decorative Blobs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full opacity-15 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent rounded-full opacity-10 blur-2xl"></div>

            <div className="container relative z-10 flex flex-col items-center text-center max-w-6xl">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 px-4"
                    style={{ color: 'var(--color-text)' }}
                >
                    Visual Problem Solving{' '}
                    <br />
                    Infrastructure for <span className="font-handwritten text-primary italic text-5xl sm:text-6xl md:text-8xl">STEM</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-dim max-w-2xl leading-relaxed mb-8 px-4"
                >
                    Stop explaining. Start showing.<br />
                    Build mental models, not just solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center gap-4 mb-16"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScwqhm8jLM7uBr26liafa6tPc8FjcSbPfH3zZo2Wyg7a3hrtg/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-lg px-12 py-4 inline-flex items-center gap-3"
                    >
                        Enroll as Early Adopter
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-sm text-dim/60 font-medium">Limited early access spots available</p>
                </motion.div>

                {/* Video */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full max-w-4xl aspect-video bg-white border-4 border-primary/20 rounded-3xl relative overflow-hidden shadow-2xl shadow-primary/10"
                >
                    <video
                        className="w-full h-full object-cover rounded-2xl"
                        controls
                        preload="metadata"
                    >
                        <source src="/youtube_solution_Nishant_jindal.mp4#t=12" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};
