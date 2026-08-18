import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import ScrollBlurText from "@/components/text/ScrollBlurText";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import LogoMarquee from "@/components/clients/LogoMarquee";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/layout/Footer";
import Services from "@/components/services/Services";
import StackingProcess from "@/components/process/StackingProcess";




export default function Home() {
  return (
    <main>
      <Hero />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Navbar />
      <About />
      <Services />

           <section id="about" className="font-syne font-semibold mx-auto w-full flex justify-center max-w-[1700px] py-20 md:px-30">
        <ScrollBlurText
          start="start 0.8"
          end="start 0.3"
          text="Specializing in branding, logo design, packaging, and visual identity systems that help businesses build recognition and lasting impact."
          className="max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-white text-center md:text-5xl"
        />
      </section>
      <Projects />
      <StackingProcess />
      <Testimonials />
      <LogoMarquee />
      <Contact />
      <Footer />

     
    </main>
  );
}