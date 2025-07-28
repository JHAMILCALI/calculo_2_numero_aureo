//import { Radar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Introducion = () => {
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
    <section id="introducion" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md font-bold mb-8 text-primary text-4xl">
        Introducion del Número Áureo
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
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
        <div className="bg-white/5 dark:bg-white/10 p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md">
          <p className="text-lg md:text-xl leading-relaxed text-justify text-white">
            El número áureo, representado por la letra griega{" "}
            <strong>φ (phi)</strong>, es una constante matemática que se
            aproxima a <strong>1.6180339887…</strong> y se define como el
            resultado de dividir una línea en dos segmentos de tal forma que la
            relación entre el segmento más largo y el segmento más corto sea
            igual a la relación entre la línea completa y el segmento más largo.
            Esta proporción aparece de forma sorprendente en diversas áreas como
            la <strong>naturaleza</strong>, donde se manifiesta en la
            disposición de pétalos o espirales de conchas; en el{" "}
            <strong>arte y la arquitectura</strong>, donde ha sido usado desde
            la antigua Grecia hasta el Renacimiento para lograr composiciones
            visualmente armoniosas; y en las <strong>matemáticas</strong>, donde
            está íntimamente ligado a la sucesión de Fibonacci, ya que la razón
            entre términos sucesivos tiende hacia φ conforme avanza la
            secuencia.
          </p>
        </div>
      </div>
    </section>
  );
};
