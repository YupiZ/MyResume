function Contact() {
    return (
        <section
            id="contact"
            className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 text-gray-900"
        >
            <div className="mx-auto max-w-4xl px-6">
                <h2 className="mb-6 text-center text-3xl font-bold text-blue-600 md:text-4xl">
                    Get in Touch
                </h2>
                <p className="mb-8 text-center text-gray-700">
                    Feel free to reach out for collaborations or just to say
                    hello! I’d love to connect.
                </p>

                {/* Contact Form */}
                <form className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 text-white shadow-md transition hover:bg-blue-500"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Links */}
                <div className="mt-8 text-center">
                    <p className="text-gray-700">Or find me on:</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a
                            href="https://github.com/yourgithub"
                            target="_blank"
                            className="text-gray-700 transition hover:text-blue-600"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yourlinkedin"
                            target="_blank"
                            className="text-gray-700 transition hover:text-blue-600"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="text-gray-700 transition hover:text-blue-600"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
