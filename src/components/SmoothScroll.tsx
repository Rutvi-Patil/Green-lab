"use client";

import { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
    useEffect(() => {
        // Smooth scroll for anchor links
        const handleAnchorClick = (e: Event) => {
            e.preventDefault();
            const anchor = e.target as HTMLElement;
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return null; // This component doesn't render anything, it just adds functionality
};

export default SmoothScroll;
