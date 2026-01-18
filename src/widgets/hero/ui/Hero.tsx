'use client';
import { TextReveal } from '@/shared/ui/TextReveal';
import { FadeInSection } from '@/shared/ui/FadeInSection';

export const Hero = () => {
    return (
        <section className="relative flex flex-col justify-center min-h-screen px-6 lg:px-20 overflow-hidden">

            <div className="z-10">
                <FadeInSection>
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 block">
                        Full Stack Developer • 3+ Years Experience
                    </span>
                </FadeInSection>

                <h1 className="text-6xl md:text-[10vw] font-medium tracking-tighter leading-[0.85] mb-10">
                    <TextReveal text="Alex Kolva" />
                </h1>

                <FadeInSection delay={0.4}>
                    <div className="max-w-2xl">
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                            Specializing in <span className="text-white">React, TypeScript, and AI-driven solutions</span>
                            {" "}Currently building intelligent voice systems in { " " }
                            <span className="text-white border-b border-white/20 pb-1">Zaandam, Netherlands</span>
                        </p>
                    </div>
                </FadeInSection>
            </div>

            <FadeInSection delay={0.8} className="absolute bottom-10 left-6 lg:left-20">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    <div className="w-px h-12 bg-linear-to-b from-white/20 to-transparent" />
                    <span>Scroll to explore</span>
                </div>
            </FadeInSection>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};