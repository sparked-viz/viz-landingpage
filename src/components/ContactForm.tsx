import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { trackCTAClick } from '../analytics';

export const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="section bg-bg">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overline-brand mb-6"
                    >
                        Early Access
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-display-xl font-bold text-ink mb-6"
                    >
                        Transform how you Teach.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-body-lg text-ink-secondary mb-10"
                    >
                        Join the early cohort shaping the future of visual problem solving.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.24 }}
                    >
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdGuo9L7pk76kpYWZQxzRVHa3fPZtvq231rapR8o2VLKGXIxA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-brand text-base px-10 py-3 inline-flex items-center gap-2 group"
                            onClick={() => trackCTAClick('Show me how it works')}
                        >
                            Show me how it works
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.32 }}
                        className="mt-6 text-label-sm text-ink-tertiary"
                    >
                        We'll reach out personally after you apply.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-secondary"
                    >
                        <a href="mailto:koustubkulkarni9@gmail.com" className="flex items-center gap-2 hover:text-brand transition-colors">
                            <Mail className="w-4 h-4" />
                            koustubkulkarni9@gmail.com
                        </a>
                        <span className="hidden sm:block text-ink-tertiary">·</span>
                        <a href="tel:+919380668711" className="flex items-center gap-2 hover:text-brand transition-colors">
                            <Phone className="w-4 h-4" />
                            +91 93806 68711
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
