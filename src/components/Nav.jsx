function Nav({ isOpen, isScrolled }) {
	return (
		<nav
			className={`${
				isOpen ? "block" : "hidden"
			} md:flex space-x-6 absolute md:static top-16 md:top-0 left-0 w-full md:w-auto p-4 md:p-0  transition-all duration-300 ${
				isScrolled ? "bg-gray-400 " : "bg-transparent"
			}`}
		>
			<ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ">
				<li>
					<a
						href="#about"
						className="text-white hover:text-blue-600 hover:underline underline-offset-4 transition"
					>
						About Me
					</a>
				</li>
				<li>
					<a
						href="#resume"
						className="text-white hover:text-blue-600 hover:underline underline-offset-4 transition"
					>
						My Resume
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="text-white hover:text-blue-600 hover:underline underline-offset-4 transition"
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="text-white hover:text-blue-600 hover:underline underline-offset-4 transition"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
