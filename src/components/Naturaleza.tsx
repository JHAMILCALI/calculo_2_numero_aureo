import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import botanica from "../assets/img5.jpg";
import humano from "../assets/img6.jpg";
import espiral from "../assets/img7.jpg";
interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Botánica y filotaxia",
    description:"La disposición de hojas, pétalos y semillas en muchas plantas sigue patrones relacionados con el número dorado. La filotaxia, el estudio de la disposición de las hojas en los tallos, revela que muchas plantas organizan sus hojas siguiendo ángulos de aproximadamente 137.5°, que es 360°/φ². Esta disposición optimiza la exposición solar y la distribución de nutrientes.Las piñas de los pinos, las margaritas y los girasoles exhiben espirales que siguen números de Fibonacci. En los girasoles, las semillas se organizan en espirales que típicamente suman números consecutivos de Fibonacci, como 21 y 34, o 34 y 55, dependiendo del tamaño de la flor.",
    image: botanica,
  },
  {
    title: "Anatomía humana ",
    description:"El cuerpo humano presenta varias proporciones que se aproximan al número dorado. La razón entre la altura total de una persona y la distancia desde el ombligo hasta el suelo suele aproximarse a φ. Similarmente, la proporción entre la longitud del brazo completo y la del antebrazo, o entre los segmentos de los dedos, a menudo se acerca a la proporción áurea.",
    image: humano,
  },
  {
    title: "Formas espirales",
    description:"Las conchas del nautilus, aunque no siguen exactamente una espiral áurea, se aproximan a esta forma. Las espirales áureas aparecen también en galaxias, huracanes y otras formaciones naturales donde las fuerzas centrípetas y centrífugas crean patrones espirales.",
    image: espiral,
  },
  
];

export const Naturaleza = () => {
  return (
    <section id="naturaleza" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        PRESENCIA EN LA{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          NATURALEZA{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-zinc-200">
      La presencia del número dorado en la naturaleza es uno de los aspectos más fascinantes de esta proporción matemática. Aunque algunos ejemplos han sido romantizados o exagerados, existen múltiples manifestaciones genuinas de la proporción áurea en el mundo natural.
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
