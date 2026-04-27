import React from 'react';
import { motion } from 'framer-motion';
import { ImageCarousel } from './ImageCarousel';

const CAROUSEL_IMAGES = [
    { src: '/resources/system-flow/step_1_login_screen.png', caption: '<strong>Get started in seconds</strong> and access all your saved work instantly.' },
    { src: '/resources/system-flow/step2_home_page_templates_selection.png', caption: '<strong>Skip the setup</strong> with ready-to-use templates for any physics problem.' },
    { src: '/resources/system-flow/step3_object_creation_menu.png', caption: '<strong>Build models in clicks</strong> using a simple menu designed for speed.' },
    { src: '/resources/system-flow/step4_drag_and_animation.png', caption: '<strong>Animate without the effort</strong> using a simple drag-and-drop timeline.' },
    { src: '/resources/system-flow/step5_the_complete_demonstration.png', caption: '<strong>Everything just works</strong>—no complex math or coding required.' },
    { src: '/resources/system-flow/step6_live_in_class_explaination.png', caption: '<strong>Explain more in less time</strong> with visuals that bring concepts to life instantly.' }
];

export const FeatureShowcase: React.FC = () => {
    return (
        <section id="viz" className="section bg-bg">
            <div className="container">
                <div className="flex flex-col gap-32 items-center">
                    {/* Feature 1: Explainer Tool */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-16 w-full max-w-4xl"
                    >
                        <div className="space-y-6 px-4 sm:px-0 text-center">
                            <h3 className="text-display-lg font-bold text-ink">Make hard ideas easy to see</h3>
                            <p className="text-body-lg text-ink-secondary max-w-lg mx-auto">
                                <strong>Slow down</strong> intricate processes, <strong>zoom into</strong> critical details, and <strong>guide your students' attention</strong> exactly where it needs to be.
                            </p>
                        </div>
                        <div className="media-frame md:w-[calc(100%+3rem)] sm:mx-2 md:-mx-2 lg:-mx-6 md:w-full md:mx-0">
                            <video
                                src="/resources/irodov-bolt-lift-1min-reduced-size.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Feature 2: Templates + Edit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-16 w-full max-w-4xl"
                    >
                        <div className="space-y-6 px-4 sm:px-0 text-center">
                            <h3 className="text-display-lg font-bold text-ink">Model Anything, Effortlessly</h3>
                            <p className="text-body-lg text-ink-secondary max-w-lg mx-auto">
                                Experience a workspace <strong>designed for speed</strong>—where building interactive physical models is as <strong>simple as dragging and dropping</strong>.
                            </p>
                        </div>
                        <div className="w-screen relative left-1/2 -ml-[50vw]">
                            <ImageCarousel images={CAROUSEL_IMAGES} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
