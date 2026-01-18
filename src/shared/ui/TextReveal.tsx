'use client';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';

interface TextRevealProps {
    text: string;
    className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
    return (
        <div className={cn("overflow-hidden", className)}>
            <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
                {text}
            </motion.p>
        </div>
    );
};