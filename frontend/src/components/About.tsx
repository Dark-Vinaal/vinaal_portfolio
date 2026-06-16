import { motion } from 'framer-motion';
import { Code, Palette, Brain, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import PixelCard from './PixelCard';
import BorderGlow from './BorderGlow';
import ShinyButton from './ShinyButton';

export default function About() {
    const highlights = [
        {
            icon: Code,
            title: 'FULL STACK DEVELOPMENT',
            skills: ['Frontend Development', 'Backend Development', 'Database Management', 'Modern Web Technologies']
        },
        {
            icon: Palette,
            title: 'UI / UX DESIGN',
            skills: ['User Interface Design', 'User Experience Design', 'Responsive Design', 'Modern Visual Systems']
        },
        {
            icon: Sparkles,
            title: 'ARTIFICIAL INTELLIGENCE',
            skills: ['AI Tools & Integrations', 'Generative AI', 'AI-Assisted Workflows', 'Emerging AI Technologies']
        },
        {
            icon: Brain,
            title: 'PROBLEM SOLVING & SOFT SKILLS',
            skills: ['Clean Code Practices', 'Analytical Thinking', 'Problem Solving Mindset', 'Communication & Collaboration']
        }
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

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
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
                                containerClassName="mt-0 mb-5"
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
                    </motion.div>

                    {/* Right: Highlights Grid & Buttons */}
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="h-full"
                                >
                                    <PixelCard
                                        variant="purple"
                                        className="p-6 h-full flex flex-col justify-between border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm group cursor-default"
                                    >
                                        <div>
                                            <item.icon
                                                size={32}
                                                className="text-purple-500 mb-4 group-hover:text-cyan-400 transition-colors"
                                            />
                                            <h3 className="text-white font-semibold mb-3 tracking-wide text-sm md:text-base">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <ul className="text-xs text-zinc-400 space-y-1.5 list-disc pl-4 mt-auto">
                                            {item.skills.map((skill, sIdx) => (
                                                <li
                                                    key={sIdx}
                                                    className="group-hover:text-zinc-300 transition-colors"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </PixelCard>
                                </motion.div>
                            ))}
                        </div>

                        {/* Buttons below the 4 skill/info boxes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <ShinyButton
                                href="#contact"
                                icon={<ArrowRight size={20} />}
                            >
                                Let's Connect
                            </ShinyButton>
                            <BorderGlow
                                borderRadius={9999}
                                colors={['#a855f7', '#1e1b4b', '#f472b6']}
                                className="inline-block"
                                animated={true}
                                alwaysShow={true}
                            >
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-8 py-4 bg-zinc-950 rounded-full text-white font-semibold tracking-wide hover:bg-zinc-900 transition-colors"
                                >
                                    Download CV
                                </a>
                            </BorderGlow>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
