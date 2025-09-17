
import inclusive from "../../assets/inclusive.png"
import empathy from "../../assets/empathy.png"
import { ExperienceItem } from "../../components/experienceItem"

export function Experiences() {
    return (
        <section className="mt-12">
            <h2 className="md:text-2xl text-white font-bold mb-3">Experiencias</h2>
            <ul className="flex flex-col gap-4">
                <ExperienceItem logo={inclusive} title={'InclusiTech'} role={'Software educativo - apps de acessibilidade'} />
                <ExperienceItem logo={empathy} title={'Empathy AI'} role={'IA inclusiva _ algoritmos livres de vieses'} />
            </ul>
        </section>
    )
}