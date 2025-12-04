import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className="w-full fixed top-0 left-0 z-50  ">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center bg-gray-700 mt-5 rounded-full">
                {/*Logo / Brand */}
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    <img src="public/logo.png" alt="Ashad Ahmad" className="w-10 h-10 object-cover rounded-full shadow-xl" />
                </div>
                {/**Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
                    {navLinks.map((link) => (   
                        <li key={link}>
                            <a href={`#${link.toLocaleLowerCase()}`} className="text-teal-300 hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.8)] transition-colors duration-300 font-bold">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
                {/**right side Theme Button */}
                <div className="hidden md:flex items-center space-x-4">


                    {/* <ThemeToggle /> */}
                    <a href="#contact" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition">
                        Contact Me
                    </a>
                </div>
                {/**Mobile Menu Toggle */}
                <button className="md:hidden text-gray-800 dark:text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {/**Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 px-6 pb-4 pt-2 space-y-3">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLocaleLowerCase()}`} className="block text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(false)}>
                            {link}
                        </a>
                    ))}
                    <div className="pt-2 flex items-center justify-between">


                        {/* <ThemeToggle /> */}

                        
                        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                            Contact Me
                        </a>
                    </div>  
                </div>
            )}
        </nav>
    );
};

export default Navbar;