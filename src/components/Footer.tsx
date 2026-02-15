import React from 'react';
import { Hexagon, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-bg">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Hexagon className="w-5 h-5 text-secondary" />
                    <span className="font-bold tracking-wider text-sm text-dim">VIZ INFRASTRUCTURE</span>
                </div>

                <div className="text-dim text-sm">
                    &copy; {new Date().getFullYear()} Viz. All rights reserved.
                </div>

                <div className="flex gap-4">
                    {[Twitter, Github, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="text-dim hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
