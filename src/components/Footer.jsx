import React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-gray-900 text-white py-6">
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				{/* Footer Logo / Name */}
				<div className="text-center md:text-left">
					<h2 className="text-lg font-bold">Your Name</h2>
					<p className="text-sm text-gray-400">Web Developer | Photographer | Lifelong Learner</p>
				</div>

				{/* Navigation Links */}
				<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
					<a href="#about" className="text-gray-400 hover:text-white transition">
						About
					</a>
					<a href="#skills" className="text-gray-400 hover:text-white transition">
						Skills
					</a>
					<a href="#projects" className="text-gray-400 hover:text-white transition">
						Projects
					</a>
					<a href="#contact" className="text-gray-400 hover:text-white transition">
						Contact
					</a>
				</div>

				{/* Copyright */}
				<p className="text-sm text-gray-400 text-center md:text-right">
					&copy; {new Date().getFullYear()} Your Name. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
