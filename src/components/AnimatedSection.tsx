"use client";

import React, { useRef } from 'react';
import ScrollAnimator from './ScrollAnimator';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    as?: 'section' | 'div' | 'main' | 'article' | 'aside' | 'header' | 'footer' | 'nav';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
    children, 
    className = "", 
    as: Component = "section" 
}) => {
    const sectionRef = useRef<HTMLElement>(null);

    const ComponentWrapper = Component as React.ElementType;

    return (
        <ScrollAnimator rootRef={sectionRef}>
            <ComponentWrapper ref={sectionRef} className={className}>
                {children}
            </ComponentWrapper>
        </ScrollAnimator>
    );
};

export default AnimatedSection;
