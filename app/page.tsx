import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { MainModal } from "@/components/ui/mainmodal";
import { About } from "@/components/ui/about";
import { Extra } from "@/components/ui/extra";
import { Footer } from "@/components/ui/footer";
import TextType from "@/components/ui/texttype";
import SoftAurora from "@/components/ui/softaurora";

export default function Home() {
  return (
    <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10 bg-gray-950">
            <SoftAurora
                color1="#fbe30c"
                color2="#009eee"
                colorSpeed={1}
                speed={1}
                noiseAmplitude={5}
            />
        </div>
        <Navbar/>
        <div className="flex flex-col items-center justify-center mt-15 gap-4">
            <div className="flex flex-col items-center justify-center mt-1 m-10 gap-30">
                <TextType
                    className="text-6xl font-bold "
                    style={{
                        textShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 80px currentColor'
                    }}
                    text={"Bem vindo ao MyDevWiki!"}
                    typingSpeed={75}
                    pauseDuration={15000}
                    showCursor={true}
                    cursorCharacter={"_"}
                    cursorBlinkDuration={1}
                />
                <About/>
            </div>
            <MainModal/>
        </div>
        <Extra/>
        <Footer/>
    </div>
  );
}