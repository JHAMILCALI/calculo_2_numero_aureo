import "katex/dist/katex.min.css";
import img1 from "../assets/img12.png";
import img2 from "../assets/img13.png";
import img3 from "../assets/img14.png";
import img4 from "../assets/img15.png";
import img5 from "../assets/img16.png";
import img6 from "../assets/img17.png";
export const Tiwanaku = () => {
  return (
    <section
      id="tiwanaku"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        LA PROPORCION{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        ÁUREA{" "}
        </span>
        EN{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          TIWANAKU{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-orange-400">
        Uno de los ejemplos más fascinantes y menos estudiados de la aplicación de proporciones matemáticas en la arquitectura precolombina se encuentra en Tiwanaku, el importante sitio arqueológico ubicado en el altiplano boliviano, cerca del lago Titicaca. Esta civilización, que floreció entre los años 300 y 1000 d.C., demostró un conocimiento arquitectónico y matemático extraordinario que incluye evidencias de la aplicación de la proporción áurea.
      </p>

      {/* 1. Arquitectura y precisión matemática */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img1} alt="..." className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">Arquitectura y precisión matemática</h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              La arquitectura de Tiwanaku se caracteriza por su precisión geométrica y el uso de proporciones específicas que sugieren un conocimiento profundo de principios matemáticos. Los constructores tiwanakotas emplearon bloques de piedra de múltiples toneladas con encajes tan precisos que no permiten la inserción de una hoja de papel entre ellos, una técnica que requería conocimientos geométricos avanzados.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Puerta del Sol */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">La Puerta del Sol y proporciones áureas</h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              El monolito más famoso de Tiwanaku, la Puerta del Sol, presenta dimensiones que se aproximan notablemente a la proporción áurea. Sus medidas principales (altura, anchura y las proporciones de sus elementos decorativos) mantienen relaciones que oscilan alrededor de φ = 1.618. La disposición de las figuras talladas en el dintel superior, incluyendo la deidad central conocida como el "Señor de los Báculos", sigue patrones geométricos que incorporan estas proporciones.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img2} alt="..." className="w-[300px] h-[300px] object-cover" />
        </div>
      </div>

      {/* 3. Templo de Kalasasaya */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img3} alt="..." className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">El Templo de Kalasasaya</h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Este complejo ceremonial rectangular muestra proporciones que se acercan al rectángulo áureo. Sus dimensiones de aproximadamente 128 por 118 metros, aunque no exactamente áureas, reflejan un sistema proporcional coherente. Los monolitos ubicados en su interior, especialmente el Monolito Ponce, presentan proporciones corporales que se aproximan a las relaciones áureas encontradas en la anatomía humana.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Puma Punku */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">Puma Punku y geometría avanzada</h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              La estructura conocida como Puma Punku representa quizás el ejemplo más sofisticado de precisión geométrica en Tiwanaku. Los bloques de piedra andesita y arenisca roja presentan cortes y ángulos que demuestran un dominio de la geometría espacial. Algunos investigadores han identificado en sus proporciones relaciones que se aproximan al número dorado, particularmente en los sistemas de ensamblaje de los bloques tipo "H" y en las proporciones de los canales y rebajes.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img4} alt="..." className="w-[300px] h-[300px] object-cover" />
        </div>
      </div>

      {/* 5. Astronomía y cosmología andina */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img5} alt="..." className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">Implicaciones astronómicas y matemáticas</h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Los estudios arqueoastronómicos de Tiwanaku revelan que sus constructores tenían conocimientos precisos sobre los ciclos solares y lunares. Las alineaciones de sus estructuras principales con eventos astronómicos específicos sugieren el uso de cálculos matemáticos complejos. La integración de estas observaciones astronómicas con proporciones arquitectónicas específicas podría explicar la presencia de relaciones áureas en el diseño del sitio.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Cosmovisión andina */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">Contexto cultural andino</h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Es importante considerar que los conocimientos matemáticos de Tiwanaku se desarrollaron dentro de un contexto cultural andino específico, donde la geometría y las proporciones tenían significados cosmológicos y rituales. La posible aplicación de la proporción áurea no necesariamente siguió los mismos principios estéticos griegos o renacentistas, sino que pudo haber estado integrada en un sistema de creencias y conocimientos más amplio sobre la armonía cósmica.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img6} alt="..." className="w-[300px] h-[300px] object-cover" />
        </div>
      </div>
    </section>
  );
};
