import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden pt-32 pb-40">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.15 }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.1 }}></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center max-w-5xl">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-8"
                >
                    Visual Problem Solving <br />
                    Infrastructure for <span className="text-gradient">STEM</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-dim max-w-3xl leading-relaxed mb-10"
                    style={{ color: 'var(--color-text-dim)' }}
                >
                    Stop explaining. Start showing.<br />
                    Build mental models, not just solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center gap-4 mb-24"
                >
                    <a href="#contact" className="btn btn-primary text-xl px-10 py-5 shadow-lg shadow-primary/25 hover:shadow-primary/40">
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
                    className="w-full max-w-5xl aspect-video bg-surface/50 border border-white/10 rounded-2xl relative overflow-hidden group backdrop-blur-sm"
                    style={{ boxShadow: '0 0 100px -20px rgba(112, 0, 223, 0.2)' }}
                >
                    <video
                        className="w-full h-full object-cover rounded-2xl"
                        controls
                        preload="metadata"
                    >
                        <source src="/youtube_solution_Nishant_jindal.mp4#t=12" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/20 rounded-tl-2xl pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/20 rounded-br-2xl pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
};
