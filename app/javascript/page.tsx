import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import SoftAurora from "@/components/ui/softaurora"
import { Footer } from "@/components/ui/footer"
import { CodeBlock } from "@/components/ui/codeblock"
import { Extra } from "@/components/ui/extra"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function JavascriptPage() {
  return (
    <div className="relative min-h-screen flex flex-col">

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
            <div className="flex items-center gap-2 bg-gray-800/80 border border-white/10 rounded-lg px-3 py-1">
              <img src="/javascript_icon.svg" alt="JavaScript" className="w-5 h-5" />
              <span className="text-sm font-semibold text-white">JavaScript</span>
            </div>
            <span className="bg-green-600/20 text-green-600 border border-green-600/60 text-xs font-bold px-3 py-1 rounded-full">
              EASY
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-white tracking-tight">JavaScript</h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            JavaScript é uma linguagem de programação interpretada, leve e multiparadigma,
            originalmente criada para adicionar interatividade a páginas web no navegador.
          </p>

          <div className="flex flex-col gap-2">
            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🕐</span>
              <span>10 min de leitura</span>
            </div> */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* <span className="text-muted-foreground">🏷</span> */}
              {["JavaScript", "ES6", "Fundamentos", "Linguagem de Programação"].map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground bg-gray-800/50 border border-white/10 rounded-md px-2 py-1">
                  {tag}
                </span>
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
                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Variáveis e Tipos:</h2>
                <CodeBlock
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Tipos de dados
let nome = "João";                         // String
let idade = 30;                            // Number
let ativo = true;                          // Boolean
let lista = [1, 2, 3];                     // Array
let pessoa = { nome: "Maria", idade: 25 }; // Object

// Variáveis podem ser declaradas com var, let ou const
var x = 10; // Variável global ou de função
let y = 20; // Variável de bloco
const z = 30; // Constante (não pode ser reatribuída)`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Operadores Aritméticos:</h2>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Operadores Aritméticos
let soma = 5 + 3;
let subtracao = 5 - 3;
let multiplicacao = 5 * 3;
let divisao = 5 / 3;

// Operadores de Atribuição
let x = 10;
x += 5; // x = x + 5

// Operadores Lógicos
let a = true;
let b = false;
let c = a && b; // false
let d = a || b; // true
let e = !a; // false

// Operadores de Comparação
let f = 5 === 5; // true
let g = 5 !== 3; // true
let h = 5 > 3; // true
let i = 5 < 3; // false`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Funções:</h2>
                <CodeBlock
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Função tradicional
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

// Arrow Function
const soma = (a, b) => a + b;

// Função Assíncrona
async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• This:</h2>
                <CodeBlock 
                code={`// Exemplo de uso do this
const pessoa = {
  nome: "João",
  idade: 30,
  apresentar: function() {
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
  }
};

pessoa.apresentar();`}/>
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Laços de repetição:</h2>
                <CodeBlock
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Laço for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Laço while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Laço do...while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);}`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground  px-7">• Condicionais:</h2>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Estrutura if...else
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você não é maior de idade.");
}

// Estrutura switch
switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  default:
    console.log("Outro dia");
}

// Operador ternário
const mensagem = idade >= 18 ? "Você é maior de idade." : "Você não é maior de idade.";`}
                />
              </section>

            </TabsContent>

            <TabsContent value="explicacao">
              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Tipos de Variáveis:</h2>
                  <p className="font-normal">
                    Em JavaScript, existem três formas de declarar variáveis: <code className="bg-white/10 px-1 rounded">var</code>, <code className="bg-white/10 px-1 rounded">let</code> e <code className="bg-white/10 px-1 rounded">const</code>.
                    A diferença entre elas está no escopo e na mutabilidade. <code className="bg-white/10 px-1 rounded">var</code> tem escopo de função e pode ser redeclarada, enquanto <code className="bg-white/10 px-1 rounded">let</code> tem escopo de bloco e não pode ser redeclarada. 
                    Já <code className="bg-white/10 px-1 rounded">const</code> é usada para declarar constantes, ou seja, valores que não podem ser reatribuídos após a inicialização.
                  </p>
                </div>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`var x = 10; // Variável global ou de função
let y = 20; // Variável de bloco
const z = 30; // Constante (não pode ser reatribuída)`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Tipos de Dados:</h2>
                  <p className="font-normal">
                    Em JavaScript, os tipos de dados incluem: <code className="bg-white/10 px-1 rounded">string</code>, <code className="bg-white/10 px-1 rounded">number</code>, <code className="bg-white/10 px-1 rounded">boolean</code>, <code className="bg-white/10 px-1 rounded">array</code> e <code className="bg-white/10 px-1 rounded">object</code>.
                    Cada tipo tem características específicas e é usado para representar diferentes tipos de informações.
                  </p>
                </div>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`let nome = "João";                         // String
let idade = 30;                            // Number
let ativo = true;                          // Boolean
let lista = [1, 2, 3];                     // Array
let pessoa = { nome: "Maria", idade: 25 }; // Object`}
                />
              </section>
              
              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Operadores Aritméticos:</h2>
                  <p className="font-normal">
                    Em JavaScript, os operadores são símbolos que permitem realizar operações em valores e variáveis. 
                    Existem vários tipos de operadores, como operadores aritméticos, de atribuição, lógicos e de comparação.
                  </p>
                </div>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Operadores Aritméticos
let soma = 5 + 3;
let subtracao = 5 - 3;
let multiplicacao = 5 * 3;
let divisao = 5 / 3;

// Operadores de Atribuição
let x = 10;
x += 5; // x = x + 5

// Operadores Lógicos
let a = true;
let b = false;
let c = a && b; // false
let d = a || b; // true
let e = !a; // false

// Operadores de Comparação
let f = 5 === 5; // true
let g = 5 !== 3; // true
let h = 5 > 3; // true
let i = 5 < 3; // false`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Funções:</h2>
                  <p className="font-normal">
                    Em JavaScript, as funções são blocos de código reutilizáveis que realizam uma tarefa específica. 
                    Elas podem ser declaradas de várias formas, como funções tradicionais, arrow functions e funções assíncronas. 
                    A diferença entre elas está na sintaxe e no comportamento do <code className="bg-white/10 px-1 rounded">this</code>.
                  </p>
                </div>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const subtrair = (a, b) => {
  return a - b;
};

// Função assíncrona
async function buscarDados() {
  const response = await fetch('/api/dados');
  const dados = await response.json();
  return dados;
}`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• This:</h2>
                  <p className="font-normal">
                    O operador <code className="bg-white/10 px-1 rounded">this</code> refere-se ao objeto que está chamando o método. Seu valor pode variar dependendo do contexto em que é usado. 
                    Em funções tradicionais, <code className="bg-white/10 px-1 rounded">this</code> se refere ao objeto que chamou a função, enquanto em arrow functions, <code className="bg-white/10 px-1 rounded">this</code> é léxico e se refere ao contexto onde a função foi definida.
                  </p>
                </div>
                  <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Exemplo de uso do this
const pessoa = {
  nome: "João",
  idade: 30,
  apresentar: function() {
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
  }
};

pessoa.apresentar();`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Laços de Repetição:</h2>
                  <p className="font-normal">
                    Em JavaScript, os laços de repetição permitem executar um bloco de código várias vezes. 
                    Os principais tipos são <code className="bg-white/10 px-1 rounded">for</code>, <code className="bg-white/10 px-1 rounded">while</code> e <code className="bg-white/10 px-1 rounded">do...while</code>.
                  </p>
                </div>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Laço for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Laço while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Laço do...while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Condicionais:</h2>
                  <p className="font-normal">
                    Em JavaScript, as estruturas condicionais permitem executar diferentes blocos de código com base em condições específicas.
                    As principais estruturas são <code className="bg-white/10 px-1 rounded">if...else</code>, <code className="bg-white/10 px-1 rounded">switch</code> e o operador ternário.
                  </p>
                </div>
                <CodeBlock 
                  language="javascript"
                  BadgeClassName="bg-principal3/70"
                  code={`// Estrutura if...else
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você não é maior de idade.");
}

// Estrutura switch
switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  default:
    console.log("Outro dia");
}

// Operador ternário
const mensagem = idade >= 18 ? "Você é maior de idade." : "Você não é maior de idade.";`}
                />
              </section>
              
            </TabsContent>

          </Tabs>
        </div>

      </main>
      <Extra />

      <Footer />
    </div>
  )
}