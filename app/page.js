import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import ResumeSection from "@/components/ResumeSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Services />
        <HireMe />
        <ResumeSection />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
