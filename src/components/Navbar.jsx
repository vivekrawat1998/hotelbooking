import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800 });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
            data-aos="fade-down"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div>
                    <h1 className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-black' : 'text-green'}`}>
                        MyApp
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex space-x-8 font-semibold text-lg transition-colors ${isScrolled ? 'text-black' : 'text-sec'}`}>
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">About</li>
                    <li className="hover:text-blue-500 cursor-pointer">Room</li>
                    <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                </ul>

                {/* Login Button */}
                <div className="hidden md:block">
                    <button className="bg-primary hover:bg-sec text-sece px-16 py-2 rounded">Login</button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} className={isScrolled ? 'text-black' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-black' : 'text-green-900'} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`md:hidden bg-primary text-black px-4 py-4 space-y-3 shadow-md`}>
                    <div className="flex flex-col space-y-2">
                        <span className="hover:text-blue-500 cursor-pointer">Home</span>
                        <span className="hover:text-blue-500 cursor-pointer">About</span>
                        <span className="hover:text-blue-500 cursor-pointer">Room</span>
                        <span className="hover:text-blue-500 cursor-pointer">Contact</span>
                        <button className="mt-2 bg-primary text-white px-4 py-2 rounded w-max">Login</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
