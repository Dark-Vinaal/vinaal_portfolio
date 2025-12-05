import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Clock } from 'lucide-react';
import LaserFlow from './LaserFlow';

// Clock component for Trichirapalli time
function LocalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex items-center gap-4 text-zinc-400 text-sm"
    >
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-purple-500" />
        <span>Trichirapalli, TN</span>
      </div>
      <div className="w-px h-4 bg-zinc-700" />
      <div className="flex items-center gap-2">
        <Clock size={14} className="text-red-500" />
        <span className="font-mono">{time.toLocaleTimeString('en-IN', options)}</span>
      </div>
      <div className="hidden sm:block w-px h-4 bg-zinc-700" />
      <span className="hidden sm:block">{time.toLocaleDateString('en-IN', dateOptions)}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-full relative bg-black overflow-hidden flex items-center justify-center">
      {/* LaserFlow Background */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          horizontalBeamOffset={0.0}
          verticalBeamOffset={-0.2}
          color="#a855f7"
          fogIntensity={0.5}
          wispDensity={1.2}
          verticalSizing={2.5}
          horizontalSizing={0.6}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none z-[1]" />

      {/* Content */}
      <div className="z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-zinc-300 mb-4">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Hi, I'm{' '}
          <span className="text-gradient">John Doe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Full Stack Developer & Software Engineer specializing in building exceptional digital experiences
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-full glass hover:glow-purple transition-all duration-300 hover:scale-110 text-zinc-400 hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 glow-gradient"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Local Time */}
        <div className="flex justify-center">
          <LocalClock />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-zinc-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
