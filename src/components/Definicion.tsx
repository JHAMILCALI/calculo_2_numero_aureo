import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export const Definicion = () => {
  return (
    <section
      id="definicion"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Definición del{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Numero Áureo
        </span>
      </h2>

      <div className="bg-white/5 dark:bg-white/10 p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md">
          <p className="text-lg md:text-xl leading-relaxed text-justify text-white">
            El número dorado (φ) se define como la proporción única en la cual la razón 
            entre la suma de dos cantidades y la mayor de ellas es igual a la razón entre 
            la mayor y la menor. Matemáticamente, si tenemos dos segmentos a y b, donde a {'> '} 
            b, entonces:
          </p>
          <BlockMath>{String.raw`\frac{a + b}{a} = \frac{a}{b} = \varphi`}</BlockMath>
        </div>
    </section>
  );
};
