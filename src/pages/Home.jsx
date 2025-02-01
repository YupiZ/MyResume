import { useState, useEffect } from 'react';

function Home({ name, subtitles = [] }) {
    const [currentSubtitle, setCurrentSubtitle] = useState(subtitles[0] || '');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (subtitles.length > 1) {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % subtitles.length); // Cycle through subtitles
            }, 3000); // Change every 3 seconds

            return () => clearInterval(interval); // Clean up interval on component unmount
        }
    }, [subtitles]);

    useEffect(() => {
        setCurrentSubtitle(subtitles[index]);
    }, [index, subtitles]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-100 via-white to-gray-200 bg-cover bg-center px-6 text-gray-900 md:px-12">
            <img
                src={import.meta.env.BASE_URL + "/public/images/bg.jpg"}
                alt=""
                className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
            />
            <div className="z-1 mb-8 mt-64 text-center z-[3]">
                <h1 className="text-3xl font-bold leading-tight text-blue-600 sm:text-4xl md:text-5xl">
                    {name}
                </h1>
                <p className="text-md mt-2 mb-5 italic text-white sm:text-lg md:text-xl">
                    {currentSubtitle}
                </p>
                <a
                    href="#portfolio"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white shadow-md transition hover:bg-blue-500 sm:text-base md:text-lg"
                >
                    View Portfolio
                </a>
            </div>
        </main>
    );
}

export default Home;
