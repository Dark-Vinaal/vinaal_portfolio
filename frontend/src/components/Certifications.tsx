import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ChromaGrid from './ChromaGrid';
import Magnet from './Magnet';

// Import images
import imgInternship from '../assets/certificates/Vinaal_R_ python internship.png';
import imgMerit from '../assets/certificates/Merit Certificate.jpg';
import imgPythonCourse from '../assets/certificates/certificate_Vinaal_R_25BFT448111.png';
import imgSimplilearnFrontEnd from '../assets/certificates/Simplilearn Certificate_pages-to-jpg-0001.jpg';
import imgAIWorkshop from '../assets/certificates/AI-Workshop Certificate.jpg';
import imgGuvi from '../assets/certificates/GuviCertification - o5H1949WA2T9d271Q3.png';

export default function Certifications() {
    const certifications = [
        {
            image: imgInternship,
            title: "Python Internship",
            subtitle: "Besant Technologies",
            handle: "Internship",
            borderColor: "#4285F4",
            gradient: "linear-gradient(145deg, #4285F4, #000)",
            url: "#"
        },
        {
            image: imgMerit,
            title: "Certificate of Merit",
            subtitle: "Scored Class First",
            handle: "Achievement",
            borderColor: "#FFD700",
            gradient: "linear-gradient(135deg, #FFD700, #000)",
            url: "#"
        },
        {
            image: imgPythonCourse,
            title: "Python Course Completion",
            subtitle: "Besant Technologies",
            handle: "Certification",
            borderColor: "#306998",
            gradient: "linear-gradient(150deg, #306998, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnFrontEnd,
            title: "Front-End",
            subtitle: "Simplilearn",
            handle: "Certification",
            borderColor: "#20B2AA",
            gradient: "linear-gradient(145deg, #20B2AA, #000)",
            url: "#"
        },
        {
            image: imgAIWorkshop,
            title: "Artificial Intelligence",
            subtitle: "Workshop",
            handle: "Workshop",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(160deg, #8B5CF6, #000)",
            url: "#"
        },
        {
            image: imgGuvi,
            title: "ChatGPT AI",
            subtitle: "GUVI HCL",
            handle: "Certification",
            borderColor: "#10B981",
            gradient: "linear-gradient(150deg, #10B981, #000)",
            url: "#"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">Achievements</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        Certifications & <span className="text-gradient">Internships</span>
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-6">
                        Workshops & <span className="text-gradient">Training</span>
                    </h3>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Professional certifications and internship experiences that have shaped my technical journey.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', width: '100%', minHeight: '800px', height: 'auto' }}>
                    <ChromaGrid
                        items={certifications}
                        radius={350}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>

                {/* View more certifications button */}
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
                            href="https://github.com/Dark-Vinaal/Dark-Vinaal/blob/main/Certifications/Certificate.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-all-btn"
                        >
                            View All Certifications
                            <ExternalLink size={18} className="icon" />
                        </a>
                    </Magnet>
                </motion.div>
            </div>
        </section>
    );
}
