function AboutMe() {
    return (
        <section
            id="about"
            className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-12 text-gray-900 md:px-12"
        >
            <div className="max-w-4xl text-center">
                <h2 className="mb-6 text-4xl font-bold text-blue-600 md:text-5xl">
                    About Me
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    Hello! I'm{' '}
                    <span className="font-bold text-blue-500">[Your Name]</span>
                    , a passionate web developer, photographer, and lifelong
                    learner based in{' '}
                    <span className="text-blue-500">[Your Location]</span>. I
                    specialize in creating visually stunning, user-friendly
                    websites that bring ideas to life.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                    With a background in{' '}
                    <span className="font-bold text-blue-500">
                        global business management
                    </span>{' '}
                    and a love for technology, I've developed a unique
                    perspective on how design, functionality, and strategy come
                    together to create impactful digital solutions. In addition
                    to web development, my experience as a skilled photographer
                    allows me to blend creativity and technical expertise in all
                    my projects.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                    I'm always exploring new technologies and improving my
                    craft. When I'm not coding or capturing moments through my
                    camera, you can find me playing games, tinkering with tech,
                    or enjoying the beauty of nature.
                </p>
            </div>

            <a
                href="#contact"
                className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-lg text-white shadow-md transition hover:bg-blue-500"
            >
                Contact Me
            </a>
        </section>
    );
}

export default AboutMe;
