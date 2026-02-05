import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin, MessageSquare, HomeIcon } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import BackgroundIcons from '../components/common/BackgroundIcons';

const Contact = () => {
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
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-dark uppercase">
                            Let's <span className="text-primary">Talk.</span>
                        </h1>
                        <p className="mt-4 text-dark/60 font-medium max-w-xl text-lg">
                            Have a project in mind or just want to say hi? Feel free to reach out.
                            I'm always open to discussing new opportunities or data challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="bg-white border-4 border-dark p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-dark/40">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-dark/5 border-2 border-dark/10 p-4 font-bold text-dark focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-dark/40">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-dark/5 border-2 border-dark/10 p-4 font-bold text-dark focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-dark/40">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full bg-dark/5 border-2 border-dark/10 p-4 font-bold text-dark focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-dark/40">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell me more about your project..."
                                        className="w-full bg-dark/5 border-2 border-dark/10 p-4 font-bold text-dark focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-dark text-white p-5 font-black uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-3">
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info & Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="bg-white border-4 border-dark p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-dark text-white rounded-lg">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-dark uppercase tracking-tight">Direct Contact</h3>
                                </div>
                                <div className="space-y-6">
                                    <a href="mailto:akshaj@example.com" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-dark group-hover:bg-dark group-hover:text-white transition-all">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-dark/40">Email Me</p>
                                            <p className="font-bold text-dark group-hover:text-primary transition-colors">akshajvj@gmail.com</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-dark">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-dark/40">Location</p>
                                            <p className="font-bold text-dark">Pune, Maharashtra, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-dark">
                                            <HomeIcon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-dark/40">Home Town</p>
                                            <p className="font-bold text-dark">Thrissur, Kerala, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="bg-white border-4 border-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
                                    <Linkedin className="mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                                    <p className="font-black uppercase text-xs tracking-widest">LinkedIn</p>
                                </a>
                                <a href="#" className="bg-white border-4 border-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
                                    <Github className="mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                                    <p className="font-black uppercase text-xs tracking-widest">GitHub</p>
                                </a>
                                <a href="#" className="bg-white border-4 border-dark p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
                                    <Instagram className="mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                                    <p className="font-black uppercase text-xs tracking-widest">Instagram</p>
                                </a>
                                <div className="bg-dark text-white border-4 border-dark p-6 shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]">
                                    <div className="w-8 h-1 bg-primary mb-4"></div>
                                    <p className="font-black uppercase text-xs tracking-widest leading-relaxed">Let's build something epic.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
