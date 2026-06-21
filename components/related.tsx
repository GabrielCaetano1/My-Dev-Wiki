"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const relatedItems = [
  {
    title: "JavaScript",
    description: "Linguagem de programação para web",
    href: "/javascript",
    tags: ["Web", "Frontend"],
    difficulty: "EASY",
    icon: "/javascript_icon.svg",
  },
  {
    title: "Python",
    description: "Linguagem de alto nível e propósito geral",
    href: "/python",
    tags: ["Backend", "IA"],
    difficulty: "EASY",
    icon: "/python_icon.svg",
  },
  {
    title: "SQL",
    description: "Linguagem para consulta de bancos de dados",
    href: "/sql",
    tags: ["Banco de Dados"],
    difficulty: "EASY",
    icon: "/sql_icon.svg",
  },
  {
        title: "HTML",
        description: "Linguagem para criação de páginas web",
        href: "/html",
        tags: ["Web", "Frontend"],
        difficulty: "EASY",
        icon: "/html_icon.svg",
    }
]

const difficultyColor: Record<string, string> = {
  EASY: "bg-green-600/20 text-green-500 border-green-600/40",
  MEDIUM: "bg-yellow-600/20 text-yellow-500 border-yellow-600/40",
  HARD: "bg-red-600/20 text-red-500 border-red-600/40",
}

export function RelatedContent() {
  return (
    <div className="w-[90%] mx-auto px-6 py-5 bg-gray-800/60 border border-white/10 rounded-xl mb-10">

      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">
        Mais Conteúdos:
      </h3>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full px-8"
      >
        <CarouselContent className="-ml-4">
          {relatedItems.map((item) => (
            <CarouselItem key={item.title} className="pl-4 basis-1/2 lg:basis-1/3">
              <Link href={item.href} className="block h-full">
                <Card className="bg-gray-900/70 border-white/10 hover:border-principal2/50 hover:bg-gray-900 transition-all duration-200 cursor-pointer h-full">
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                      <Badge className={`${difficultyColor[item.difficulty]} shrink-0`}>
                        {item.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-base mt-3">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-0 flex gap-2 flex-wrap border-t border-white/5 mt-auto">
                    <div className="flex gap-2 flex-wrap pt-3">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs text-muted-foreground border-white/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>

                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 border-white/10 bg-gray-800 hover:bg-gray-700 text-white hover:cursor-pointer" />
        <CarouselNext className="right-0 border-white/10 bg-gray-800 hover:bg-gray-700 text-white hover:cursor-pointer" />
      </Carousel>

    </div>
  )
}