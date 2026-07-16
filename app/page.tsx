import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import ScrollBlurText from "@/components/text/ScrollBlurText";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <section id="about" className="mx-auto w-full flex justify-center max-w-[1700px] py-42 md:px-30">
        <ScrollBlurText
          start="start 0.8"
          end="start 0.3"
          text="Specializing in branding, logo design, packaging, and visual identity systems that help businesses build recognition and lasting impact."
          className="max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-white text-center md:text-5xl"
        />
      
      </section>
  
         

      <About />
      <Projects />
      <Contact />
      <section id="back to top" className="mx-auto w-full flex justify-center max-w-[1700px] py-30 ">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em]">
         <a href="#" className="transition hover:text-white">
          back to top
         </a>
        </div>
        </section>
    </main>
  );
}