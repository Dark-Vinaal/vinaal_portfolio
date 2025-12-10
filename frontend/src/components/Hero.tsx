import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Clock, Calendar, Sun, ExternalLink, ArrowRight } from 'lucide-react';
import LaserFlow from './LaserFlow';
import StarBorder from './StarBorder';
import ShinyButton from './ShinyButton';

// Hidden reveal element with smooth, cool purplish effects
function HiddenRevealElement({
  children,
  className = '',
  style = {},
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute cursor-default ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 10,
              filter: 'blur(10px)'
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: 'blur(0px)'
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -5,
              filter: 'blur(5px)'
            }}
            transition={{
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
              delay: delay
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover hint - subtle glow indicator */}
      <motion.div
        className="w-3 h-3 rounded-full bg-purple-500/30"
        animate={{
          scale: isHovered ? 0 : [1, 1.2, 1],
          opacity: isHovered ? 0 : [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}

// Live time component with enhanced styling
function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-br from-zinc-900/80 via-purple-950/40 to-zinc-900/80 backdrop-blur-xl rounded-2xl px-6 py-5 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      whileHover={{
        boxShadow: '0 0 50px rgba(168,85,247,0.3)',
        borderColor: 'rgba(168,85,247,0.5)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Clock size={14} className="text-purple-400" />
        <p className="text-xs text-purple-400/80 uppercase tracking-widest font-medium">Current Time</p>
      </div>
      <motion.span
        className="font-mono text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent tracking-wider"
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {time.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })}
      </motion.span>
    </motion.div>
  );
}

// Live day component with enhanced styling
function LiveDay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-br from-zinc-900/80 via-purple-950/40 to-zinc-900/80 backdrop-blur-xl rounded-2xl px-6 py-5 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      whileHover={{
        boxShadow: '0 0 50px rgba(168,85,247,0.3)',
        borderColor: 'rgba(168,85,247,0.5)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Sun size={14} className="text-purple-400" />
        <p className="text-xs text-purple-400/80 uppercase tracking-widest font-medium">Today</p>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent uppercase tracking-widest">
        {time.toLocaleDateString('en-IN', {
          timeZone: 'Asia/Kolkata',
          weekday: 'long',
        })}
      </span>
    </motion.div>
  );
}

// Live date component with enhanced styling
function LiveDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-br from-zinc-900/80 via-purple-950/40 to-zinc-900/80 backdrop-blur-xl rounded-2xl px-6 py-5 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      whileHover={{
        boxShadow: '0 0 50px rgba(168,85,247,0.3)',
        borderColor: 'rgba(168,85,247,0.5)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={14} className="text-purple-400" />
        <p className="text-xs text-purple-400/80 uppercase tracking-widest font-medium">Date</p>
      </div>
      <span className="text-xl font-semibold text-zinc-200">
        {time.toLocaleDateString('en-IN', {
          timeZone: 'Asia/Kolkata',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </span>
    </motion.div>
  );
}

// Location component with enhanced styling
function LocationCard() {
  return (
    <motion.div
      className="bg-gradient-to-br from-zinc-900/80 via-purple-950/40 to-zinc-900/80 backdrop-blur-xl rounded-2xl px-6 py-5 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      whileHover={{
        boxShadow: '0 0 50px rgba(168,85,247,0.3)',
        borderColor: 'rgba(168,85,247,0.5)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={14} className="text-purple-400" />
        <p className="text-xs text-purple-400/80 uppercase tracking-widest font-medium">Location</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-zinc-200">Tiruchirappalli</span>
      </div>
      <p className="text-sm text-zinc-500 mt-1">Tamil Nadu, India 🇮🇳</p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative bg-black overflow-hidden"
    >
      {/* LaserFlow Background - UNCHANGED */}
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

      {/* Gradient overlays for depth - UNCHANGED */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none z-[1]" />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE - Main Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 rounded-full glass text-sm text-zinc-300">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
              >
                Hi, I'm{' '}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x hover:from-purple-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-500 cursor-default bg-[length:200%_auto]"
                  style={{ willChange: 'background-position' }}
                >
                  Vinaal R
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed"
              >
                Full Stack Developer & Software Engineer specializing in building exceptional digital experiences
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4 mb-8"
              >
                {[
                  { icon: Github, href: 'https://github.com/Dark-Vinaal', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/vinaal', label: 'LinkedIn' },
                  { icon: ExternalLink, href: 'https://linktr.ee/Darkxzz999', label: 'Linktree' },
                  { icon: Mail, href: 'mailto:vinaalm898@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
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
                className="flex flex-wrap gap-4"
              >
                <ShinyButton
                  href="#projects"
                  icon={<ArrowRight size={20} />}
                >
                  View My Work
                </ShinyButton>
                <StarBorder
                  as="a"
                  href="#contact"
                  color="cyan"
                  speed="5s"
                >
                  Get in Touch
                </StarBorder>
              </motion.div>
            </div>

            {/* RIGHT SIDE - Hidden Reveal Elements */}
            <div className="relative h-[500px] hidden lg:block">
              {/* Time - Top */}
              <HiddenRevealElement
                className="z-[2]"
                style={{ top: '5%', right: '10%' }}
                delay={0}
              >
                <LiveTime />
              </HiddenRevealElement>

              {/* Day - Upper Middle */}
              <HiddenRevealElement
                className="z-[2]"
                style={{ top: '28%', right: '30%' }}
                delay={0.05}
              >
                <LiveDay />
              </HiddenRevealElement>

              {/* Date - Lower Middle */}
              <HiddenRevealElement
                className="z-[2]"
                style={{ top: '52%', right: '8%' }}
                delay={0.1}
              >
                <LiveDate />
              </HiddenRevealElement>

              {/* Location - Bottom */}
              <HiddenRevealElement
                className="z-[2]"
                style={{ bottom: '8%', right: '22%' }}
                delay={0.15}
              >
                <LocationCard />
              </HiddenRevealElement>
            </div>
          </div>
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
