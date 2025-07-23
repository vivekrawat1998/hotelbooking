import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800 });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const storedUser = localStorage.getItem('userProfile');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing userProfile from localStorage:', error);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userProfile');
        setUser(null);
        navigate('/');
    };

    return (
        <div className={`fixed top-0 left-0 w-full bg-white z-999999 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`} data-aos="fade-down">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div>
                    <img className={`w-full h-20 font-bold transition-colors ${isScrolled ? 'text-black' : 'text-green'}`} src='/Website Design (92).png ' alt='' />
                </div>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex space-x-8 font-semibold text-lg transition-colors ${isScrolled ? 'text-black' : 'text-sec'}`}>
                    <Link to="/" className="hover:text-gray-500">Home</Link>
                    <Link to="/about" className="hover:text-gray-500">About</Link>
                    <Link to="/rooms" className="hover:text-gray-500">Room</Link>
                    <Link to="/contact" className="hover:text-gray-500">Contact</Link>
                    <Link to="/blog" className="hover:text-gray-500">Blog</Link>
                </ul>
                {/* Auth Button - Desktop */}
                <div className="hidden md:block">
                    {user ? (
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded transition-all">Logout</button>
                    ) : (
                        <Link to="/login">
                            <button className="bg-sec hover:bg-primary text-white px-8 py-2 rounded transition-all">Login</button>
                        </Link>
                    )}
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
                <div className={`md:hidden bg-primary text-white px-4 py-4 space-y-3 shadow-md`}>
                    <div className="flex flex-col space-y-2">
                        <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">Home</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">About</Link>
                        <Link to="/rooms" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">Room</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">Contact</Link>

                        {user ? (
                            <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" onClick={() => setMenuOpen(false)}>
                                <button className="mt-2 bg-white text-primary px-4 py-2 rounded hover:bg-gray-200 w-max">Login</button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
