import techsigns from '../../assets/techsigns.png'


export function Projects() {

    const projects = [
        {
            id: 1,
            img: techsigns,
            name: "Techsigns: Software educativo adaptado a libras para o ensino de informática",
            about: "Aplicação web educativa que utiliza tradução automática em Libras (via VLibras) para auxiliar pessoas surdas no aprendizado de informática básica. O foco é a inclusão digital e a acessibilidade na educação.",
            tools: ["React", "TailwindCSS", "VLibras", "FastAPI", "Docker"]
        },
        {
            id: 2,
            img: techsigns,
            name: "Techsigns: Software educativo adaptado a libras para o ensino de informática",
            about: "Aplicação web educativa que utiliza tradução automática em Libras (via VLibras) para auxiliar pessoas surdas no aprendizado de informática básica. O foco é a inclusão digital e a acessibilidade na educação.",
            tools: ["React", "TailwindCSS", "VLibras", "FastAPI", "Docker"]
        },
    ];

    return (
        <section className="mt-16 pb-24 flex flex-col items-center">
            <h2 className="text-sm font-normal text-zinc-950 bg-zinc-100 px-3 py-[2px] rounded-md inline-block">Meus Projetos</h2>
            <h3 className="text-center text-2xl md:text-4xl font-bold tracking-tight mt-2">Confira meus últimos trabalhos</h3>
            <p className="text-center mb-6 mt-3">Trabalhei em uma variedade de projetos, desde sites simples até aplicativos web complexos. Aqui estão alguns dos meus favoritos.</p>
          
            <ul className="flex flex-col md:flex-row gap-8">
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className="border border-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                        <div>
                            <img src={project.img} alt="" className='w-full h-52 object-cover object-top' />
                        </div>

                        <div className='p-2'>
                            <h3 className="text-sm text-white font-semibold">{project.name}</h3>
                            <p className="text-zinc-400 text-xs mt-2">{project.about}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="text-[10px] font-bold text-zinc-50 bg-zinc-700 px-2 py-[2px] rounded-md inline-block hover:bg-zinc-600 duration-200"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>

    )
}