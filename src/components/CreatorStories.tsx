import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Youtube, Instagram, MessageCircle } from 'lucide-react';

// Illustrative copy pending real testimonials/screenshots.
const TESTIMONIALS = [
    { quote: 'I created this lesson in 15 minutes.', author: 'SparkEdu Educator' },
    { quote: 'I replaced three different tools.', author: 'SparkEdu Educator' },
    { quote: 'My lessons finally look professional.', author: 'SparkEdu Educator' },
];

const REACTIONS = [
    { icon: Youtube, platform: 'YouTube comment', text: 'This finally made the concept click for me!' },
    { icon: Instagram, platform: 'Instagram comment', text: 'Wait this is so much easier to follow than my textbook 😭' },
    { icon: MessageCircle, platform: 'Student feedback', text: 'Can you make more of these for the next chapter?' },
];

export const CreatorStories: React.FC = () => {
    return (
        <>
            {/* Section 7: Creator Stories */}
            <section id="creator-stories" className="section bg-bg">
                <div className="container">
                    <div className="text-center mb-16 px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-6"
                        >
                            Educators creating with SparkEdu.
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto px-4">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={t.quote}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="card p-8 flex flex-col gap-6"
                            >
                                <Quote className="w-6 h-6 text-brand" />
                                <p className="text-body-lg font-medium text-ink leading-relaxed flex-1">
                                    "{t.quote}"
                                </p>
                                <p className="text-body-sm text-ink-secondary">— {t.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Audience Reactions */}
            <section id="audience-reactions" className="section bg-bg-secondary">
                <div className="container">
                    <div className="text-center mb-16 px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-6"
                        >
                            Your audience notices too.
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto px-4">
                        {REACTIONS.map((r, i) => (
                            <motion.div
                                key={r.text}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="card-raised p-6 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-2 text-ink-tertiary">
                                    <r.icon className="w-4 h-4" />
                                    <span className="text-label-sm uppercase tracking-wider font-semibold">
                                        {r.platform}
                                    </span>
                                </div>
                                <p className="text-body-md text-ink leading-relaxed">{r.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
