import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-2 left-0 right-0 z-20 bg-principal/80 backdrop-blur-sm text-white flex mx-2 mt-2 justify-between items-center rounded-xl border border-white/10">
      
      <Link href="/" className="flex items-center gap-3 p-4 group">
        <img src="/placeholder_icon.svg" className="h-12 w-12 transition-transform duration-300 group-hover:rotate-12"/>
        <span className="text-xl font-bold text-principal2">
          My Dev <span className="text-principal3">Wiki!</span>
        </span>
      </Link>

      <div className="flex items-center gap-2 p-4">
        <Link
          href="https://github.com/GabrielCaetano1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200"
          aria-label="GitHub">
          <img src="/github_icon_white.svg" alt="GitHub" className="w-6 h-6" />
        </Link>

        <Link
          href="https://linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200"
          aria-label="LinkedIn">
          <img src="/linkedin_icon.svg" alt="LinkedIn" className="w-6 h-6" />
        </Link>
      </div>

    </nav>
  );
}