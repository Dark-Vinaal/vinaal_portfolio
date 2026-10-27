import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MoreAboutMe from './components/MoreAboutMe';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollbar';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomScrollbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <MoreAboutMe />
        <Projects />
        <Certifications />
        <Contact />
        <LetsConnect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
