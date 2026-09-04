import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Rooms } from "@/components/site/Rooms";
import { Experiences } from "@/components/site/Experiences";
import { Location } from "@/components/site/Location";
import { Reservation } from "@/components/site/Reservation";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";
import { useI18n } from "@/i18n/LanguageContext";

const Index = () => {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.title = t.meta.title;
    const desc = t.meta.description;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, [t, lang]);

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
