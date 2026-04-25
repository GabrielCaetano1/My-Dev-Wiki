export function About() {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-3">
            <h1 className="flex justify-center items-center text-2xl"> <img className="w-6 h-6" src="/arrow_right_icon.svg" alt="" /> O que é o My Dev Wiki?</h1>
            <div className="flex w-100 gap-5">
                <p>Este website é uma coletânea das definições e explicações de conceitos que eu (este querido programador) aprendi durante minha jornada como desenvolvedor. Espero que desta forma eu consiga fixar melhor meu aprendizado e compartilhá-lo a outras pessoas.</p>
            </div>

        </div>
    );
}