'use client';
import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { ProjectCard } from '@/entities/project/ui/ProjectCard';
import { FadeInSection } from '@/shared/ui/FadeInSection';
import { AIDiagram } from './AIDiagram';

export const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { clientX, clientY } = event;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    return (
        <section
            id="projects"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="px-6 lg:px-20 py-32 relative"
        >
            <FadeInSection>
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-12">Selected Experience</h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeInSection delay={0.2} className="md:col-span-2">
                    <ProjectCard
                        title="AI-Powered Voice Assistant"
                        description="Full-stack architecture for conversational data collection. Replaced static forms with a natural dialogue system using NestJS and TypeORM."
                        tags={['NestJS', 'TypeORM', 'AI Integration', 'Node.js']}
                        impact="Enhanced user engagement and automated data processing flow."
                        className="bg-linear-to-br from-[#141414] to-[#1c1c1c]"
                        mouseX={smoothX}
                        mouseY={smoothY}
                    >
                        <AIDiagram />
                    </ProjectCard>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                    <ProjectCard
                        title="Enterprise Notification Panel"
                        description="Led the migration from Angular to React. Designed modular architecture for core dashboard components."
                        tags={['React', 'Redux Toolkit', 'TypeScript', 'Tailwind']}
                        impact="Major security improvement. 30% faster interface delivery & 20% improvement in load times."
                        mouseX={smoothX}
                        mouseY={smoothY}
                    />
                </FadeInSection>

                <FadeInSection delay={0.6}>
                    <ProjectCard
                        title="Custom E-commerce Engine"
                        description="Developed custom Liquid templates and React components for dynamic shopping experiences."
                        tags={['React', 'Liquid', 'Shopify API', 'SEO']}
                        impact="Optimized conversion rates through automated order flows."
                        mouseX={smoothX}
                        mouseY={smoothY}
                    />
                </FadeInSection>
            </div>
        </section>
    );
};