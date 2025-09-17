import SkillItem from "../../components/skillItem";

export function Skills() {

    // skillsData.js
    const skills = [
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "TailwindCSS" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Vscode" },
        { id: 6, name: "Figma" },
        { id: 7, name: "MySQL" },
        { id: 8, name: "Java" },
        { id: 9, name: "Webpack" },
        { id: 10, name: "Express" },
        { id: 11, name: "Git" },
        { id: 12, name: "GitHub" },
    ];

    return (
        <section className="mt-12">
            <h2 className="text-2xl text-white font-bold mb-3">Habilidades</h2>
            <ul className="flex gap-2 flex-wrap">
                {skills.map((skill) => (
                    <SkillItem key={skill.id} name={skill.name} />
                ))}
            </ul>
        </section>
    )
}