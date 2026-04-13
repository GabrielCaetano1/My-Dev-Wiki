"use client"
import LetterGlitch from "./letterglitch"
import { useState } from "react"
import Link from "next/link"

const categorias = [
    {
        title: "Linguagens de Programação",
        items: [
            {label: "Python", icon: "/python_logo.svg", href: "/"},
            {label: "JavaScript", icon: "/javascript_icon.svg", href: "/"},
            {label: "SQL", icon: "sql_icon.svg", href: "/"},
            {label: "Placeholder", icon: null, href: "/"}
        ]
    },
    {
    title: "Bibliotecas & Frameworks",
    items: [
      { label: "React", icon: null, href: "/" },
      { label: "Next.js", icon: null, href: "/" },
      { label: "Tailwind", icon: null, href: "/" },
      { label: "Placeholder", icon: null, href: "/" },
    ]
  }
]

export function MainModal() {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((i)=>(i === 0 ? categorias.length -1 : i - 1))
    const next = () => setCurrent((i)=>(i === categorias.length -1 ? 0 : i + 1)) 

    const categoria = categorias[current]

    return (
        <div className="relative flex justify-center bg-gray-900 opacity-90 w-full">
            <div className="flex flex-col items-center rounded-xl overflow-hidden w-150 h-140">

                <div className="w-full flex items-center justify-between px-6 py-4">
                    <button onClick={prev} className="text-white text-2xl hover:text-principal3  transition-colors">‹</button>
                    <h2 className="text-white font-bold text-xl">{categoria.title}</h2>
                    <button onClick={next} className="text-white text-2xl hover:text-principal2 transition-colors">›</button>
                </div>

                <div className="grid grid-cols-2 place-items-center gap-4 flex-1 w-full px-6 pb-6">
                    {categoria.items.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="relative w-50 h-50 cursor-pointer bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center"
                    >
                        {item.icon && (
                        <img src={item.icon} alt={item.label} className="absolute inset-0 m-auto w-20 h-20 opacity-80" />
                        )}
                        <span className="relative z-10 text-white font-bold text-lg drop-shadow">{item.label}</span>
                    </Link>
                    ))}
                </div>

                <div className="flex gap-2 pb-4">
                    {categorias.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-principal2" : "bg-gray-600"}`} />
                    ))}
                </div>

            </div>
        </div>

    )
}