



import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contacts/Contact";
import Footer from "./sections/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div
      className="
        site
        relative
        min-h-screen
        overflow-clip
        bg-bg
        text-text
        font-sans
        transition-colors
        duration-[350ms]
        ease-in-out
      "
    >

      {/* =========================================
          GLOBAL ANIMATED BACKGROUND
      ========================================= */}

      <AnimatedBackground />


      {/* =========================================
          NAVBAR
      ========================================= */}

      <div className="relative z-20">
        <Navbar />
      </div>


      {/* =========================================
          PAGE CONTENT
      ========================================= */}

      <main className="relative z-10">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </main>


      {/* =========================================
          FOOTER
      ========================================= */}

      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  );
}
