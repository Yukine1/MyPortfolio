'use client';
import { motion } from 'framer-motion';
import {cn} from "@shared/lib/utils";

const STATIC_BAR_HEIGHTS = [25, 45, 15, 35, 50, 20, 40, 10, 30, 48, 22, 38];

export const AIDiagram = () => {
    return (
        <div className="mt-4 relative w-full h-64 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex flex-col items-center justify-center">

            <div className="flex items-center gap-1.5 mb-12 h-10">
                {STATIC_BAR_HEIGHTS.map((height, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [10, height, 10], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                        className="w-1 bg-blue-500 rounded-full"
                    />
                ))}
            </div>

            <div className="flex items-center gap-3 z-10 scale-90 md:scale-100">
                <TechPill label="Voice Input" color="blue" />
                <div className="w-4 h-px bg-white/10" />
                <TechPill label="NestJS" color="red" />
                <div className="w-4 h-px bg-white/10" />
                <TechPill label="PostgreSQL" color="green" />
            </div>

            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-size-[20px_20px]" />
        </div>
    );
};

const TechPill = ({ label, color }: { label: string, color: 'blue' | 'red' | 'green' }) => {
    const colors = {
        blue: "border-blue-500/30 text-blue-400 bg-blue-500/5",
        red: "border-red-500/30 text-red-400 bg-red-500/5",
        green: "border-green-500/30 text-green-400 bg-green-500/5"
    };

    return (
        <div className={cn(
            "flex items-center justify-center px-4 py-2 rounded-full border backdrop-blur-sm",
            colors[color]
        )}>
            <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                {label}
            </span>
        </div>
    );
};