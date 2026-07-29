import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PulseDivider from "@/components/PulseDivider";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PulseDivider />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
