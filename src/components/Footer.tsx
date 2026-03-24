import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark border-t border-line-dark py-10">
            <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
                {/* <img src="/sparkEd_logo.png" alt="SparkEdu" className="h-16 w-16 object-cover rounded-lg" /> */}
                <span className="text-label-sm text-white/40">
                    &copy; {new Date().getFullYear()} SparkEdu. All rights reserved.
                </span>
            </div>
        </footer>
    );
};
