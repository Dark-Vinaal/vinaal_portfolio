import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MoreAboutMe from './components/MoreAboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <MoreAboutMe />
        <Projects />
        <Contact />
        <LetsConnect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
