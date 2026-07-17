import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Mic, Scissors, Share2, ArrowRight, ArrowDown, Check } from 'lucide-react';

const WORKFLOW_STEPS = [
    { icon: <Lightbulb className="w-5 h-5" />, label: 'Create' },
    { icon: <Mic className="w-5 h-5" />, label: 'Record & Explain' },
    { icon: <Scissors className="w-5 h-5" />, label: 'Edit' },
    { icon: <Share2 className="w-5 h-5" />, label: 'Export' },
];

const KEY_MESSAGES = [
    'One integrated workflow',
    'No switching between multiple apps',
    'No rebuilding lessons',
    'No recording everything again',
];

export const SaveTime: React.FC = () => {
    return (
        <section id="save-time" className="section bg-bg">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-display-xl font-bold text-ink max-w-2xl mx-auto mb-6"
                    >
                        Spend your time explaining—not editing.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-body-lg text-ink-secondary max-w-xl mx-auto"
                    >
                        Everything happens in one place.
                    </motion.p>
                </div>

                {/* Workflow */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16, duration: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 mb-16 px-4 max-w-4xl mx-auto"
                >
                    {WORKFLOW_STEPS.map((step, i) => (
                        <React.Fragment key={step.label}>
                            <div className="card flex flex-col items-center gap-3 px-6 py-5 min-w-[160px]">
                                <div className="w-10 h-10 rounded-lg bg-brand-subtle flex items-center justify-center text-brand">
                                    {step.icon}
                                </div>
                                <span className="text-body-sm font-semibold text-ink text-center whitespace-nowrap">
                                    {step.label}
                                </span>
                            </div>
                            {i < WORKFLOW_STEPS.length - 1 && (
                                <>
                                    <ArrowDown className="w-5 h-5 text-ink-tertiary flex-shrink-0 md:hidden" />
                                    <ArrowRight className="w-5 h-5 text-ink-tertiary flex-shrink-0 hidden md:block" />
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>

                {/* Key Messages */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
                    {KEY_MESSAGES.map((m, i) => (
                        <motion.div
                            key={m}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.32 + i * 0.06, duration: 0.4 }}
                            className="flex items-center gap-2 bg-white rounded-pill px-5 py-2.5 shadow-sm border border-line"
                        >
                            <Check className="w-4 h-4 text-brand flex-shrink-0" />
                            <span className="text-body-sm font-medium text-ink">{m}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
