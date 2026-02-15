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
                    className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                    style={{ color: 'var(--color-text)' }}
                >
                    The best place to{' '}
                    <span className="font-handwritten text-primary italic text-6xl md:text-8xl">learn</span>{' '}
                    and{' '}
                    <span className="font-handwritten text-secondary text-6xl md:text-8xl">play</span>
                    <br />
                    for kids
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-dim max-w-2xl leading-relaxed mb-10"
                >
                    Discover thousands of fun and interactive learning activities
                    to support your child's growth and learning process.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-16"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScwqhm8jLM7uBr26liafa6tPc8FjcSbPfH3zZo2Wyg7a3hrtg/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-lg px-12 py-4 inline-flex items-center gap-3"
                    >
                        Get started
                        <ArrowRight className="w-5 h-5" />
                    </a>
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
