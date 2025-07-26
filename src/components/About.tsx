import { Statistics } from "./Statistics";
import pilot from "../assets/logo circ info.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[200px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Integrates{" "}
                </span>
                del Proyecto
                <ul className="text-xl  mt-4 text-foreground/80">
                <li>Jhamil Calixto Mamani Quea</li>
                <li>Diego Ronald Coyo Luque</li>
                <li>Joel Francisco Mollericona Paco</li>
              </ul>
              </h2>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Licenciado{" "}
                </span>
                en Matemáticas
                <ul className="text-xl  mt-4 text-foreground/80">
                  <li>Israel Juan Mamani Quispe</li>
                </ul>
              </h2>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
