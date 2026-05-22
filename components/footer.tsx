import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-principal/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-8">

        {/* Logo e nome */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/placeholder_icon.svg" alt="logo" className="w-10 h-10" />
            <span className="font-bold text-principal2">
              My Dev <span className="text-principal3">Wiki!</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Um dicionário pessoal de tecnologias, linguagens e ferramentas do mundo dev.
          </p>
        </div>

        
        <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-white">Aviso:</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
            Alguns conteúdos podem estar incompletos ou em desenvolvimento.
            Consulte as fontes de inspiração para informações mais detalhadas.
            </p>
        </div>

        <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-white">Inspirações:</h4>
            <ul className="flex flex-col gap-1">
                {[
                    { label: "DevSheets", href: "https://devsheets.io" },
                    { label: "QuickRef", href: "https://quickref.me" },
                    ].map((item) => (
                    <li key={item.label}>
                        <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-principal2 transition-colors"
                        >
                        → {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>


        <div className="border-t border-white/5 py-4">
            <p className="text-center text-xs text-muted-foreground">
                © 2026 My Dev Wiki — Feito por{" "}
                <Link
                href="https://github.com/GabrielCaetano1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-principal2 hover:underline"
                >
                Gabriel Caetano
                </Link>
            </p>
        </div>
    </footer>
  )
}