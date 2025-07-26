import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          El{" "}
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text" >
              Numero Áureo
            </span>{" "}
          </h1>
          o
          <br />
          
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#d6e476] via-[#e6df19] to-[#f2ab48] text-transparent bg-clip-text">
              Numero de Oro
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Proyecto de Cálculo 2 del Número Áureo, una herramienta para explorar y calcular el número áureo en diversas aplicaciones matemáticas y artísticas.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Informe</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/JHAMILCALI/calculo_2_numero_aureo.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repositorio
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <div>
          <img src="/src/assets/img dark aureo.png" alt="" className="block dark:hidden" />
          <img src="/src/assets/image (1).png" alt="" className="hidden dark:block" />
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
