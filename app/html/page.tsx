import { Extra } from "@/components/extra"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CodeBlock } from "@/components/ui/codeblock"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related"
import SoftAurora from "@/components/ui/softaurora"
import Link from "next/link"

export default function HtmlPage() {
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
            <img src="./html_icon.svg" alt="HTML Icon" className="w-12 h-12"/>
            <h1 className="text-5xl font-extrabold text-white tracking-tight">HTML</h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
            HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web.
            Ela define a estrutura e o conteúdo semântico de um documento, usando tags para organizar elementos como textos, links, imagens, formulários e mídias.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-green-600/20 text-green-600 border border-green-600/60 text-xs font-bold px-3 py-1 rounded-full h-7">
                EASY
              </Badge>
              {["HTML5", "Estrutura", "Tags", "Web", "Semântica"].map((tag) => (
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
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Estrutura Básica:</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Página Web</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Bem-vindo ao desenvolvimento web.</p>
</body>
</html>`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Textos e Links:</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<!-- Títulos (H1 a H6) -->
<h1>Título Principal</h1>
<h2>Subtítulo Importante</h2>

<!-- Parágrafos e Formatação de Texto -->
<p>Este é um parágrafo com texto em <strong>negrito</strong> e <em>itálico</em>.</p>
<p>Também podemos usar <mark>marcação de texto</mark> ou <code>código em linha</code>.</p>

<!-- Links (Âncoras) -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visitar Site Externo</a>
<a href="#secao-destino">Ir para seção interna</a>`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Listas:</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<!-- Lista Não Ordenada (bullet points) -->
<ul>
  <li>Café</li>
  <li>Chá</li>
  <li>Leite</li>
</ul>

<!-- Lista Ordenada (numerada) -->
<ol>
  <li>Passo 1: Preparar ingredientes</li>
  <li>Passo 2: Misturar bem</li>
  <li>Passo 3: Assar</li>
</ol>`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Tabelas:</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Cargo</th>
      <th>Salário</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana Souza</td>
      <td>Desenvolvedora</td>
      <td>R$ 8.000</td>
    </tr>
    <tr>
      <td>Carlos Lima</td>
      <td>Designer</td>
      <td>R$ 6.500</td>
    </tr>
  </tbody>
</table>`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Formulários:</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<form action="/salvar-dados" method="POST">
  <!-- Campo de Texto -->
  <div className="form-group">
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
  </div>

  <!-- Campo de Email -->
  <div className="form-group">
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="nome@provedor.com" required>
  </div>

  <!-- Botão de Envio -->
  <button type="submit">Enviar Formulário</button>
</form>`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Mídias:</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<!-- Imagem -->
<img src="https://picsum.photos/300/200" alt="Exemplo de imagem do Picsum" 
width="300" height="200" loading="lazy">

<!-- Vídeo Autohospedado -->
<video src="video-exemplo.mp4" controls width="400" poster="capa.jpg">
  Seu navegador não suporta a reprodução de vídeos.
</video>

<!-- Áudio -->
<audio src="audio-exemplo.mp3" controls></audio>`}
                />
              </section>

              <section className="flex flex-col">
                <h2 className="text-base font-semibold text-muted-foreground px-7">• Elementos Semânticos (HTML5):</h2>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<header>
  <nav>
    <a href="/">Home</a> | <a href="/sobre">Sobre</a>
  </nav>
</header>

<main>
  <article>
    <h1>Título da Postagem</h1>
    <section>
      <h2>Introdução</h2>
      <p>Conteúdo do artigo...</p>
    </section>
  </article>

  <aside>
    <h3>Links Relacionados</h3>
    <p>Conteúdo da barra lateral...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2026 Meu Website. Todos os direitos reservados.</p>
</footer>`}
                />
              </section>

            </TabsContent>

            <TabsContent value="explicacao" className="flex flex-col gap-6">
              
              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Estrutura Básica:</h2>
                  <p className="font-normal text-sm leading-relaxed mt-2 text-white/80">
                    A estrutura básica do HTML define a casca do documento. 
                    O <code className="bg-white/10 px-1 rounded text-orange-400">&lt;!DOCTYPE html&gt;</code> avisa ao navegador que o documento é do tipo HTML5.
                    A tag <code className="bg-white/10 px-1 rounded text-orange-400">&lt;html&gt;</code> é o elemento raiz.
                    O <code className="bg-white/10 px-1 rounded text-orange-400">&lt;head&gt;</code> contém metadados, configurações de caracteres (<code className="bg-white/10 px-1 rounded text-orange-400">charset</code>), responsividade (<code className="bg-white/10 px-1 rounded">viewport</code>) e o título da aba. 
                    O <code className="bg-white/10 px-1 rounded text-orange-400">&lt;body&gt;</code> abriga o conteúdo visual que será de fato exibido na página.
                  </p>
                </div>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Título da Página</title>
</head>
<body>
  <!-- Conteúdo visível aqui -->
</body>
</html>`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Textos e Links:</h2>
                  <p className="font-normal text-sm leading-relaxed mt-2 text-white/80">
                    O HTML organiza textos usando cabeçalhos hierárquicos (<code className="bg-white/10 px-1 rounded text-orange-400">&lt;h1&gt;</code> a <code className="bg-white/10 px-1 rounded text-orange-400">&lt;h6&gt;</code>) e parágrafos (<code className="bg-white/10 px-1 rounded text-orange-400">&lt;p&gt;</code>).
                    Destacar palavras-chave semanticamente é feito usando <code className="bg-white/10 px-1 rounded text-orange-400">&lt;strong&gt;</code> (importância/negrito) e <code className="bg-white/10 px-1 rounded text-orange-400">&lt;em&gt;</code> (ênfase/itálico).
                    A tag <code className="bg-white/10 px-1 rounded text-orange-400">&lt;a&gt;</code> cria hiperlinks para redirecionar o usuário, onde o atributo <code className="bg-white/10 px-1 rounded">href</code> especifica a URL e <code className="bg-white/10 px-1 rounded">target="_blank"</code> faz o link abrir em uma nova aba.
                  </p>
                </div>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<h1>Hierarquia Máxima</h1>
<p>Um texto com <strong>foco</strong> e um <a href="https://google.com">link</a>.</p>`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Listas:</h2>
                  <p className="font-normal text-sm leading-relaxed mt-2 text-white/80">
                    Listas ajudam a agrupar itens relacionados. 
                    As não ordenadas (<code className="bg-white/10 px-1 rounded text-orange-400">&lt;ul&gt;</code>) exibem marcadores de marcadores (pontos). 
                    As listas ordenadas (<code className="bg-white/10 px-1 rounded text-orange-400">&lt;ol&gt;</code>) numeram automaticamente os itens. 
                    Ambos os tipos exigem que cada item seja envolto na tag <code className="bg-white/10 px-1 rounded text-orange-400">&lt;li&gt;</code> (List Item).
                  </p>
                </div>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<ul>
  <li>Item A</li>
</ul>
<ol>
  <li>Primeiro</li>
</ol>`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Tabelas:</h2>
                  <p className="font-normal text-sm leading-relaxed mt-2 text-white/80">
                    Tabelas organizam dados bidimensionais. 
                    O contêiner principal é a tag <code className="bg-white/10 px-1 rounded text-orange-400">&lt;table&gt;</code>. 
                    Ela é estruturada usando <code className="bg-white/10 px-1 rounded text-orange-400">&lt;thead&gt;</code> para o cabeçalho e <code className="bg-white/10 px-1 rounded text-orange-400">&lt;tbody&gt;</code> para o corpo dos dados.
                    Linhas são definidas por <code className="bg-white/10 px-1 rounded text-orange-400">&lt;tr&gt;</code> (Table Row), células de cabeçalho por <code className="bg-white/10 px-1 rounded text-orange-400">&lt;th&gt;</code> (Table Header) e células comuns de dados por <code className="bg-white/10 px-1 rounded text-orange-400">&lt;td&gt;</code> (Table Data).
                  </p>
                </div>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<table>
  <thead>
    <tr><th>Nome</th></tr>
  </thead>
  <tbody>
    <tr><td>Lucas</td></tr>
  </tbody>
</table>`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Formulários:</h2>
                  <p className="font-normal text-sm leading-relaxed mt-2 text-white/80">
                    O elemento <code className="bg-white/10 px-1 rounded text-orange-400">&lt;form&gt;</code> encapsula campos de entrada de dados para envio ao servidor. 
                    Os campos são criados com a tag flexível <code className="bg-white/10 px-1 rounded text-orange-400">&lt;input&gt;</code>, cujo comportamento muda baseado no atributo <code className="bg-white/10 px-1 rounded text-orange-400">type</code> (text, email, password, etc.).
                    A tag <code className="bg-white/10 px-1 rounded text-orange-400">&lt;label&gt;</code> melhora a acessibilidade ao vincular um texto explicativo a um input através do atributo <code className="bg-white/10 px-1 rounded">for</code> mapeando para o <code className="bg-white/10 px-1 rounded">id</code> do input.
                  </p>
                </div>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<form action="/login" method="POST">
  <label for="user">Usuário:</label>
  <input type="text" id="user" required>
  <button type="submit">Entrar</button>
</form>`}
                />
              </section>

              <section>
                <div className="text-base font-semibold text-muted-foreground px-7">
                  <h2>• Elementos Semânticos (HTML5):</h2>
                  <p className="font-normal text-sm leading-relaxed mt-2 text-white/80">
                    HTML Semântico usa tags que descrevem claramente o significado do conteúdo tanto para desenvolvedores quanto para navegadores, mecanismos de busca (SEO) e tecnologias assistivas (leitores de tela). 
                    Em vez de usar apenas <code className="bg-white/10 px-1 rounded">&lt;div&gt;</code> genéricas, usamos <code className="bg-white/10 px-1 rounded text-orange-400">&lt;header&gt;</code> (cabeçalhos), <code className="bg-white/10 px-1 rounded text-orange-400">&lt;nav&gt;</code> (menus), <code className="bg-white/10 px-1 rounded text-orange-400">&lt;main&gt;</code> (conteúdo central), <code className="bg-white/10 px-1 rounded text-orange-400">&lt;article&gt;</code> (conteúdo independente), <code className="bg-white/10 px-1 rounded text-orange-400">&lt;section&gt;</code> (seções de assunto) e <code className="bg-white/10 px-1 rounded text-orange-400">&lt;footer&gt;</code> (rodapés).
                  </p>
                </div>
                <CodeBlock
                  language="html"
                  BadgeClassName="bg-orange-600/70"
                  code={`<header>Navegação</header>
<main>
  <article>Notícia principal</article>
</main>
<footer>Direitos Reservados</footer>`}
                />
              </section>

            </TabsContent>
          </Tabs>
        </div>

      </main>
      <RelatedContent/>
      <Footer />
    </div>
  )
}
