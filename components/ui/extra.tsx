import Link from "next/link"

export function Extra() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 py-20">
  
            <h2 className="text-3xl font-bold text-white">Quer contribuir?</h2>
            <p className="text-muted-foreground text-center max-w-md">
                Este projeto é "open source". Se quiser sugerir conteúdo, corrigir algo ou colaborar, fique à vontade!
            </p>

            <div className="flex gap-20">
                <Link href="https://github.com/GabrielCaetano1/My-Dev-Wiki" target="_blank" className="flex gap-2 justify-center w-6 h-6">
                <img src="/github_icon_white.svg" alt="" />
                GitHub
                </Link>
                <Link href="https://linkedin.com/in/seu-usuario" target="_blank" className="flex gap-2 justify-center w-6 h-6">
                <img src="/linkedin_icon.svg" alt="" />
                LinkedIn
                </Link>
            </div>
            {/* Inserir mais coisa aqui quando puder */}
        </section>
    )
}