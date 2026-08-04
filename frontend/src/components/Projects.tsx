import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Layout, Calculator, Gamepad2, FileText, Activity, Sigma, Repeat, Coffee, Palette, Scissors, Bot, Joystick, ShieldHalf, Code2, Binary, Package } from 'lucide-react';
import Magnet from './Magnet';
import imgRockPaperScissors from '../assets/projects/rockpaperscissors.jpg';

const projects = [
  // Row 1
  {
    id: 101,
    title: 'Dark AI',
    description: 'An AI-powered generative assistant currently under active development. Leveraging cutting-edge language models for intelligent conversations and content generation.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'API', 'Node.js'],
    icon: Bot,
    github: 'https://github.com/Dark-Vinaal/DARK_GEN-AI.git',
    live: 'https://dark-gen-ai.vercel.app/',
    color: 'from-violet-600 to-purple-500',
  },
  {
    id: 102,
    title: 'GamesHub',
    description: 'A curated gaming hub bringing together multiple browser-based games in one sleek platform with smooth navigation and engaging UI.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind'],
    icon: Joystick,
    github: 'https://github.com/Dark-Vinaal/GamesHub.git',
    color: 'from-fuchsia-500 to-pink-500',
    disabled: true,
  },
  {
    id: 103,
    title: 'Project Batman',
    description: 'A themed interactive web experience inspired by the Dark Knight universe, featuring immersive design and dynamic animations.',
    image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind'],
    icon: ShieldHalf,
    github: 'https://github.com/Dark-Vinaal/I-m-Batman.git',
    live: 'https://theproject-batman.vercel.app/',
    color: 'from-slate-700 to-zinc-900',
  },
  {
    id: 4,
    title: 'Asphalt Velocity',
    description: 'A high-octane racing game experience built for web browsers. Features dynamic controls and engaging gameplay mechanics.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    tech: ['React', 'JavaScript', 'Tailwind', ],
    icon: Gamepad2,
    github: 'https://github.com/Dark-Vinaal/Asphalt_Velocity',
    live: 'https://dark-vinaal.github.io/Asphalt_Velocity/',
    color: 'from-emerald-500 to-cyan-500',
  },
  // Row 2
  {
    id: 104,
    title: 'DevHub',
    description: 'A developer-centric resource hub aggregating tools, documentation links, and utilities for modern web development workflows.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind'],
    icon: Code2,
    github: 'https://github.com/Dark-Vinaal/DevHub.git',
    live: 'https://devhub-tz.vercel.app/',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 105,
    title: 'AlgoVerse',
    description: 'An interactive algorithm visualizer that brings data structures and sorting algorithms to life with step-by-step animations.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Binary,
    github: 'https://github.com/Dark-Vinaal/AlgoVerse.git',
    live: 'https://dark-vinaal.github.io/AlgoVerse/',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 2,
    title: 'Mobile SmartZ',
    description: 'A sleek e-commerce platform for premium smartphones featuring product showcases, responsive design, and smooth navigation.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    icon: Smartphone,
    github: 'https://github.com/Dark-Vinaal/E-commerce-site-bootstrap',
    live: 'https://dark-vinaal.github.io/Mobile-SmartZ/',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 106,
    title: 'Dark Fetch',
    description: 'A Sleek, lightweight system information fetcher written in Python. Features real-time hardware metrics, ASCII progress bars, and vibrant terminal styling using Rich and PSUtil.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    tech: ['Python', 'Rich', 'psutil'],
    icon: Package,
    github: 'https://github.com/Dark-Vinaal/Dark_Fetch.git',
    live: 'https://github.com/Dark-Vinaal/Dark_Fetch#-getting-started',
    color: 'from-teal-500 to-emerald-600',
    viewLabel: 'Usage',
  },
  {
    id: 108,
    title: 'Coffee Shop',
    description: 'A modern and elegant coffee shop website featuring responsive design and smooth animations.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Coffee,
    github: 'https://github.com/Dark-Vinaal/Coffee-Shop.git',
    live: 'https://brew-coffee-house.vercel.app/',
    color: 'from-amber-800 to-orange-950',
  },
  // Row 3+
  {
    id: 1,
    title: 'Techy Zone',
    description: 'A comprehensive tech resource hub featuring curated links to AI tools, development resources, design assets, cloud storage, cybersecurity tools, and more.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Layout,
    github: 'https://github.com/Dark-Vinaal?tab=repositories',
    live: 'https://techyzone.netlify.app/',
    color: 'from-purple-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Modern Calculator',
    description: 'A beautiful, responsive calculator with dual theme support for dark and light backgrounds. Features clean UI design and smooth animations.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Calculator,
    github: 'https://github.com/Dark-Vinaal/Calculator-JS',
    live: 'https://dark-vinaal.github.io/Calculator-JS/',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 5,
    title: 'Bio-Data Form',
    description: 'A responsive biological data collection form with verification logic and clean user interface design.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: FileText,
    github: 'https://github.com/Dark-Vinaal/biodata-form',
    live: 'https://dark-vinaal.github.io/biodata-form/',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 107,
    title: 'Calculator Python',
    description: 'A utility calculator application built using Python.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop',
    tech: ['Python'],
    icon: Calculator,
    github: 'https://github.com/Dark-Vinaal/Calculator-PY.git',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 10,
    title: 'Calculator Java',
    description: 'A robust calculator application built with Java, featuring a graphical user interface and advanced operations.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    tech: ['Java', 'Swing', 'Jframe'],
    icon: Coffee,
    github: 'https://github.com/Dark-Vinaal/Calculator-Java',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 11,
    title: 'Color Picker',
    description: 'A Chrome extension for identifying and copying color codes from any webpage with ease.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=400&fit=crop',
    tech: ['JavaScript', 'Chrome API', 'HTML/CSS'],
    icon: Palette,
    github: 'https://github.com/Dark-Vinaal/Color-Picker',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 12,
    title: 'Rock-Paper-Scissors',
    description: 'Classic game implementation featuring game logic, score tracking, and interactive user feedback.',
    image: imgRockPaperScissors,
    tech: ['Python', 'OS Module'],
    icon: Scissors,
    github: 'https://github.com/Dark-Vinaal/Rock-Paper-Scissor',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in web development,
            from responsive designs to fully functional applications.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden glass hover:glow-gradient transition-all duration-500 h-full flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 p-2.5 rounded-xl bg-gradient-to-r ${project.color} opacity-90`}>
                  <project.icon size={18} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-xs mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-zinc-800/50">
                  {project.live && !project.disabled && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>{project.viewLabel || 'View'}</span>
                    </a>
                  )}
                  {project.disabled && (
                    <span
                      className="flex items-center gap-2 text-sm text-zinc-600 opacity-40 cursor-not-allowed select-none"
                    >
                      <ExternalLink size={14} />
                      <span>View</span>
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <style>{`
            .view-all-btn {
              position: relative;
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 16px 32px;
              border-radius: 50px;
              background: linear-gradient(135deg, #6a11cb 0%, #2575fc 50%, #6a11cb 100%);
              background-size: 200% 200%;
              color: white;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
              box-shadow: 0 4px 20px rgba(106, 17, 203, 0.4), 0 0 40px rgba(37, 117, 252, 0.2);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              overflow: hidden;
            }
            
            .view-all-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              transition: left 0.5s ease;
            }
            
            .view-all-btn:hover {
              transform: scale(1.05);
              box-shadow: 0 8px 40px rgba(106, 17, 203, 0.6), 0 0 60px rgba(37, 117, 252, 0.4);
              background-position: 100% 0;
            }
            
            .view-all-btn:hover::before {
              left: 100%;
            }
            
            .view-all-btn:active {
              transform: scale(0.98);
            }
            
            .view-all-btn .icon {
              transition: transform 0.3s ease;
            }
            
            .view-all-btn:hover .icon {
              transform: translateX(4px);
            }
          `}</style>
          <Magnet padding={50} disabled={false} magnetStrength={50}>
            <a
              href="https://github.com/Dark-Vinaal/Dark-Vinaal/blob/main/PROJECTS/Projects.md"
              target="_blank"
              rel="noopener noreferrer"
              className="view-all-btn"
            >
              View All Projects
              <ExternalLink size={18} className="icon" />
            </a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
}
