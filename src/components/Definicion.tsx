import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import img1 from "../assets/img1.jpg";
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

  <div className="my-6">
    <BlockMath>{String.raw`\frac{a + b}{a} = \frac{a}{b} = \varphi`}</BlockMath>
  </div>

  {/* Contenedor en dos columnas */}
  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
    {/* Imagen a la izquierda */}
    <div className="w-full md:w-1/2">
  <img
    src={img1}
    alt="Ilustración número áureo"
    className="rounded-xl shadow-md w-3/4 mx-auto"
  />
</div>


    {/* Texto a la derecha */}
    <div className="w-full md:w-1/2">
      <p className="text-lg md:text-xl leading-relaxed text-justify text-white">
        Esta relación establece que φ ≈ 1.618033988749894..., un número irracional que posee propiedades matemáticas extraordinarias. Una característica notable del número dorado es que φ² = φ + 1, lo que significa que al elevar φ al cuadrado, obtenemos el mismo número más uno.
La proporción áurea también se puede expresar como la división de un segmento en dos partes de tal manera que la razón entre el segmento completo y la parte mayor sea igual a la razón entre la parte mayor y la menor. Esta división se conoce como "sección áurea" y ha sido utilizada como principio estético desde la antigüedad.
Otra propiedad fascinante del número dorado es su relación con su recíproco: 1/φ = φ - 1 ≈ 0.618. Esta característica única hace que φ sea el único número positivo cuyo recíproco se obtiene simplemente restándole uno.

      </p>
    </div>
  </div>
</div>

    </section>
  );
};
