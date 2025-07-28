import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import light_img from "../assets/image (1).png";
import dark_img from "../assets/img dark aureo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const phiText = "φ ≈ 1.61803398875...";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= phiText.length) {
          return 0; // reiniciar para el bucle
        }
        return prev + 1;
      });
    }, 150); // velocidad de animación (ms)

    return () => clearInterval(interval);
  }, [phiText.length]);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          El{" "}
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Número Áureo
            </span>{" "}
          </h1>
          o
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#d6e476] via-[#e6df19] to-[#f2ab48] text-transparent bg-clip-text">
              Número de Oro
            </span>{" "}
          </h2>
        </main>

        {/* Texto animado */}
        <div className="text-3xl font-semibold text-yellow-400">
          {phiText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={
                index < visibleCount ? { opacity: 1, y: 0 } : { opacity: 0 }
              }
              transition={{ duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Proyecto de Cálculo 2 del Número Áureo, una herramienta para explorar
          y calcular el número áureo en diversas aplicaciones matemáticas y
          artísticas.
        </p>

        {/* Botones: Informe y Diapositivas */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <a
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1-kxSTgsSn5N8nufYiXFjKU9__IcCPH7w/view?usp=sharing"
            target="_blank"
            className={`w-full md:w-1/3 bg-green-500 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Informe
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.canva.com/design/DAGuZeO8HFs/uJ2bvdLxibju85SHzYtkWQ/edit?utm_content=DAGuZeO8HFs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            className={`w-full md:w-1/3 bg-blue-600 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Diapositivas
          </a>
        </div>

      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <div>
          <img src={dark_img} alt="" className="block dark:hidden" />
          <img src={light_img} alt="" className="hidden dark:block" />
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
