import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

interface SocialLinksProps {
    className?: string;
    iconClassName?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', iconClassName = 'w-5 h-5' }) => {
    return (
        <div className={`flex items-center justify-center gap-6 ${className}`}>
            <a 
                href="https://www.youtube.com/@SparkEdu-v4v" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ink-secondary hover:text-brand transition-colors flex items-center justify-center p-2 rounded-full hover:bg-brand/10" 
                aria-label="YouTube"
            >
                <Youtube className={iconClassName} />
            </a>
            <a 
                href="https://www.instagram.com/sparkedu_technologies/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ink-secondary hover:text-brand transition-colors flex items-center justify-center p-2 rounded-full hover:bg-brand/10" 
                aria-label="Instagram"
            >
                <Instagram className={iconClassName} />
            </a>
            <a 
                href="https://www.linkedin.com/company/sparkedu-technologies" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-ink-secondary hover:text-brand transition-colors flex items-center justify-center p-2 rounded-full hover:bg-brand/10" 
                aria-label="LinkedIn"
            >
                <Linkedin className={iconClassName} />
            </a>
        </div>
    );
};
