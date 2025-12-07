import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const contactItems = [
    {
        icon: Mail,
        label: 'Email',
        value: 'vinaalm898@gmail.com',
        href: 'mailto:vinaalm898@gmail.com',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/vinaal',
        href: 'https://www.linkedin.com/in/vinaal',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/Dark-Vinaal',
        href: 'https://github.com/Dark-Vinaal',
    },
    {
        icon: ExternalLink,
        label: 'Linktree',
        value: 'linktr.ee/Darkxzz999',
        href: 'https://linktr.ee/Darkxzz999',
    },
];

// Floating shape component
function FloatingShape({
    type,
    size,
    left,
    top,
    delay,
    duration
}: {
    type: 'circle' | 'square' | 'triangle' | 'ring';
    size: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
}) {
    const shapeStyles: Record<string, React.CSSProperties> = {
        circle: {
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(65, 88, 208, 0.3), rgba(200, 80, 192, 0.3))',
        },
        square: {
            width: size,
            height: size,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(200, 80, 192, 0.2), rgba(255, 204, 112, 0.2))',
            transform: 'rotate(45deg)',
        },
        triangle: {
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid rgba(200, 80, 192, 0.2)`,
        },
        ring: {
            width: size,
            height: size,
            borderRadius: '50%',
            border: '3px solid rgba(65, 88, 208, 0.3)',
            background: 'transparent',
        },
    };

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left, top, ...shapeStyles[type] }}
            animate={{
                y: [0, -20, 0, 20, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 0.9, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}

export default function LetsConnect() {
    return (
        <section className="relative overflow-hidden" style={{ padding: '100px 0' }}>
            {/* Background gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #1e1e3f 60%, #0f0f23 100%)',
                }}
            />

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(200, 80, 192, 0.4), transparent 50%), radial-gradient(circle at 70% 50%, rgba(65, 88, 208, 0.4), transparent 50%)',
                }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Floating 3D shapes */}
            <FloatingShape type="circle" size={60} left="5%" top="20%" delay={0} duration={8} />
            <FloatingShape type="square" size={40} left="15%" top="70%" delay={1} duration={10} />
            <FloatingShape type="ring" size={80} left="85%" top="15%" delay={0.5} duration={12} />
            <FloatingShape type="triangle" size={50} left="90%" top="60%" delay={2} duration={9} />
            <FloatingShape type="circle" size={30} left="75%" top="80%" delay={1.5} duration={7} />
            <FloatingShape type="square" size={50} left="10%" top="40%" delay={0.8} duration={11} />
            <FloatingShape type="ring" size={40} left="50%" top="10%" delay={1.2} duration={8} />
            <FloatingShape type="circle" size={45} left="60%" top="75%" delay={0.3} duration={10} />

            {/* Content container */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        LET'S CONNECT
                    </h2>

                    {/* Animated underlines */}
                    <div className="flex justify-center gap-2">
                        <motion.div
                            className="h-1 rounded-full"
                            style={{ background: 'linear-gradient(90deg, #4158D0, #C850C0)', width: 60 }}
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="h-1 rounded-full"
                            style={{ background: 'linear-gradient(90deg, #C850C0, #FFCC70)', width: 40 }}
                            animate={{ scaleX: [1, 0.8, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                        />
                        <motion.div
                            className="h-1 rounded-full"
                            style={{ background: 'linear-gradient(90deg, #FFCC70, #4158D0)', width: 60 }}
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                        />
                    </div>

                    <p className="text-gray-400 mt-6 max-w-md mx-auto">
                        Feel free to reach out through any of these platforms. I'm always open to new opportunities and collaborations!
                    </p>
                </motion.div>

                {/* Contact items grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {contactItems.map((item, idx) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="contact-item group"
                            style={{
                                display: 'flex',
                                gap: '20px',
                                padding: '20px',
                                borderRadius: '12px',
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                            whileHover={{
                                y: -5,
                                background: 'rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            {/* Icon box */}
                            <motion.div
                                className="icon-box"
                                style={{
                                    width: 54,
                                    height: 54,
                                    minWidth: 54,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #4158D0, #C850C0)',
                                    boxShadow: '0 5px 15px rgba(200, 80, 192, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                }}
                                whileHover={{
                                    rotate: 10,
                                    scale: 1.1,
                                    boxShadow: '0 10px 25px rgba(200, 80, 192, 0.4)',
                                }}
                            >
                                {/* Inner white circle */}
                                <motion.div
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: '50%',
                                        background: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    whileHover={{ scale: 0.9 }}
                                >
                                    <item.icon size={22} style={{ color: '#C850C0' }} />
                                </motion.div>
                            </motion.div>

                            {/* Text content */}
                            <div className="flex flex-col justify-center">
                                {/* Label */}
                                <span
                                    className="contact-label"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#777',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '4px',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {item.label}
                                </span>

                                {/* Value */}
                                <span
                                    className="contact-value"
                                    style={{
                                        fontSize: '1rem',
                                        color: '#ddd',
                                        fontWeight: 500,
                                        position: 'relative',
                                        display: 'inline-block',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {item.value}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Inline styles for hover effects that require CSS */}
            <style>{`
        .contact-item:hover .contact-label {
          color: #FFCC70 !important;
        }
        
        .contact-item:hover .contact-value {
          color: #C850C0 !important;
        }
        
        .contact-value::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #C850C0, #FFCC70);
          transition: width 0.3s ease;
        }
        
        .contact-item:hover .contact-value::after {
          width: 100%;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(0) rotate(180deg); }
          75% { transform: translateY(20px) rotate(270deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
      `}</style>
        </section>
    );
}
