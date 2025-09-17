
export function ExperienceItem({ logo, title, role, period }) {
  return (
    <li className="flex justify-between">
      <div className="flex gap-4">
        <div className="w-12 rounded-full overflow-hidden">
          <img src={logo} alt={title} />
        </div>
        <div>
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs font-medium">{role}</p>
        </div>
      </div>
      <p className="text-xs md:text-sm font-medium text-zinc-400">{period}</p>
    </li>
  );
}
