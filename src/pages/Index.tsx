import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Rooms } from "@/components/site/Rooms";
import { Experiences } from "@/components/site/Experiences";
import { Location } from "@/components/site/Location";
import { Reservation } from "@/components/site/Reservation";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Paço do Bispo Boutique House · Sintra";
    const desc =
      "Boutique house de luxo na reserva natural de Sintra. Nove quartos, estúdio e penthouse, piscina panorâmica e lounge na antiga capela.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Experiences />
      <Location />
      <Reservation />
      <Footer />
    </main>
  );
};

export default Index;
