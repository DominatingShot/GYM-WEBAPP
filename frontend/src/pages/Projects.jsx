import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Brain, Database, Box, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import BackgroundIcons from '../components/common/BackgroundIcons';

const Projects = () => {
    const categories = ['ALL', 'FULL STACK', 'AI/ML', 'DATA ENGINEERING', 'OTHERS'];
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "EEG DATA ANALYSIS",
            category: "AI/ML",
            description: "Built an end-to-end EEG signal processing and machine learning pipeline in Python (MNE, NumPy, Pandas) to denoise and analyze multi-subject EEG data, achieving ~95% accuracy for left/right hand movement classification and ~72% accuracy for real vs. imagined actions while identifying key discriminative brain regions.",
            tags: ["Python", "Numpy", "Pandas", "MNE", "Scikit-learn"],
            icon: <Brain className="text-primary" size={24} />,
            link: "#",
            github: "#"
        },
        {
            title: "Twitter Sentiment Analysis",
            category: "AI/ML",
            description: "Designed and evaluated multiple machine learning classifiers (Logistic Regression, Multinomial/Gaussian Naive Bayes, SVM) for Twitter sentiment classification using NLTK-based text preprocessing and feature engineering, achieving best performance with SVM (AUC 0.77) on balanced datasets and deriving data-driven insights on model selection.",
            tags: ["Python", "NLTK", "ML Algorithms", "Twitter API", "SOUP"],
            icon: <Brain className="text-primary" size={24} />,
            link: "https://easychair.org/publications/paper/JMjB/open",
            github: "#"
        },
        {
            title: "ASL Animator",
            category: "FULL STACK",
            description: "Developed a cross-platform web application that converts English text into realistic American Sign Language (ASL) character animations using React, NLP (NLTK), and Blender, delivering an accessible, user-friendly interface to enhance communication for hearing-impaired users.",
            tags: ["HTML", "CSS", "JavaScript", "Blender"],
            icon: <Layers className="text-primary" size={24} />,
            link: "#",
            github: "https://github.com/imanaswer/Text-To-SignLanguage"
        },
        {
            title: "Minimalist Dev Portfolio",
            category: "OTHERS",
            description: "A portfolio website to showcase my achievements",
            tags: ["React", "Tailwind"],
            icon: <Box className="text-primary" size={24} />,
            link: "#",
            github: "#"
        },
        {
            title: "Java Programming eBook",
            category: "OTHERS",
            description: "Authored and published a beginner-focused Java programming eBook with line-by-line explanations and practical problem-solving examples, reaching 1,000+ learners online and generating 50+ direct website downloads through peer sharing.",
            tags: ["Java"],
            icon: <Box className="text-primary" size={24} />,
            link: "https://www.slideshare.net/slideshow/java-simplified-understanding-programming-basics/264167866",
            github: "#"
        }
    ];

    const filteredProjects = activeCategory === 'ALL'
        ? projects
        : projects.filter(p => p.category === activeCategory);

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
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-dark uppercase">
                                Selected <span className="text-primary">Works.</span>
                            </h1>
                            <p className="mt-4 text-dark/60 font-medium max-w-xl">
                                A collection of projects ranging from data infrastructure to interactive web applications.
                            </p>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-4 mb-16 border-b-4 border-dark/10 pb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 text-sm font-black tracking-widest uppercase transition-all
                                    ${activeCategory === cat
                                        ? 'bg-dark text-white shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]'
                                        : 'bg-white text-dark/60 hover:text-dark border-2 border-dark/10 hover:border-dark'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setSelectedProject(project)}
                                    className="bg-white border-4 border-dark group relative shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                                >
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-dark/5 rounded-lg">
                                                {project.icon}
                                            </div>
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.github}
                                                    className={`text-dark/40 transition-colors ${project.github !== "#" ? "hover:text-green-500" : "hover:text-red-500"}`}
                                                >
                                                    <Github size={20} />
                                                </a>
                                                <a
                                                    href={project.link}
                                                    className={`text-dark/40 transition-colors ${project.link !== "#" ? "hover:text-green-500" : "hover:text-red-500"}`}
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            </div>
                                        </div>

                                        <p className="text-xs font-black tracking-widest text-primary uppercase mb-2">
                                            {project.category}
                                        </p>
                                        <h3 className="text-2xl font-black text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-dark/70 font-medium mb-8 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-dark/5 text-[10px] font-black uppercase tracking-tighter text-dark/60 border border-dark/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white border-4 border-dark shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] w-full max-w-2xl relative z-10 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-dark/5 hover:bg-dark hover:text-white transition-all rounded-lg"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-dark/5 rounded-xl text-primary">
                                        {selectedProject.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-black tracking-widest text-primary uppercase mb-1">
                                            {selectedProject.category}
                                        </p>
                                        <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight">
                                            {selectedProject.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-dark/40 mb-3">About Project</h4>
                                        <p className="text-dark/80 font-medium text-lg leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-dark/40 mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="px-4 py-2 bg-dark/5 text-xs font-black uppercase tracking-widest text-dark border-2 border-dark/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8 flex flex-wrap gap-4 border-t-2 border-dark/5">
                                        {selectedProject.github !== "#" && (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 min-w-[160px] bg-dark text-white px-6 py-4 font-black text-sm tracking-widest uppercase text-center hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]"
                                            >
                                                <Github size={20} />
                                                View Source
                                            </a>
                                        )}
                                        {selectedProject.link !== "#" && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 min-w-[160px] bg-white text-dark border-4 border-dark px-6 py-4 font-black text-sm tracking-widest uppercase text-center hover:bg-neutral-50 transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]"
                                            >
                                                <ExternalLink size={20} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
