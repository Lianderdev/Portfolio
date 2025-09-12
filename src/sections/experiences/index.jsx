import atomic from "../../assets/atomic.png"
import { ExperienceItem } from "../../components/experienceItem"

export function Experiences() {
    return (
        <section className="mt-12">
            <h2 className="text-2xl text-white font-bold mb-3">Experiencias</h2>
            <ul>
                <ExperienceItem logo={atomic} title={'Atomic Finance'} role={'Bitcoin Protocol Engineer'} period={'May 2021 - Oct 2022'}/>
            </ul>
        </section>
    )
}