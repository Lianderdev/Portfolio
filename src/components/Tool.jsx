import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Tool({ name, color, Icons }) {
    return (
        <li style={{ userSelect: 'none' }} className="mt-4 flex items-center justify-center font-normal rounded-xl border bg-zinc-900" >
            <div className="w-full h-[80%] p-4 mt-2 flex flex-col items-center justify-center gap-4">
                <div style={{ backgroundColor: color }} className='flex items-center justify-center p-2 rounded-md text-5xl'>
                    <Icons />
                </div>
                    <p className="text-xl px-3 uppercase font-semibold">{name}</p>
            </div>
        </li>
    )
}