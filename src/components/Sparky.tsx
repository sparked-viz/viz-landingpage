import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, DollarSign, Calendar, Bell, BarChart3, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: 'Student Records',
        desc: 'Centralised student profiles with complete academic history and progress tracking.',
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: 'Attendance Tracking',
        desc: 'Digital attendance for students and staff with instant reports and alerts.',
    },
    {
        icon: <DollarSign className="w-5 h-5" />,
        title: 'Fee Management',
        desc: 'Automated fee collection, reminders, and detailed billing reports.',
    },
    {
        icon: <Calendar className="w-5 h-5" />,
        title: 'Timetable Scheduling',
        desc: 'Smart scheduling tools that eliminate conflicts and save planning time.',
    },
    {
        icon: <Bell className="w-5 h-5" />,
        title: 'Parent Communication',
        desc: 'Push notifications and announcements to keep parents in the loop.',
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        title: 'Analytics & Reports',
        desc: 'Performance dashboards to help management make data-driven decisions.',
    },
];

export const Sparky: React.FC = () => {
    return (
        <section id="sparky" className="section bg-bg-secondary overflow-hidden">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overline mb-6"
                    >
                        ERP for Schools
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-display-xl font-bold text-ink mb-6"
                    >
                        Meet Sparky
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-body-lg text-ink-secondary max-w-2xl mx-auto"
                    >
                        A complete school management system that lets educators and administrators focus on what matters — teaching.
                    </motion.p>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                            className="card-raised p-6 flex flex-col gap-4"
                        >
                            <div className="w-9 h-9 rounded-lg bg-brand-subtle flex items-center justify-center text-brand">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-ink mb-1">{f.title}</h3>
                                <p className="text-body-sm text-ink-secondary">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-14"
                >
                    <a
                        href="#contact"
                        className="btn btn-primary text-base px-10 py-3 inline-flex items-center gap-2"
                    >
                        Get in touch
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
