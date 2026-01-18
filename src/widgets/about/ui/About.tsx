import {FadeInSection} from "@shared/ui/FadeInSection";

export const About = () => {
    return (
        <section className="px-6 lg:px-20 py-32 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <FadeInSection>
                <div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">About Me</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        Frontend developer with 3+ years of experience in creating dynamic, user-focused web applications.
                        I am passionate about the intersection of AI and user interaction.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Skilled in building responsive interfaces and collaborating across cross-functional teams.
                        Currently based in the Netherlands.
                    </p>
                </div>
                </FadeInSection>

                <FadeInSection delay={0.3}>
                <div className="space-y-12">
                    <div>
                        <h3 className="text-white mb-4">Education</h3>
                        <p className="text-gray-400 text-sm">
                            Incomplete Bachelor&#39;s degree, Odesa Technological University &#34;STEP&#34; (Jan 2022).
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span>English (C1)</span>
                            <span>Dutch (A1)</span>
                            <span>Ukrainian & Russian (Native)</span>
                        </div>
                    </div>
                </div>
                </FadeInSection>
            </div>
        </section>
    );
};