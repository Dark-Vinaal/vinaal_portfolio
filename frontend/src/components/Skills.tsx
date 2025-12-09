import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiTypescript, SiJavascript,
  SiHtml5, SiCss3, SiPostgresql,
  SiGit, SiDocker,
  SiTailwindcss, SiPython,
  SiCplusplus, SiC, SiFlask, SiBootstrap, SiMysql, SiGithub, SiCanva
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Cpu, Binary, Layers, Box, Network } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

const skillCategories = [
  {
    category: 'Frontend Development',
    color: '#ef4444',
    skills: [
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss3, level: 92 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
      { name: 'Tailwind', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    category: 'Backend Development',
    color: '#a855f7',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'C++', icon: SiCplusplus, level: 80 },
      { name: 'C', icon: SiC, level: 85 },
      { name: 'Node.js', icon: SiNodedotjs, level: 88 },
      { name: 'Flask', icon: SiFlask, level: 82 },
    ],
  },
  {
    category: 'Database & Cloud',
    color: '#22c55e',
    skills: [
      { name: 'SQL', icon: SiPostgresql, level: 85 },
      { name: 'MySQL', icon: SiMysql, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'DockerHub', icon: SiDocker, level: 75 },
    ],
  },
  {
    category: 'Tools & Others',
    color: '#06b6d4',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Canva', icon: SiCanva, level: 85 },
    ],
  },
  {
    category: 'CS Fundamentals',
    color: '#f97316',
    skills: [
      { name: 'Data Structures', icon: Layers, level: 85 },
      { name: 'Algorithms', icon: Binary, level: 80 },
      { name: 'OOPs', icon: Box, level: 90 },
      { name: 'Operating System', icon: Cpu, level: 85 },
      { name: 'Computer Networking', icon: Network, level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-red-500 mb-4 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in full-stack development
            and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <ElectricBorder
                color={category.color}
                speed={0.8}
                chaos={0.4}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="h-full"
              >
                <div className="p-6 bg-zinc-900/80 rounded-2xl h-full">
                  <h3 className="text-xl font-bold mb-6" style={{ color: category.color }}>
                    {category.category}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                        className="group/skill"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <skill.icon className="w-5 h-5 text-zinc-400 group-hover/skill:text-white transition-colors" />
                          <span className="text-sm text-zinc-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="ml-auto text-xs text-zinc-500">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: catIdx * 0.1 + skillIdx * 0.05, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
