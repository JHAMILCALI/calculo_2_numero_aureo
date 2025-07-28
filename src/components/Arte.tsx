import "katex/dist/katex.min.css";
import clasica from "../assets/img8.png";
import pintura from "../assets/img9.png";
import moderno from "../assets/img11.png";
export const Arte = () => {
  return (
    <section
      id="arte"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        APLICASIONES EN EL{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ARTE{" "}
        </span>
        Y{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ARQUITECTURA{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-orange-400">
        La aplicación del número dorado en el arte y la arquitectura ha sido tanto consciente como intuitiva a lo largo 
        de la historia, creando obras que resultan visualmente armoniosas y estéticamente agradables.
      </p>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={clasica} alt="..." className="w-[300px] h-[300px] object-cover" />

        </div>

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Arquitectura clásica
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              El Partenón de Atenas es frecuentemente citado como ejemplo del uso de la proporción áurea, aunque los estudios modernos sugieren que esta aplicación pudo haber sido más intuitiva que consciente. Sin embargo, las proporciones generales del edificio se aproximan notablemente a rectángulos áureos.
La arquitectura gótica medieval también muestra evidencias del uso de proporciones áureas, particularmente en las catedrales francesas como Notre-Dame de París y la Catedral de Chartres, donde las proporciones de naves, rosetones y elementos decorativos siguen patrones relacionados con φ.

            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Pintura renacentista
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Leonardo da Vinci utilizó conscientemente la proporción áurea en muchas de sus obras. "La Última Cena" presenta múltiples aplicaciones de esta proporción en la composición general y en los detalles arquitectónicos. El "Hombre de Vitruvio" ilustra las proporciones áureas presentes en el cuerpo humano.
Otros maestros renacentistas como Rafael, Botticelli y Miguel Ángel incorporaron estas proporciones en sus composiciones. "El Nacimiento de Venus" de Botticelli y "La Escuela de Atenas" de Rafael muestran aplicaciones sofisticadas de la proporción áurea en la disposición de figuras y elementos arquitectónicos.

            </p>
          </div>
        </div>

        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={pintura} alt="..." className="w-[300px] h-[300px] object-cover" />

        </div>
        </div>
      </div>

      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={moderno} alt="..." className="w-[300px] h-[300px] object-cover" />

        </div>

        {/* Contenido a la derecha */}
        <div className="p-6 md:w-2/3 w-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-3">
              Arte moderno y contemporáneo
            </h3>
            <p className="text-gray-300 text-justify leading-relaxed">
              Salvador Dalí fue particularmente obsesivo con la proporción áurea, incorporándola explícitamente en obras como "Leda Atómica" y "La Última Cena". Le Corbusier desarrolló el "Modulor", un sistema de medidas basado en el número dorado y las proporciones humanas, que aplicó en sus diseños arquitectónicos.
Piet Mondrian, aunque aparentemente abstracto en su aproximación, utilizó proporciones áureas en muchas de sus composiciones geométricas. Sus divisiones de lienzo y posicionamiento de elementos coloridos frecuentemente siguen estas proporciones matemáticas.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
