// ExperienceItem.jsx
export function FormationItem({ logo, title, role, period }) {
    return (
        <li className="flex justify-between">
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-50 rounded-full overflow-hidden p-1">
                    <img src={logo} alt={title} className="w-full h-full" />
                </div>

                <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="text-xs font-medium">{role}</p>
                </div>
            </div>
            <p className="text-sm font-medium text-zinc-400">{period}</p>
        </li>
    );
}
