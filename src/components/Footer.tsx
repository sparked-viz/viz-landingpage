import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark border-t border-line-dark py-10">
            <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-bold text-sm tracking-wide text-white/80">SparkEdu</span>
                <span className="text-label-sm text-white/40">
                    &copy; {new Date().getFullYear()} SparkEdu. All rights reserved.
                </span>
            </div>
        </footer>
    );
};
