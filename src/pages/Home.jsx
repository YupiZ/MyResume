import { useState, useEffect } from "react";

function Home({ name, subtitles = [] }) {
	const [currentSubtitle, setCurrentSubtitle] = useState(subtitles[0] || "");
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
		<main
			className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 bg-cover bg-center text-gray-900 flex flex-col items-center px-6 md:px-12"
			style={{ backgroundImage: `url(${"/public/images/bg.jpg"})` }}
		>
			<div className="text-center mb-8 mt-64">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight">{name}</h1>
				<p className="text-md sm:text-lg md:text-xl mt-2 text-white italic">{currentSubtitle}</p>
			</div>

			<a
				href="#portfolio"
				className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base md:text-lg"
			>
				View Portfolio
			</a>
		</main>
	);
}

export default Home;
