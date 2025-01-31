function Nav({ isOpen, isScrolled }) {
    return (
        <nav
            className={`${
                isOpen ? 'block' : 'hidden'
            } absolute left-0 top-16 w-full space-x-6 p-4 transition-all duration-300 md:static md:top-0 md:flex md:w-auto md:p-0 ${
                isScrolled ? 'bg-gray-400 md:bg-transparent' : 'bg-transparent'
            }`}
        >
            <ul className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                <li>
                    <a
                        href="#about"
                        className="text-white underline-offset-4 transition hover:text-blue-600 hover:underline"
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#resume"
                        className="text-white underline-offset-4 transition hover:text-blue-600 hover:underline"
                    >
                        My Resume
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-white underline-offset-4 transition hover:text-blue-600 hover:underline"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="text-white underline-offset-4 transition hover:text-blue-600 hover:underline"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
