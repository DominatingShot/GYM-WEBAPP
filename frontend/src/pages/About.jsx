import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import BackgroundIcons from '../components/common/BackgroundIcons';

const About = () => {
    const experiences = [
        {
            company: "Infosys",
            role: "Specialist Programmer",
            period: "June 2025 - Present",
            description: [
                "Enhanced and maintained Azure Data Factory pipelines for multiple enterprise data products.",
                "Built Python scripts to map pipeline-to-table dependencies, improving visibility and reducing debugging effort by ~40%.",
                "Optimized scheduling and execution, cutting concurrency-related failures by ~60%.",
                "Diagnosed and resolved pipeline issues through root cause analysis."
            ]
        },
        {
            company: "Tata Consultancy Services",
            role: "SDE Intern",
            period: "July 2024 - Sept 2024",
            description: [
                "Developed an interactive dashboard for daily nutritional monitoring.",
                "Implemented YOLOv5-based image recognition, achieving ~90% accuracy for fruit identification.",
                "Used OpenAI API to provide nutritional info, improving user experience and engagement.",
                "Built Flask backend with REST APIs and SQLite for user authentication and data storage.",
            ]
        }
    ];

    const education = [
        {
            institution: "Amrita Vishwa Vidyapeetham",
            degree: "Bachelor of Technology in Computer Science",
            period: "2021 - 2025",
            details: "GPA: 8.2/10.0"
        },
        {
            institution: "Sharjah Indian School",
            degree: "12th Grade (Intermediate)",
            period: "2019 - 2021",
            details: "Percentage: 87.4%"
        },
        {
            institution: "Sharjah Indian School",
            degree: "10th Grade (Matriculation)",
            period: "2017 - 2019",
            details: "Percentage: 91.6%"
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#F2F2F2] flex flex-col pt-38 overflow-hidden">
            <Navbar />
            <BackgroundIcons />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-dark mb-16">
                        ABOUT <span className="text-primary">ME.</span>
                    </h1>

                    {/* Experience Section */}
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <Briefcase className="text-primary" size={32} />
                            <h2 className="text-3xl font-black tracking-tighter uppercase text-dark">Experience</h2>
                        </div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 border-l-4 border-dark/10">
                                    <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-primary" />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-dark">{exp.role}</h3>
                                            <p className="text-lg font-bold text-primary">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-dark/60 font-bold text-sm mt-1 md:mt-0">
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="text-dark/80 leading-relaxed flex items-start gap-2">
                                                <span className="text-primary mt-1.5 leading-none">✽</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <GraduationCap className="text-primary" size={32} />
                            <h2 className="text-3xl font-black tracking-tighter uppercase text-dark">Education</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 border-4 border-dark shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
                                >
                                    <h3 className="text-xl font-black text-dark mb-2 tracking-tight uppercase">{edu.institution}</h3>
                                    <p className="text-primary font-bold mb-4">{edu.degree}</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-dark/60 font-bold text-sm">
                                            <Calendar size={16} />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-dark font-black text-lg mt-2">
                                            <Award className="text-primary" size={20} />
                                            <span>{edu.details}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
