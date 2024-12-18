import { FC } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Sección Inicio */}
        <section id="inicio" className="h-screen">
          <Hero />
        </section>

        {/* Sección Servicios */}
        <section id="servicios" className="min-h-screen">
          <Services />
        </section>

        {/* Sección Galería */}
        <section id="galeria" className="min-h-screen">
            <Gallery />
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="min-h-screen">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
