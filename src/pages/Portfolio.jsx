function Portfolio() {
    return (
        <section
            id="portfolio"
            className="bg-gradient-to-b from-gray-200 to-gray-100 py-16 text-gray-900"
        >
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-8 text-center text-3xl font-bold text-blue-600 md:text-4xl">
                    My Portfolio
                </h2>
                <p className="mb-12 text-center text-gray-700">
                    Here are some of my recent projects showcasing my skills in
                    web development and photography.
                </p>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {/* Project 1 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:shadow-xl">
                        <img
                            src="/project1.jpg"
                            alt="Project 1"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Project Title 1
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Short description of the project.
                            </p>
                            <div className="mt-4 flex space-x-3">
                                <a
                                    href="https://github.com/yourrepo"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://yourproject.com"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:shadow-xl">
                        <img
                            src="/project2.jpg"
                            alt="Project 2"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Project Title 2
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Short description of the project.
                            </p>
                            <div className="mt-4 flex space-x-3">
                                <a
                                    href="https://github.com/yourrepo"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://yourproject.com"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:shadow-xl">
                        <img
                            src="/project3.jpg"
                            alt="Project 3"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Project Title 3
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Short description of the project.
                            </p>
                            <div className="mt-4 flex space-x-3">
                                <a
                                    href="https://github.com/yourrepo"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://yourproject.com"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
