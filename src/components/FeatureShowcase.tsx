import React from 'react';
import { motion } from 'framer-motion';
import { VideoCarousel } from './VideoCarousel';

// Placeholder clips (landscape source, cropped to 9:16) until real vertical
// recordings exist per category.
const CAROUSEL_VIDEOS = [
    { src: '/resources/theorem_6.1_triangles.mp4', label: 'Geometry' },
    { src: '/resources/irodov-bolt-lift-1min-reduced-size.mp4', label: 'Physics' },
    { src: '/resources/projectile-mental-model.mp4', label: 'Calculus' },
    { src: '/resources/clarity-in-problem-visualization.mp4', label: 'Graphs' },
    { src: '/youtube_solution_Nishant_jindal.mp4', label: 'Exam Solutions' },
    { src: '/resources/spring-mental-model.mp4', label: 'Instagram Reels' },
];

export const FeatureShowcase: React.FC = () => {
    return (
        <section id="viz" className="section bg-bg">
            <div className="container">
                <div className="flex flex-col gap-32 items-center">
                    {/* Feature 1: What Can I Create? */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-16 w-full max-w-4xl"
                    >
                        <div className="space-y-6 px-4 sm:px-0 text-center">
                            <h3 className="text-display-lg font-bold text-ink">Create explanations worth sharing.</h3>
                            <p className="text-body-lg text-ink-secondary max-w-lg mx-auto">
                                Whether you're teaching in a classroom, recording a YouTube lesson, or creating your next Instagram reel, SparkEdu helps you explain ideas visually.
                            </p>
                        </div>
                        <div className="w-screen relative left-1/2 -ml-[50vw]">
                            <VideoCarousel videos={CAROUSEL_VIDEOS} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
