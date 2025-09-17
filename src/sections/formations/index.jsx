import { FormationItem } from "../../components/formationItem"
import ifpa from '../../assets/ifpa.png'
import senai from  '../../assets/senai.png'

export function Formations() {
    return (
        <section className="mt-12">
            <h2 className="text-2xl text-white font-bold mb-3">Formações</h2>
            <ul className="flex flex-col gap-4">
                <FormationItem logo={ifpa} title={'IFPA - Campus Ananindeua'} role={'Ciência da Computação'} period={'2022 - 2025'} />
                <FormationItem logo={ifpa} title={'IFPA - Campus Ananindeua'} role={'Tecnico em Informática'} period={'2019 - 2022'} />
                <FormationItem logo={senai} title={'SENAI'} role={'Tecnico em Redes'} period={'2017 - 2019'} />
            </ul>
        </section>
    )
}