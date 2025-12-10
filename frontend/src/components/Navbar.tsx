import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky detection
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          color: #ffffff;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: #2575fc;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link.active {
          color: #2575fc;
        }
        
        .nav-link.active::after {
          width: 100%;
        }
        
        .logo-gradient {
          font-size: 22px;
          font-weight: 700;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
          background-size: 200% auto;
        }

        .logo-gradient:hover {
          background-position: right center;
          background-image: linear-gradient(to right, #a855f7 0%, #ec4899 50%, #a855f7 100%);
        }
        
        .navbar-bg {
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar-bg fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          zIndex: 1000,
          padding: scrolled ? '10px 0' : '20px 0'
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="logo-gradient">
            Vinaal R
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center" style={{ gap: '30px' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:text-[#2575fc] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 navbar-bg pt-24 md:hidden"
            style={{ zIndex: 999 }}
          >
            <ul className="flex flex-col items-center gap-8 py-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-medium transition-colors ${activeSection === item.href.substring(1)
                      ? 'text-[#2575fc]'
                      : 'text-white hover:text-[#2575fc]'
                      }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
