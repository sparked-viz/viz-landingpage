import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <nav className="flex items-center gap-12 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
        <a href="#" className="flex items-center gap-2 group">
          <Hexagon className="text-secondary w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold tracking-wider text-xl">VIZ</span>
        </a>

        <div className="w-px h-6 bg-white/10"></div>

        <a href="#contact">
          <button className="bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 rounded-full px-6 py-2 text-sm font-semibold transition-all hover:scale-105">
            Enroll Now
          </button>
        </a>
      </nav>
    </motion.div>
  );
};
