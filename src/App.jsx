import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Background />

      <div className="relative text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;