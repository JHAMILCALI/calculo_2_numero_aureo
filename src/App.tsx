import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
//import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
//import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
//import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
//import { Services } from "./components/Services";
import { Introducion} from "./components/Introducion";
//import { Team } from "./components/Team";
//import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Origen } from "./components/Origen";
import { Definicion } from "./components/Definicion";
import { Represntacion } from "./components/Representacion";
import { Naturaleza } from "./components/Naturaleza";
import { Arte } from "./components/Arte";
import { Tiwanaku } from "./components/Tiwanaku";
import { DisenoModerno } from "./components/Diseño";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Introducion/>
      
      {/* <GraficaEsp /> */}
      
      {/* <HowItWorks /> */}
      <Definicion />
      <Origen />
      <Represntacion/>
      <Naturaleza/>
      <Arte/>
      <Tiwanaku/>
      <DisenoModerno/>
      {/* <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;





