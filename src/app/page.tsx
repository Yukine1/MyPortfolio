import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { Hero } from '@/widgets/hero/ui/Hero';
import { ProjectList } from '@/widgets/project-list/ui/ProjectList';
import { TechStack } from '@/widgets/tech-stack/ui/TechStack';
import { About } from '@/widgets/about/ui/About';
import { Contact } from '@/widgets/contact/ui/Contact';

export default function HomePage() {
    return (
        <main className="bg-[#0a0a0a] text-white min-h-screen">
            <Navbar />

            <Hero />

            <section id="projects">
                <ProjectList />
            </section>

            <section id="stack">
                <TechStack />
            </section>

            <About />

            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}