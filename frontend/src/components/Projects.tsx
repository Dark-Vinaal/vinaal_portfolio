import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Layout, Calculator } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Techy Zone',
    description: 'A comprehensive tech resource hub featuring curated links to AI tools, development resources, design assets, cloud storage, cybersecurity tools, and more. Built as a one-stop solution for developers and tech enthusiasts.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    icon: Layout,
    github: 'https://github.com/Dark-Vinaal',
    live: 'https://techyzone.netlify.app/',
    color: 'from-purple-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Mobile SmartZ',
    description: 'A sleek e-commerce platform for premium smartphones featuring product showcases, responsive design, and smooth navigation. Displays flagship devices from Apple, Samsung, Google, and Nothing with pricing and features.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    icon: Smartphone,
    github: 'https://github.com/Dark-Vinaal/E-commerce-site-bootstrap',
    live: 'https://dark-vinaal.github.io/E-commerce-site-bootstrap/',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Modern Calculator',
    description: 'A beautiful, responsive calculator with dual theme support for dark and light backgrounds. Features clean UI design, smooth animations, and all essential mathematical operations.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Calculator,
    github: 'https://github.com/Dark-Vinaal/Calculator-JS',
    live: 'https://dark-vinaal.github.io/Calculator-JS/',
    color: 'from-green-500 to-teal-500',
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-2xl overflow-hidden glass hover:glow-gradient transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${project.color} opacity-90`}>
                  <project.icon size={20} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
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
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Dark-Vinaal?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
