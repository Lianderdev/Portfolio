import perfil from "../../assets/sufist.jpeg"

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="w-[70%]">
                <h1 className="text-4xl font-bold tracking-tight">Olá! Eu sou Sufist 👋</h1>
                <p className="text-2xl text-zinc-100 mt-3">
                    Desenvolvedor Fullstack. Apaixonado por criar e resolver problemas.
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