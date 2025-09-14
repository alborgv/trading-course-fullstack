
import TickerTape from "components/TradingViewWidget/TickerTape";
import { useState } from "react";
import { Menu, X, LogIn, Home, ShoppingBag, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo3.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div>
            <nav className="shadow-sm w-full fixed top-0 z-50 md:relative">
                <div className="bg-primary text-white font-poppins font-semibold px-6 md:px-24 py-3 flex justify-between items-center relative z-20">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 inline" />
                    </Link>
                    <ul className="hidden md:flex justify-end flex-grow space-x-8">

                        <li>
                            <Link to="/" className="hover:text-primaryText">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-primaryText">Contact</Link>
                        </li>
                        <li>
                            <Link to="/course" className="hover:text-primaryText">Course</Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-primaryText hover:text-primaryTextHover">Login</Link>
                        </li>
                    </ul>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: -2 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="md:hidden bg-primary px-6 py-6 space-y-6 shadow-lg relative z-10"
                        >
                            <Link
                                to="/"
                                className="flex items-center gap-2 font-poppins text-lg text-white hover:text-gray-400"
                                onClick={() => setIsOpen(false)}
                            >
                                <Home size={20} /> Inicio
                            </Link>
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 font-poppins text-lg text-white hover:text-gray-400"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone size={20} /> Contacto
                            </Link>
                            <Link
                                to="/course"
                                className="flex items-center gap-2 font-poppins text-lg text-white hover:text-gray-400"
                                onClick={() => setIsOpen(false)}
                            >
                                <ShoppingBag size={20} /> Course
                            </Link>
                            <Link
                                to="/login"
                                className="flex items-center gap-2 font-poppins text-lg text-primaryText hover:text-gray-400"
                                onClick={() => setIsOpen(false)}
                            >
                                <LogIn size={20} /> Login
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <div className="bg-primary relative z-0 mt-12 md:mt-0">
                <TickerTape />
            </div>

        </div>
    );
}