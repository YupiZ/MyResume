import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for the menu toggle
import Nav from './Nav';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full py-4 transition-all duration-300 ${
                isScrolled ? 'bg-gray-400 shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
                {/* Logo / Name */}
                <a href="#" className="text-2xl font-bold text-blue-600">
                    Your Name
                </a>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    className="block text-white hover:text-blue-600 focus:outline-none md:hidden"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <Nav isOpen={isOpen} isScrolled={isScrolled} />
            </div>
        </header>
    );
};

export default Header;
