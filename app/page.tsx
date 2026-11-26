import { Contacto } from "@/components/Contacto";
import { Experiencia } from "@/components/Experiencia";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Identidad } from "@/components/Identidad";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { Navbar } from "@/components/Navbar";
import { Servicios } from "@/components/Servicios";
import { Unidades } from "@/components/Unidades";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessJsonLd />
      <Navbar />
      <main id="inicio" className="flex-1">
        <Hero />
        <Experiencia />
        <Servicios />
        <Identidad />
        <Unidades />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}