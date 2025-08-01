import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-[url('https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center bg-no-repeat text-white">
            <div className="bg-black/70">
                <div className="max-w-7xl mx-auto px-6 py-26 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* Logo and Description */}
                    <div>
                        <img src="/Website Design (92).png" alt="Logo" className="w-full h-24 mb-10" />
                        <p className="text-sm">
                            We provide top-notch hospitality and booking experiences. Your comfort is our priority.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-primary">Home</a></li>
                            <li><a href="/aboutus" className="hover:text-primary">About Us</a></li>
                            <li><a href="/rooms" className="hover:text-primary">Rooms</a></li>
                            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="text-sm space-y-2">
                            <li>📍 D-29 New shanti nagar mal godam road mathura near mathura junction</li>
                            <li>📞 +91 6397004897</li>
                            <li>📧 bhagwatbhawan8@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="bg-black/80 text-center py-4 text-sm border-t border-gray-700">
                    &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
