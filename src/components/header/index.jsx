import perfil from "../../assets/sufist.jpeg"
import demolidor from "../../assets/demolidor.jpeg"

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="w-[70%]">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Olá! Eu sou Elp 👋</h1>
                <p className="text-base md:text-2xl text-zinc-100 mt-3">
                    Desenvolvedor Fullstack. Apaixonado por criar e resolver problemas.
                </p>
            </div>
            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full overflow-hidden object-cover">
                <img
                    className="w-full h-full object-cover"
                    src={demolidor}
                    alt="Foto de perfil"
                />
            </div>
        </header>

    )
}