import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Viz', href: '#viz' },
    { label: 'Sparky', href: '#sparky' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-line"
            >
                <div className="container-wide flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <img src="/sparkEd_logo.png" alt="SparkEdu" className="h-16 w-16 object-cover rounded-lg" />
                        <span className="font-bold text-base tracking-wide text-ink">SparkEdu</span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-ink hover:text-brand transition-colors duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA + mobile toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdGuo9L7pk76kpYWZQxzRVHa3fPZtvq231rapR8o2VLKGXIxA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-brand text-sm px-5 py-2">
                                Show me how it works
                            </button>
                        </a>
                        <button
                            className="md:hidden text-ink p-1 transition-colors hover:text-brand"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg border-b border-line p-4 flex flex-col gap-1 md:hidden"
                >
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-4 py-3 text-sm font-medium text-ink hover:text-brand hover:bg-brand-subtle rounded-lg transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </>
    );
};
