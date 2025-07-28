import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const Represntacion = () => {
  return (
    <section
      id="representacion"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        REPRESENTACION{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          MATEMÁTICA{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-orange-400">
        La representación matemática del número dorado puede expresarse de
        múltiples formas, cada una revelando diferentes aspectos de sus
        propiedades únicas.
      </p>
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <BlockMath math="\phi = \frac{1 + \sqrt{5}}{2}" />
        </div>

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Fórmula algebraica
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Esta fórmula surge de resolver la ecuación cuadrática x² - x - 1 =
              0, donde φ es la raíz positiva.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <BlockMath math="\phi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}}}" />
        </div>

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Fracción continua
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Una de las representaciones más elegantes del número dorado es su
              expresión como fracción continua infinita. Esta representación
              muestra que φ es el número irracional "más irracional", ya que
              converge más lentamente que cualquier otro número cuando se
              aproxima mediante fracciones continuas.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <BlockMath math="\lim_{n \to \infty} \frac{F_{n+1}}{F_n} = \phi" />
        </div>

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Relación con la sucesión de Fibonacci
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              El número dorado mantiene una relación íntima con la famosa
              sucesión de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...). El
              límite de la razón entre términos consecutivos de esta sucesión
              converge hacia φ:
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <BlockMath math="F(n) = \frac{\phi^n - (-\phi)^{-n}}{\sqrt{5}}" />
        </div>

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Fórmula de Binet
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Esta fórmula permite calcular directamente cualquier término de la
              sucesión de Fibonacci usando el número dorado.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="p-6 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3 text-center">
              Propiedades algebraicas notables
            </h3>
            <div className=" w-full mx-auto text-center pt-6">
              <BlockMath math="\phi^{2} = \phi + 1" />
              <br />
              <BlockMath math="\frac{1}{\phi} = \phi - 1" />
              <br />
              <BlockMath math="\phi^{n} = F(n) \phi + F(n - 1)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
