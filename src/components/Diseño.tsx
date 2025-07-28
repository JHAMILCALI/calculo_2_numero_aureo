import img7 from "../assets/img18.png"; // Añade tus imágenes correspondientes
import img8 from "../assets/img19.png";
import img9 from "../assets/img20.png";
import img10 from "../assets/img21.png";
import img11 from "../assets/img22.png";

export const DisenoModerno = () => {
  return (
    <section id="diseno-moderno" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        LA PROPORCIÓN{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ÁUREA{" "}
        </span>
        EN EL{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          DISEÑO MODERNO
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-orange-400">
        En la era contemporánea, la proporción áurea ha encontrado nuevas aplicaciones en campos como el diseño gráfico, la interfaz de usuario, la tipografía y el marketing, donde su poder estético continúa siendo relevante.
      </p>

      {/* Diseño gráfico y publicidad */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img7} alt="Diseño gráfico" className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 text-white">
          <h3 className="text-2xl font-bold text-orange-400 mb-3">Diseño gráfico y publicidad</h3>
          <p className="text-gray-300 text-justify leading-relaxed">
            Los diseñadores utilizan rectángulos áureos para crear composiciones equilibradas y visualmente atractivas. Muchos logotipos famosos, incluidos los de Apple, Twitter y Pepsi, incorporan elementos basados en la proporción áurea.
          </p>
        </div>
      </div>

      {/* Tipografía */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img8} alt="Tipografía" className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 text-white">
          <h3 className="text-2xl font-bold text-orange-400 mb-3">Tipografía</h3>
          <p className="text-gray-300 text-justify leading-relaxed">
            La proporción áurea se utiliza para definir relaciones entre tamaños de fuente, interlineado y márgenes. Muchas tipografías clásicas como Times New Roman y Helvetica reflejan esta armonía visual.
          </p>
        </div>
      </div>

      {/* Fotografía y cinematografía */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img9} alt="Fotografía" className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 text-white">
          <h3 className="text-2xl font-bold text-orange-400 mb-3">Fotografía y cinematografía</h3>
          <p className="text-gray-300 text-justify leading-relaxed">
            Aunque no idéntica, la "regla de los tercios" se relaciona con la proporción áurea. Fotógrafos y cineastas la usan para crear composiciones dinámicas y atractivas, posicionando puntos de interés según estas proporciones.
          </p>
        </div>
      </div>

      {/* Diseño de productos */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img10} alt="Producto industrial" className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 text-white">
          <h3 className="text-2xl font-bold text-orange-400 mb-3">Diseño de productos</h3>
          <p className="text-gray-300 text-justify leading-relaxed">
            Productos como el iPhone y automóviles de lujo usan proporciones áureas en su diseño, lo que influye en la percepción de calidad, belleza y funcionalidad por parte del usuario.
          </p>
        </div>
      </div>

      {/* Arquitectura contemporánea */}
      <div className="bg-[#1a1817] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto w-full max-w-screen-xl mb-8 px-2">
        <div className="md:w-1/3 w-full mx-auto text-center pt-6">
          <img src={img11} alt="Arquitectura contemporánea" className="w-[300px] h-[300px] object-cover" />
        </div>
        <div className="p-6 md:w-2/3 text-white">
          <h3 className="text-2xl font-bold text-orange-400 mb-3">Arquitectura contemporánea</h3>
          <p className="text-gray-300 text-justify leading-relaxed">
            Arquitectos como Gehry, Foster y Zaha Hadid aplican proporciones áureas en estructuras icónicas como el Guggenheim Bilbao o la Ópera de Sídney, creando espacios armónicos y futuristas.
          </p>
        </div>
      </div>
    </section>
  );
};
