import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VitalSigns from "@/components/VitalSigns";
import Focus from "@/components/Focus";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Berkeley from "@/components/Berkeley";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VitalSigns />
      <Focus />
      <Resume />
      <Projects />
      <Berkeley />
      <Contact />
    </main>
  );
}
