import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import SoftAurora from "@/components/ui/softaurora"
import { Footer } from "@/components/ui/footer"
import { CodeBlock } from "@/components/ui/codeblock"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function JavascriptPage() {
  return (
    <div className="relative min-h-screen flex flex-col">

      <div className="fixed inset-0 -z-10 bg-gray-950">
        <SoftAurora
          color1="#fbe30c"
          color2="#009eee"
          colorSpeed={1}
          speed={1}
          noiseAmplitude={5}
        />
      </div>

      <Navbar  />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">

        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors w-fit"
        >
          <span>⟪</span>
          <span>Voltar ao início</span>
        </Link>

        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-800/80 border border-white/10 rounded-lg px-3 py-1">
              <img src="/javascript_icon.svg" alt="JavaScript" className="w-5 h-5" />
              <span className="text-sm font-semibold text-white">JavaScript</span>
            </div>
            <span className="bg-green-600/20 text-green-600 border border-green-600/60 text-xs font-bold px-3 py-1 rounded-full">
              EASY
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            JavaScript
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            JavaScript é uma linguagem de programação interpretada, leve e multiparadigma,
            originalmente criada para adicionar interatividade a páginas web no navegador.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🕐</span>
              <span>10 min de leitura</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-muted-foreground">🏷</span>
              {["javascript", "es6", "fundamentos", "programação"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground bg-white/5 border border-white/10 rounded-md px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="flex border border-white/10 rounded-xl p-2 bg-gray-900/80" >
            <Tabs defaultValue="cheatsheet">
                <TabsList className="bg-transparent">
                <TabsTrigger value="cheatsheet" >Cheatsheet</TabsTrigger>
                <TabsTrigger value="explicacao">Explicação</TabsTrigger>
                </TabsList>

                <TabsContent value="cheatsheet">
                    <h1 className="m-2 text-xl font-bold">Pesquisa Rápida:</h1>
                    <div className="flex flex-col gap-1 ">
                      <CodeBlock
                          language="javascript"
                          code={`// Variáveis e Tipos de Dados
                                  let nome = "João"; // String
                                  let idade = 30; // Number
                                  let ativo = true; // Boolean
                                  let lista = [1, 2, 3]; // Array
                                  let pessoa = { nome: "Maria", idade: 25 }; // Object`
                              }/>
                      <CodeBlock
                          language="javascript"
                          code={`// Função tradicional
                                  function saudacao(nome) {
                                  return "Olá, " + nome + "!";
                                  }

                                  // Função de seta (Arrow Function)
                                  const soma = (a, b) => {
                                  return a + b;
                                  };

                                  // Função Assíncrona
                                  async function fetchData() {
                                  const response = await fetch('/api/data');
                                  return response.json();
                                  }`
                            }/>
                      <CodeBlock
                          language="javascript"
                          code={` // Condicional
                                  if (idade >= 18) {
                                  console.log("Adulto");
                                  } else {
                                  console.log("Menor de idade");
                                  }`
                          }/>
                      <CodeBlock
                          language="javascript"
                          code={` // Loop
                                  for (let i = 0; i < lista.length; i++) {
                                  console.log(lista[i]);
                                  }`
                          }/>
                    </div>
                </TabsContent>

                <TabsContent value="explicacao">
                    <p>Explicação sobre JavaScript</p>
                    
                </TabsContent>

            </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}