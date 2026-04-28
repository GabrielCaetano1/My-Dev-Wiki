import { codeToHtml } from "shiki";

interface CodeBlockProps {
    code: string;
    language?: string;
    BadgeClassName?: string;
}

export async function CodeBlock({code, language = "javascript", BadgeClassName = ""}: CodeBlockProps) {
    const dedentedCode = code.replace(/^\s+/gm, "");

    const html = await codeToHtml(code, {
        lang: language,
        themes: {
            light: "nord", //github-dark, nord, dracula, one-dark-pro
            dark: "github-light" //nord, dracula, one-light-pro
        }
    });
    return (
        <div className="relative rounded-xl overflow-hidden text-sm">
            <div className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-lg z-10 ${BadgeClassName}`}>
                {language.toLocaleUpperCase()}
            </div>

            <div 
            className="p-6 min-w-70 overflow-x-auto [&>pre]:bg-principal/50! [&>pre]:rounded-xl! [&>pre]:p-6!"
            dangerouslySetInnerHTML={{ __html: html}}
            >
                
            </div>
        </div>
    );
}