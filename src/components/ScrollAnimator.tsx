"use client";

import React, { useEffect, useRef } from 'react';

interface ScrollAnimatorProps {
    children: React.ReactNode;
    rootRef?: React.RefObject<HTMLElement | null>;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ children, rootRef }) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const targetRef = rootRef || internalRef;

    useEffect(() => {
        const rootElement = targetRef.current;
        if (!rootElement) return;

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find elements inside the observed section that need animation
                    const elementsToAnimate = entry.target.querySelectorAll('.animate-on-scroll');
                    elementsToAnimate.forEach((element: Element) => {
                        const delayAttr = element.getAttribute('data-animation-delay');
                        const delay = delayAttr ? parseInt(delayAttr) : 0;

                        setTimeout(() => {
                            element.classList.add('opacity-100', 'translate-y-0');
                            element.classList.remove('opacity-0', 'translate-y-5');
                        }, delay);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe the root container, and let the observer find the children
        animationObserver.observe(rootElement);

        return () => {
            animationObserver.unobserve(rootElement);
        };
    }, [targetRef]);

    return (
        <div ref={internalRef}>
            {children}
        </div>
    );
};

export default ScrollAnimator;
