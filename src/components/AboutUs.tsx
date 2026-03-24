import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';

const values = [
    {
        icon: <Target className="w-6 h-6 text-ink-secondary" />,
        title: 'Our Mission',
        desc: 'To make conceptual understanding accessible to every student through the power of visual learning.',
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-ink-secondary" />,
        title: 'Our Vision',
        desc: 'A world where no student is held back by an inability to visualise abstract ideas.',
    },
    {
        icon: <Heart className="w-6 h-6 text-ink-secondary" />,
        title: 'Our Values',
        desc: 'Clarity over complexity. Tools built by educators, for educators.',
    },
];

export const AboutUs: React.FC = () => {
    return (
        <section id="about" className="section bg-bg-secondary">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-semibold tracking-widest uppercase text-ink-secondary mb-4"
                    >
                        About SparkEdu
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-6"
                    >
                        Built by educators, for educators.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-body-lg text-ink-secondary max-w-xl mx-auto"
                    >
                        We're a team of educators and engineers passionate about transforming how physics and maths are taught.
                    </motion.p>
                </div>

                {/* Values grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="card-raised p-8 flex flex-col gap-4"
                        >
                            <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center">
                                {v.icon}
                            </div>
                            <h3 className="text-base font-semibold text-ink">{v.title}</h3>
                            <p className="text-body-sm text-ink-secondary leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Products summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="card-raised p-8 sm:p-12 max-w-3xl mx-auto text-center"
                >
                    <p className="text-body-sm text-ink-secondary mb-3">We build two products</p>
                    <p className="text-body-lg font-medium text-ink leading-relaxed">
                        <span className="font-bold text-brand">VIZ</span> — an animation tool that makes physics and maths questions come alive, and{' '}
                        <span className="font-bold text-ink">SPARKY</span> — a full-featured ERP platform for modern schools.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
