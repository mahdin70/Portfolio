import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        
        <section id="experience" className="py-1 md:py-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>
          
          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Education />
              <Experience />
            </div>
          </div>
        </section>
        
        <section className="py-6 md:py-1 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 matrix-bg opacity-30 z-0"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
          
          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Leadership />
              <Achievements />
            </div>
          </div>
        </section>
        
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
