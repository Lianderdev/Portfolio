import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { projects } from '../utils/projects'
import { Project } from "@/components/Project"

export function Projects() {

    return (
        <section id="projects" className="">

            <div className="flex items-center justify-between mb-8">
            <h2>Projetos</h2>
            <span className="px-4 py-2 text-zinc-50 text-xl font-semibold rounded-full bg-zinc-900">{projects.length}</span>
            </div>

            <Carousel className="w-[87%] lg:w-full mx-auto overflow-visible">
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Project link={project.link} github={project.github} title={project.title} description={project.description} img={project.img} tools={project.tools}/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>


        </section>
    )
}