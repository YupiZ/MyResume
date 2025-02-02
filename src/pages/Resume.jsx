function Resume() {
    return (
        <section
            id="resume"
            className="bg-gradient-to-b from-gray-100 to-gray-300 py-16 text-gray-900"
        >
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-8 text-center text-3xl font-bold text-blue-600 md:text-4xl">
                    My Resume
                </h2>

                {/* Work Experience */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                        Work Experience
                    </h3>
                    <div className="space-y-6">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-700">
                                Restaurant Manager
                            </h4>
                            <p className="text-gray-500">
                                Company Name - Location | 20XX - 20XX
                            </p>
                            <p className="mt-2 text-gray-700">
                                Managed daily operations, optimized workflow,
                                and led a team to improve service efficiency.
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-700">
                                Wok Chef
                            </h4>
                            <p className="text-gray-500">
                                Company Name - Location | 20XX - 20XX
                            </p>
                            <p className="mt-2 text-gray-700">
                                Prepared high-quality dishes in a fast-paced
                                environment while maintaining consistency.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                        Education
                    </h3>
                    <div className="space-y-6">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-700">
                                Diploma in Global Business Management
                            </h4>
                            <p className="text-gray-500">
                                Institution Name | 20XX - 20XX
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h4 className="text-xl font-semibold text-gray-700">
                                Bachelor’s Degree in Pharmacy
                            </h4>
                            <p className="text-gray-500">
                                University Name | 20XX - 20XX
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-12">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                        Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <span className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md">
                            Web Development
                        </span>
                        <span className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md">
                            Photography
                        </span>
                        <span className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md">
                            Business Management
                        </span>
                        <span className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md">
                            Cooking
                        </span>
                        <span className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md">
                            Leadership
                        </span>
                    </div>
                </div>

                {/* Download Resume Button */}
                <div className="text-center">
                    <a
                        href="/resume.pdf"
                        download
                        className="rounded-lg bg-blue-600 px-6 py-3 text-lg text-white shadow-md transition hover:bg-blue-500"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
