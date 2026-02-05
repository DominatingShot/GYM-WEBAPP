import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#F2F2F2]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">



                    {/* Desktop Menu - Links on the Left */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={item.href}
                                    className="text-dark hover:text-primary transition-colors text-base font-bold tracking-tight relative group"
                                >
                                    {item.name}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                                        initial={false}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop Button - On the Right */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="border-2 border-dark text-dark px-8 py-2.5 text-base font-black hover:bg-dark hover:text-white transition-all uppercase tracking-tighter"
                        >
                            Let's talk
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dark"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden absolute w-full shadow-xl"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-dark text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="border border-dark text-dark px-6 py-3 text-lg font-semibold mt-4 text-center"
                            >
                                Let's talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
