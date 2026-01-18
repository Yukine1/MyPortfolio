'use client';
import { motion, useTransform, MotionValue, useMotionValue, useAnimationFrame } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { ReactNode, useRef, useEffect, useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    impact?: string;
    className?: string;
    children?: ReactNode;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}

export const ProjectCard = ({ title, description, tags, impact, className, children, mouseX, mouseY }: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const opacity = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useAnimationFrame(() => {
        if (!cardRef.current || isMobile) {
            if (isMobile) opacity.set(0.5);
            return;
        }

        const rect = cardRef.current.getBoundingClientRect();
        const x = mouseX.get();
        const y = mouseY.get();

        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        const distanceToEdge = Math.sqrt(dx * dx + dy * dy);

        const proximityRadius = 300;
        const newOpacity = Math.max(0, 1 - distanceToEdge / proximityRadius);

        opacity.set(newOpacity);
    });

    const localX = useTransform(mouseX, (latestX) => {
        if (!cardRef.current) return 0;
        const { left } = cardRef.current.getBoundingClientRect();
        return latestX - left;
    });

    const localY = useTransform(mouseY, (latestY) => {
        if (!cardRef.current) return 0;
        const { top } = cardRef.current.getBoundingClientRect();
        return latestY - top;
    });

    const spotlightBackground = useTransform(
        [localX, localY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`
    );

    return (
        <motion.div
            ref={cardRef}
           whileHover={{ y: isMobile ? 0 : -5 }}
    className={cn(
        "group relative p-8 rounded-3xl bg-[#111111] border border-white/5 overflow-hidden transition-all duration-300",
        className
)}
>
<motion.div
    className="pointer-events-none absolute -inset-px rounded-3xl"
    style={{
        background: spotlightBackground,
            opacity: opacity
    }}
    />

    <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-gray-400">
                            {tag}
                        </span>
            ))}
        </div>

        <h3 className="text-3xl font-medium tracking-tight mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-6">{description}</p>

        {children}
        
        {impact && (
            <div className="mt-auto pt-8">
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 backdrop-blur-sm">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1 font-semibold">Business Impact</span>
                    <p className="text-white text-sm italic">&#34;{impact}&#34;</p>
                </div>
            </div>
        )}
    </div>
</motion.div>
);
};