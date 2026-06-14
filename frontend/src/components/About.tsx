import { motion } from 'framer-motion';
import { Code, Palette, Server, Brain, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import StarBorder from './StarBorder';
import ShinyButton from './ShinyButton';

export default function About() {
    const highlights = [
        { icon: Code, label: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
        { icon: Palette, label: 'UI/UX Design', desc: 'Creating intuitive user experiences' },
        { icon: Server, label: 'Backend Dev', desc: 'Building robust server architectures' },
        { icon: Brain, label: 'Problem Solving', desc: 'Tackling complex technical challenges' },
    ];

    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Wavy separator design - Hero to About */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
                >
                    {/* Deep purple background wave */}
                    <path
                        d="M0,80 C150,120 350,20 600,60 C850,100 1050,40 1200,80 L1200,0 L0,0 Z"
                        fill="#a855f7"
                        opacity="0.3"
                    />
                    {/* Foreground black wave */}
                    <path
                        d="M0,80 C150,110 350,30 600,70 C850,110 1050,50 1200,80 L1200,0 L0,0 Z"
                        fill="#000000"
                    />
                </svg>
            </div>

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
                                ◆ I am a Computer Science Postgraduate with a strong foundation in PROGRAMMING, SOFTWARE DEVELOPMENT, and PROBLEM-SOLVING. I specialize in building MODERN, RESPONSIVE, and USER-CENTRIC web applications while continuously improving my skills in FULL STACK DEVELOPMENT and scalable digital solutions.
                            </ScrollReveal>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-zinc-300"
                            >
                                ◆ I am a passionate developer with a strong interest in evolving technologies such as SOFTWARE DEVELOPMENT, ARTIFICIAL INTELLIGENCE, and other EMERGING TECH fields. I constantly explore new tools, frameworks, and industry best practices to expand my technical expertise and stay up to date with the rapidly evolving technology landscape.
                            </ScrollReveal>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-zinc-300"
                            >
                                ◆ My journey into this field began through my interest in GAMING, EDITING, TECHNOLOGY, and DIGITAL CREATIVITY, which gradually developed into curiosity about laptops, software, and how modern digital systems work. That curiosity eventually led me to coding, and since then, I have continued building my knowledge and passion for creating impactful, innovative, and future-ready software solutions.
                            </ScrollReveal>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <ShinyButton
                                href="#contact"
                                icon={<ArrowRight size={20} />}
                            >
                                Let's Connect
                            </ShinyButton>
                            <StarBorder
                                as="a"
                                href="#"
                                color="cyan"
                                speed="5s"
                            >
                                Download CV
                            </StarBorder>
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
