import { motion } from 'framer-motion';
import { Code, Palette, Server, Brain } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
    const highlights = [
        { icon: Code, label: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
        { icon: Palette, label: 'UI/UX Design', desc: 'Creating intuitive user experiences' },
        { icon: Server, label: 'Backend Dev', desc: 'Building robust server architectures' },
        { icon: Brain, label: 'Problem Solving', desc: 'Tackling complex technical challenges' },
    ];

    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Passionate Developer & <span className="text-gradient">Creative Thinker</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="space-y-2 text-zinc-400 leading-relaxed">
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-zinc-300"
                            >
                                🧑‍🎓 I am a Computer Science undergraduate with a strong foundation in programming and problem-solving. I enjoy building responsive and user-friendly websites and applications, with a particular interest in Full Stack Web Development. I take pride in writing clean, maintainable code and creating smooth user experiences.
                            </ScrollReveal>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-zinc-300"
                            >
                                🚀 I am constantly exploring new tools, frameworks, and best practices to expand my skills and stay up to date with evolving technologies. My goal is to contribute to impactful projects and grow into a well-rounded Web Developer & Software Developer.
                            </ScrollReveal>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-zinc-300"
                            >
                                🚀 I am always eager to learn new technologies and tools, including experimenting with AI-driven solutions. Beyond academics, my passion for gaming has played a key role in sparking my interest in technology, laptops, and eventually coding, which continues to inspire my journey in software development.
                            </ScrollReveal>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-purple-500 text-white font-medium hover:opacity-90 transition-all"
                            >
                                Let's Connect
                            </a>
                            <a
                                href="#"
                                className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
                            >
                                Download CV
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="p-6 rounded-xl glass hover:glow-purple transition-all duration-300 group cursor-default"
                            >
                                <item.icon
                                    size={32}
                                    className="text-purple-500 mb-4 group-hover:text-red-400 transition-colors"
                                />
                                <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                                <p className="text-sm text-zinc-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
