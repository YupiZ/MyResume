import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for the menu toggle
import Nav from "./Nav";

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

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`w-full py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-gray-400 shadow-md " : "bg-transparent"
			}`}
		>
			<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
				{/* Logo / Name */}
				<a className="text-2xl font-bold text-blue-600">Your Name</a>

				{/* Hamburger Menu Button for Mobile */}
				<button
					className="block md:hidden text-white hover:text-blue-600 focus:outline-none"
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
