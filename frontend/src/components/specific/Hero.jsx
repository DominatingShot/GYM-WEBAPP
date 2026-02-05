import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin, CodeXml } from 'lucide-react';
import BackgroundIcons from '../common/BackgroundIcons';
import profileImage from '../../assets/1732115103352.jpeg';
import resumeFile from '../../assets/AKSHAJ_V_J_RESUME.pdf';

const Hero = () => {
    const scrollItems = [
        "SQL", "PYTHON", "DATABRICKS", "AZURE DATA FACTORY", "DBMS",
        "AZURE CLOUD", "REACT", "FLASK", "MACHINE LEARNING", "PYSPARK", "DATA WAREHOUSING", "API DESIGN", "GIT"
    ];

    return (
        <div className="relative min-h-screen bg-[#F2F2F2] flex flex-col pt-32 overflow-hidden">
            <BackgroundIcons />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-dark">
                            HI I'M AKSHAJ.<br />
                            A DATA <span className="text-primary">✽</span> ENGINEER<br />
                            AT <span className="relative">
                                INFOSYS
                                <span className="absolute left-0 top-1/2 w-full bg-dark -translate-y-1/2"></span>
                            </span>
                        </h1>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-dark/60">
                        <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Github size={20} />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                            <CodeXml size={20} />
                            <span>LEETCODE</span>
                        </a>
                    </div>

                    <div className="mt-12 flex items-start">
                        <div className="flex bg-dark p-1">
                            <a
                                href={resumeFile}
                                download="AKSHAJ_V_J_RESUME.pdf"
                                className="bg-dark text-white px-8 py-4 font-bold text-sm tracking-tight hover:bg-neutral-800 transition-colors flex items-center justify-center"
                            >
                                RESUME
                            </a>
                            <Link
                                to="/contact"
                                className="bg-white text-dark px-8 py-4 font-bold text-sm tracking-tight hover:bg-neutral-100 transition-colors border-l border-dark"
                            >
                                Let's talk.
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-30 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden border-8 border-white bg-white/50 shadow-2xl flex items-center justify-center"
                    >
                        <img
                            src={profileImage}
                            alt="Akshaj V J"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Angled Marquee Bar */}
            <div className="absolute bottom-10 left-[-10%] right-[-10%] bg-dark text-white py-6 transform -rotate-2 overflow-hidden z-20">
                <div className="animate-marquee whitespace-nowrap">
                    {[...scrollItems, ...scrollItems, ...scrollItems].map((item, i) => (
                        <div key={i} className="inline-flex items-center mx-8">
                            <span className="text-xl font-black tracking-tighter">{item}</span>
                            <span className="ml-8 text-primary">✽</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
