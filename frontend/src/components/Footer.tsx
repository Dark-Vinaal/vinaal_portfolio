import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Heart, Sparkles, ArrowUp, MapPin } from 'lucide-react';
import ShinyButton from './ShinyButton';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Dark-Vinaal', label: 'GitHub', color: 'hover:bg-zinc-700' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vinaal', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: ExternalLink, href: 'https://linktr.ee/Darkxzz999', label: 'Linktree', color: 'hover:bg-green-600' },
  { icon: Mail, href: 'mailto:vinaalm898@gmail.com', label: 'Email', color: 'hover:bg-red-600' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const VerticalDivider = () => (
  <div className="absolute top-0 bottom-0 -right-6 w-px bg-zinc-800 hidden md:block overflow-hidden">
    <motion.div
      className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
      animate={{ y: ['-100%', '200%'] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
    />
  </div>
);

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="grid md:grid-cols-12 gap-12 mb-12">

            {/* Brand Section - Takes more space */}
            <motion.div
              className="md:col-span-5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <VerticalDivider />
              <a href="#home" className="inline-block group">
                <span className="text-4xl font-bold tracking-tighter">
                  <span className="bg-gradient-to-r from-red-500 via-purple-500 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-red-500 group-hover:to-red-600 transition-all duration-500">
                    Vinaal R
                  </span>
                </span>
              </a>
              <p className="text-zinc-400 mt-4 max-w-sm leading-relaxed">
                Full Stack Developer & Software Engineer passionate about creating exceptional digital experiences and turning ideas into reality.
              </p>

              {/* Location with animation */}
              <motion.div
                className="flex items-center gap-2 mt-4 text-zinc-500"
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} className="text-purple-500" />
                <span className="text-sm">Tiruchirappalli, Tamil Nadu, India 🇮🇳</span>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    className={`p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-white ${social.color} transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="md:col-span-3 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <VerticalDivider />
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-purple-500" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors relative group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-purple-500 to-red-500 transition-all duration-300" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Get In Touch */}
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Mail size={16} className="text-purple-500" />
                Let's Connect
              </h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Have a project in mind or just want to chat? Feel free to reach out!
              </p>
              <ShinyButton
                href="#contact"
                icon={
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    👋
                  </motion.span>
                }
              >
                Say Hello
              </ShinyButton>

              {/* Fun stats */}
              <div className="mt-6 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Currently</p>
                <p className="text-zinc-300 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* Animated divider */}
          <div className="relative h-px bg-zinc-800 my-8">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'linear'
              }}
            />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-zinc-500 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Heart size={14} className="text-red-500 fill-red-500" />
              </motion.span>
              by <span className="text-white font-medium">Vinaal R</span>
            </motion.p>

            <motion.p
              className="text-zinc-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              &copy; {currentYear} All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Purplish Orb Scroll to Top Button - Only visible when footer is in view */}
      <AnimatePresence>
        {isFooterVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            aria-label="Scroll to top"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 blur-xl opacity-60"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />

            {/* Secondary glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 blur-lg opacity-40"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            />

            {/* Main orb button */}
            <motion.div
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 shadow-2xl shadow-purple-500/50 flex items-center justify-center overflow-hidden"
              whileHover={{
                scale: 1.15,
                boxShadow: '0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(147, 51, 234, 0.4)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Inner shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-50"
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />

              {/* Orbiting particles */}
              <motion.div
                className="absolute w-2 h-2 bg-white/80 rounded-full blur-[1px]"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                style={{ transformOrigin: '20px 0' }}
              />

              {/* Arrow icon */}
              <motion.div
                className="relative z-10"
                animate={{ y: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              >
                <ArrowUp size={22} className="text-white drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Tooltip */}
            <motion.span
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-900 to-violet-900 text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-purple-500/30 shadow-lg shadow-purple-500/20"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              ✨ Back to top
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
