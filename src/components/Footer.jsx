import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 py-6 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
                {/* Footer Logo / Name */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold">Your Name</h2>
                    <p className="text-sm text-gray-400">
                        Web Developer | Photographer | Lifelong Learner
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                    <a
                        href="#about"
                        className="text-gray-400 transition hover:text-white"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="text-gray-400 transition hover:text-white"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-400 transition hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-400 transition hover:text-white"
                    >
                        Contact
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-center text-sm text-gray-400 md:text-right">
                    &copy; {new Date().getFullYear()} Your Name. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
