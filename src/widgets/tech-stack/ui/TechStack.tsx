import { cn } from '@/shared/lib/utils';

const groups = [
    {
        title: "Frontend",
        skills: ["JavaScript", "TypeScript", "React", "Next", "Redux", "Angular", "Tailwind CSS"]
    },
    {
        title: "Backend & DB",
        skills: ["Node.Js", "Nest.Js", "PostgreSQL", "Mongo DB", "TypeORM"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Docker", "CI/CD", "Jest", "GraphQL", "Webpack", "Agile"]
    }
];

export const TechStack = () => {
    return (
        <section className="px-6 lg:px-20 py-20 bg-[#0c0c0c]">
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-12">Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {groups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-white font-medium mb-6">{group.title}</h3>
                        <ul className="space-y-3">
                            {group.skills.map((skill) => (
                                <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};