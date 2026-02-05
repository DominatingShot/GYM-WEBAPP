import { motion } from 'framer-motion';
import {
    Gamepad2, Code2, Music, Terminal,
    Headphones, Cpu, Target, Mic2
} from 'lucide-react';

const BackgroundIcons = () => {
    const decorIcons = [
        // Quadrant 1 (Top Left)
        { Icon: Code2, top: '5%', left: '5%', color: 'text-blue-900/40', size: 30, delay: 0.1 },
        { Icon: Terminal, top: '15%', left: '15%', color: 'text-blue-900/50', size: 42, delay: 0.3 },
        { Icon: Gamepad2, top: '25%', left: '8%', color: 'text-blue-900/45', size: 35, delay: 0.5 },
        { Icon: Cpu, top: '20%', left: '35%', color: 'text-blue-900/55', size: 38, delay: 0.9 },
        { Icon: Mic2, top: '30%', left: '2%', color: 'text-blue-900/45', size: 35, delay: 1.3 },

        // Quadrant 2 (Top Right)
        { Icon: Headphones, top: '8%', left: '60%', color: 'text-blue-900/50', size: 45, delay: 0.2 },
        { Icon: Target, top: '15%', left: '75%', color: 'text-blue-900/45', size: 32, delay: 0.4 },
        { Icon: Code2, top: '5%', left: '90%', color: 'text-blue-900/40', size: 36, delay: 0.6 },
        { Icon: Terminal, top: '25%', left: '85%', color: 'text-blue-900/55', size: 40, delay: 0.8 },
        { Icon: Music, top: '18%', left: '68%', color: 'text-blue-900/50', size: 33, delay: 1.0 },

        // Quadrant 3 (Middle Left)
        { Icon: Mic2, top: '45%', left: '3%', color: 'text-blue-900/40', size: 48, delay: 1.1 },
        { Icon: Cpu, top: '55%', left: '12%', color: 'text-blue-900/50', size: 35, delay: 1.3 },
        { Icon: Gamepad2, top: '40%', left: '22%', color: 'text-blue-900/45', size: 30, delay: 1.5 },
        { Icon: Target, top: '60%', left: '28%', color: 'text-blue-900/55', size: 42, delay: 1.7 },
        { Icon: Headphones, top: '65%', left: '5%', color: 'text-blue-900/40', size: 35, delay: 2.3 },

        // Quadrant 4 (Middle Right)
        { Icon: Code2, top: '42%', left: '55%', color: 'text-blue-900/50', size: 38, delay: 1.2 },
        { Icon: Music, top: '58%', left: '65%', color: 'text-blue-900/45', size: 44, delay: 1.4 },
        { Icon: Cpu, top: '52%', left: '95%', color: 'text-blue-900/55', size: 40, delay: 1.8 },
        { Icon: Gamepad2, top: '60%', left: '78%', color: 'text-blue-900/50', size: 35, delay: 2.0 },
        { Icon: Target, top: '68%', left: '88%', color: 'text-blue-900/40', size: 35, delay: 2.4 },

        // Quadrant 5 (Bottom Left)
        { Icon: Target, top: '80%', left: '5%', color: 'text-blue-900/45', size: 45, delay: 2.1 },
        { Icon: Terminal, top: '90%', left: '15%', color: 'text-blue-900/50', size: 30, delay: 2.3 },
        { Icon: Music, top: '75%', left: '25%', color: 'text-blue-900/55', size: 36, delay: 2.5 },
        { Icon: Code2, top: '85%', left: '35%', color: 'text-blue-900/40', size: 40, delay: 2.7 },
        { Icon: Headphones, top: '82%', left: '42%', color: 'text-blue-900/40', size: 38, delay: 3.3 },

        // Quadrant 6 (Bottom Right)
        { Icon: Gamepad2, top: '82%', left: '62%', color: 'text-blue-900/45', size: 28, delay: 2.2 },
        { Icon: Headphones, top: '95%', left: '75%', color: 'text-blue-900/50', size: 42, delay: 2.4 },
        { Icon: Cpu, top: '78%', left: '88%', color: 'text-blue-900/55', size: 35, delay: 2.6 },
        { Icon: Terminal, top: '88%', left: '95%', color: 'text-blue-900/40', size: 30, delay: 2.8 },
        { Icon: Target, top: '72%', left: '72%', color: 'text-blue-900/50', size: 38, delay: 3.0 },
        { Icon: Mic2, top: '85%', left: '55%', color: 'text-blue-900/40', size: 36, delay: 3.4 },

        // Extra Clusters
        { Icon: Code2, top: '35%', left: '48%', color: 'text-blue-900/50', size: 40, delay: 3.2 },
        { Icon: Music, top: '65%', left: '52%', color: 'text-blue-900/45', size: 35, delay: 3.4 },
        { Icon: Gamepad2, top: '48%', left: '45%', color: 'text-blue-900/55', size: 32, delay: 3.6 },
        { Icon: Cpu, top: '72%', left: '45%', color: 'text-blue-900/45', size: 35, delay: 4.0 },
        { Icon: Target, top: '15%', left: '50%', color: 'text-blue-900/50', size: 42, delay: 4.2 },
        { Icon: Code2, top: '50%', left: '60%', color: 'text-blue-900/45', size: 35, delay: 4.6 },
        { Icon: Terminal, top: '30%', left: '70%', color: 'text-blue-900/50', size: 40, delay: 4.8 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full z-0">
            {decorIcons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 0.8,
                        delay: item.delay,
                        y: {
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    style={{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                    }}
                    className={`${item.color} transform -rotate-12`}
                >
                    <item.Icon size={item.size} strokeWidth={1.5} />
                </motion.div>
            ))}
        </div>
    );
};

export default BackgroundIcons;
