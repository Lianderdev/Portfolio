import { Tool } from "../components/Tool";
import { tools } from '../utils/tools';

export function Tools() {
    return (
        <section id='tools'>
            <h2 className='pb-4'>Habilidades Técnicas</h2>
            <ul className='grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-x-4'>
                {tools.map(tool => (
                <Tool key={tool.id} Icons={tool.Icons} name={tool.name} color={tool.color} className="hover:p-2"/>
                ))}
            </ul>
        </section>
        
    )
}