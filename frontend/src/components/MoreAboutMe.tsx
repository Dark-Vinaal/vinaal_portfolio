import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award, Languages, Users, Heart } from 'lucide-react';
import MagicBento from './MagicBento';
import type { BentoCardData } from './MagicBento';

export default function MoreAboutMe() {
    const [educationLevel, setEducationLevel] = useState<'PG' | 'UG'>('PG');

    const toggleElement = (
        <div className="flex items-center bg-purple-950/40 p-0.5 rounded-full border border-purple-500/30 text-[10px] sm:text-xs relative z-20 pointer-events-auto">
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setEducationLevel('PG');
                }}
                className={`px-2 py-0.5 rounded-full transition-all duration-300 font-medium cursor-pointer ${
                    educationLevel === 'PG'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
                PG
            </button>
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setEducationLevel('UG');
                }}
                className={`px-2 py-0.5 rounded-full transition-all duration-300 font-medium cursor-pointer ${
                    educationLevel === 'UG'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
                UG
            </button>
        </div>
    );

    const cards: BentoCardData[] = [
        {
            color: '#060010',
            title: (
                <motion.span
                    key={educationLevel}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                >
                    {educationLevel === 'PG'
                        ? 'Bishop Heber College (Autonomous), Tiruchirapalli'
                        : 'National College (Autonomous), Tiruchirapalli'}
                </motion.span>
            ),
            description: (
                <motion.div
                    key={educationLevel}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                >
                    <p className="text-purple-400 font-medium">
                        {educationLevel === 'PG' ? 'Post Graduation' : 'Undergraduation'}
                    </p>
                    <p>
                        {educationLevel === 'PG'
                            ? 'Master of Science - Computer Science'
                            : 'Bachelor of Science - Computer Science'}
                    </p>
                </motion.div>
            ),
            label: 'College Education',
            icon: <GraduationCap size={20} />,
            headerRight: toggleElement
        },
        {
            color: '#060010',
            title: 'Jegan Matha Matriculation Higher Secondary School',
            description: (
                <div className="space-y-2">
                    <p className="text-purple-400 font-medium">Tiruchirapalli, KK Nagar</p>
                    <p>KGs, 1st Standard to 12th Standard</p>
                </div>
            ),
            label: 'School Education',
            icon: <School size={20} />
        },
        {
            color: '#060010',
            title: 'Certificate of Merit',
            description: 'Scored class first in semester examination at National College',
            label: 'Honors & Awards',
            icon: <Award size={20} />
        },
        {
            color: '#060010',
            title: 'Multilingual',
            description: (
                <div className="space-y-1">
                    <p><span className="text-purple-400">English</span> - Professional working proficiency</p>
                    <p><span className="text-purple-400">Tamil</span> - Native / Mother tongue</p>
                </div>
            ),
            label: 'Languages Known',
            icon: <Languages size={20} />
        },
        {
            color: '#060010',
            title: 'Professional Skills',
            description: (
                <div className="flex flex-wrap gap-2">
                    {['Punctuality', 'Communication', 'Time Management', 'Discipline', 'Professional Attire', 'Rule Adherence'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
                            {skill}
                        </span>
                    ))}
                </div>
            ),
            label: 'Soft Skills',
            icon: <Users size={20} />
        },
        {
            color: '#060010',
            title: 'What I Love',
            description: (
                <div className="space-y-2">
                    <div>
                        <p className="text-purple-400 text-xs mb-1">Interests</p>
                        <p className="text-xs">Full Stack Development • Software Engineering • Game Development</p>
                    </div>
                    <div>
                        <p className="text-purple-400 text-xs mb-1">Hobbies</p>
                        <p className="text-xs">Coding • Editing • Gaming • Movies • Web Series • Anime</p>
                    </div>
                </div>
            ),
            label: 'Interests & Hobbies',
            icon: <Heart size={20} />
        }
    ];

    return (
        <section id="more-about" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">Get To Know Me Better</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-gradient">Background</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A glimpse into my educational journey, achievements, and the things that drive me beyond code.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <MagicBento
                        cards={cards}
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                    />
                </motion.div>
            </div>
        </section>
    );
}
