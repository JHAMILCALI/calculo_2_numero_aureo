import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import euclides from "../assets/img2.jpg";
import luca from "../assets/img3.jpg";
import martin from "../assets/img4.jpg";
interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Euclides",
    description:
      "El matemático griego Euclides fue el primero en proporcionar una construcción geométrica rigurosa de esta proporción. En el Libro VI de sus Elementos, Euclides demuestra cómo dividir un segmento de línea de manera que la razón del segmento completo a la parte mayor sea igual a la razón de la parte mayor a la menor.",
    image: euclides,
  },
  {
    title: "Luca Pacioli ",
    description:
      "Durante el Renacimiento, el matemático italiano Luca Pacioli popularizó el concepto en su obra 'La Divina Proporción' (1509), ilustrada por Leonardo da Vinci. Pacioli asoció esta proporción con la perfección divina, de ahí proviene el término 'divina proporción'. Fue en esta época cuando la proporción áurea comenzó a ser aplicada de manera consciente en el arte y la arquitectura.",
    image: luca,
  },
  {
    title: "Término número dorado",
    description:
      "El término número dorado fue dado por Martin Ohm en 1835, mientras que la designación con la letra griega φ (phi) fue introducida por Mark Barr en honor al escultor griego Fidias, quien supuestamente utilizó esta proporción en el diseño del Partenón. Sin embargo, estudios posteriores han cuestionado la aplicación consciente de la proporción áurea en la arquitectura griega clásica.",
    image: martin,
  },
  
];

export const Origen = () => {
  return (
    <section id="origen" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        ORIGEN E{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          HISTORIA{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-zinc-200">
        Los orígenes del número dorado datan desde la antigua Grecia, aunque hay evidencia de que civilizaciones anteriores ya intuían esta proporción especial. Los primeros registros formales aparecen en los "Elementos" de Euclides (300 a.C.), donde se describe la división de un segmento en razón extrema y media, aunque sin usar explícitamente el término "proporción áurea".
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({title, description, image }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-green-500">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
