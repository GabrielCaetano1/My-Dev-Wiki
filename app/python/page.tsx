import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CodeBlock } from "@/components/ui/codeblock"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import SoftAurora from "@/components/ui/softaurora"
import Link from "next/link"

export default function PythonPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed inset-0 -z-10 bg-gray-950">
                <SoftAurora color1="#fbe30c" color2="#009eee" colorSpeed={1} speed={1} noiseAmplitude={5} />
            </div>
            <Navbar />
            <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8">

                <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors w-fit">
                    <span>⟪</span>
                    <span>Voltar ao início</span>
                </Link>

                <div className="flex flex-col gap-4">

                    <div className="flex items-center gap-3">
                        <img src="./python_icon.svg" alt="Python Icon" className="w-12 h-12" />
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">Python</h1>
                    </div>
                    

                    <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
                        Python é uma linguagem de programação de alto nível, interpretada e de propósito geral, conhecida por sua sintaxe clara e legibilidade.
                        Ela suporta múltiplos paradigmas de programação, incluindo programação orientada a objetos, funcional e procedural.
                        Python é amplamente utilizada em diversas áreas, como desenvolvimento web, ciência de dados, inteligência artificial, automação e muito mais, graças à sua vasta biblioteca padrão e comunidade ativa.
                    </p>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Badge className="bg-green-600/20 text-green-600 border border-green-600/60 text-xs font-bold px-3 py-1 rounded-full h-7">
                                Easy
                            </Badge>
                            {/* <span className="text-muted-foreground">🏷</span> */}
                            {["Python", "Ipynb", "Linguagem de Programação", "Ciência de Dados", "Machine Learning", "IA"].map((tag) => (
                                <Badge key={tag} variant="default" className="text-xs text-muted-foreground bg-gray-800/50 border border-white/10 rounded-full px-3 py-1 h-7">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="border-t border-white/10" />

                <div className="border border-white/10 bg-gray-900/80 rounded-xl w-full p-4">
                    <Tabs defaultValue="cheatsheet">
                        <TabsList className="bg-transparent border-b border-white/10 w-full justify-start mb-6 rounded-none pb-2 font-extrabold">
                            <TabsTrigger value="cheatsheet">Sintaxe</TabsTrigger>
                            <TabsTrigger value="explicacao">Explicação</TabsTrigger>
                        </TabsList>

                        <TabsContent value="cheatsheet" className="flex flex-col gap-6">

                            <section className="flex flex-col">
                                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Variáveis e Tipos de Dados:</h2>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`nome = "Alice" # String
idade = 20 # Inteiro
altura = 1.75 # Float
is_estudante = True # Booleano`}
                                />
                            </section>

                            <section className="flex flex-col">
                                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Listas e Dicionários:</h2>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`lista = [1, 2, 3] # Lista
dicionario = {"chave": "valor"} # Dicionário`}
                                />
                            </section>

                            <section className="flex flex-col">
                                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Operadores Aritméticos:</h2>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`resultado = 10 + 30 # => 40
resultado = 40 - 10 # => 30
resultado = 50 * 5  # => 250
resultado = 16 / 4  # => 4.0 (Divisão com resultado float)
resultado = 16 // 4 # => 4 (Divisão com o resultado inteiro)
resultado = 25 % 2  # => 1 (Módulo, resto da divisão)
resultado = 5 ** 3  # => 125 (Exponenciação)`}
                                />
                            </section>

                            <section className="flex flex-col">
                                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Funções:</h2>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`def funtion():
    return print("Hello World!")
funtion() # Chamada da função

# Função com parâmetros
def saudacao(nome):
    return print(f"Olá, {nome}!")
saudacao("Alice") # Chamada da função com argumento`}
                                />
                            </section>

                            <section className="flex flex-col">
                                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Condicionais:</h2>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`if idade >= 18:
    print("Você é maior de idade.")
elif idade > 12:
    print("Você é um adolescente.")
else:
    print("Você é uma criança.")`}
                                />
                            </section>

                            <section className="flex flex-col">
                                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Classes e POO:</h2>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        
        def apresentar(self):
            print(f"Olá, meu nome é {self.nome} e tenho {self.idade} anos.")`}
                                />
                            </section>

                        </TabsContent>

                        <TabsContent value="explicacao">
                            <section>
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Variáveis e Tipos de dados:</h2>
                                    <p className="font-normal">
                                        Em Python, variáveis são criadas no momento da atribuição, sem necessidade de declarar o tipo.
                                        Python é uma linguagem de tipagem dinâmica, ou seja, o tipo é inferido automaticamente.
                                        Os tipos básicos incluem: <code className="bg-white/10 px-1 rounded">int</code> (inteiros), <code className="bg-white/10 px-1 rounded">float</code> (números de ponto flutuante), <code className="bg-white/10 px-1 rounded">str</code> (strings), <code className="bg-white/10 px-1 rounded">bool</code> (booleanos) e <code className="bg-white/10 px-1 rounded">list</code>, <code className="bg-white/10 px-1 rounded">tuple</code>, <code className="bg-white/10 px-1 rounded">dict</code> para estruturas de dados mais complexas.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={``}
                                />
                            </section>

                            <section>
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Listas e Dicionários:</h2>
                                    <p className="font-normal">
                                        Listas são coleções ordenadas e mutáveis definidas com <code className="bg-white/10 px-1 rounded">[]</code>.
                                        Dicionários são coleções de pares chave-valor definidas com <code className="bg-white/10 px-1 rounded">{"{}"}</code>.
                                        Ambos suportam <em>list/dict comprehension</em>, uma sintaxe concisa para criar coleções a partir de iteráveis.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={``} />
                            </section>

                            <section>
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Operadores Aritméticos:</h2>
                                    <p className="font-normal">
                                        Python suporta os operadores aritméticos básicos: <code className="bg-white/10 px-1 rounded">+</code> (adição), <code className="bg-white/10 px-1 rounded">-</code> (subtração),
                                        <code className="bg-white/10 px-1 rounded">*</code> (multiplicação), <code className="bg-white/10 px-1 rounded">/</code> (divisão), <code className="bg-white/10 px-1 rounded">%</code> (módulo) e <code className="bg-white/10 px-1 rounded">**</code> (exponenciação).
                                        A divisão entre inteiros com <code className="bg-white/10 px-1 rounded">/</code> resulta em um float, enquanto a divisão inteira com <code className="bg-white/10 px-1 rounded">//</code> retorna o quociente inteiro.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={``} />
                            </section>

                            <section>
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Funções:</h2>
                                    <p className="font-normal">
                                        Funções em Python são definidas com a palavra-chave <code className="bg-white/10 px-1 rounded">def</code>.
                                        Suportam parâmetros opcionais com valores padrão, argumentos nomeados e número variável de argumentos
                                        via <code className="bg-white/10 px-1 rounded">*args</code> e <code className="bg-white/10 px-1 rounded">**kwargs</code>.
                                        Funções também podem ser definidas de forma compacta com <code className="bg-white/10 px-1 rounded">lambda</code>.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={``}
                                />
                            </section>

                            <section>
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Condicionais:</h2>
                                    <p className="font-normal">
                                        Python utiliza <code className="bg-white/10 px-1 rounded">if</code>, {" "}
                                        <code className="bg-white/10 px-1 rounded">elif</code> e {" "}
                                        <code className="bg-white/10 px-1 rounded">else</code> para condicionais.
                                        Diferente de outras linguagens, Python não usa chaves — a indentação define os blocos de código,
                                        tornando a estrutura visualmente clara e obrigatoriamente organizada.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={``}
                                />
                            </section>

                            <section className="flex flex-col">
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Laços de repetição:</h2>
                                    <p className="font-normal">
                                        Python possui dois tipos de loop: <code className="bg-white/10 px-1 rounded">for</code> e {" "}
                                        <code className="bg-white/10 px-1 rounded">while</code>.
                                        O <code className="bg-white/10 px-1 rounded">for</code> itera diretamente sobre listas, strings e outros iteráveis.
                                        A função <code className="bg-white/10 px-1 rounded">range()</code> é amplamente usada para gerar sequências numéricas nos loops.
                                        Enquanto isso o <code className="bg-white/10 px-1 rounded">while</code> executa um bloco de código enquanto uma condição é verdadeira, sendo útil para loops baseados em condições dinâmicas.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={`#Laço for
for i in range(5):
print(i)

#Laço while
count = 0
while count < 5:
print(count)
count += 1
`}
                                />
                            </section>

                            <section>
                                <div className="text-base font-semibold text-muted-foreground px-7">
                                    <h2>• Classes e POO:</h2>
                                    <p className="font-normal">
                                        Python suporta programação orientada a objetos com a definição de classes usando a palavra-chave <code className="bg-white/10 px-1 rounded">class</code>.
                                        As classes permitem criar objetos com atributos e métodos, facilitando a organização e reutilização do código.
                                        A linguagem tambem suporta herança, encapsulamento e polimorfismo, conceitos fundamentais da POO.
                                    </p>
                                </div>
                                <CodeBlock
                                    language="python"
                                    BadgeClassName="bg-principal2/60"
                                    code={``}
                                />
                            </section>
                        </TabsContent>

                    </Tabs>
                </div>

            </main>
            <Footer />
        </div>
    )
}