import perfil from '../assets/sufist.jpeg'

export function Header() {
    return (
        <header className="flex justify-between items-center mt-12">
            <div className="w-[70%]">
                <h1 className="text-5xl font-bold tracking-tight">Hi, I'm Sufist 👋</h1>
                <p className="text-xl text-zinc-300 mt-3">
                    Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.
                </p>
            </div>

            <div className="w-28 h-28 bg-white rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={perfil}
                    alt="Foto de perfil"
                />
            </div>
        </header>

    )
}