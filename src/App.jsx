import React, { useState } from "react";
import Button from "./components/button";
import "./styles/App.css";

function App() {
	const [count, setCount] = useState(0);

	const clickHandler = () => {
		setCount(count + 1);
	};

	return (
		<section className="h-screen flex justify-center items-center bg-slate-200">
			<div className="flex flex-col gap-4 items-center">
				<h1 className="text-3xl text-center text-red-700">Welcome to Vite with TailwindCSS and React</h1>
				<Button onClick={clickHandler} children="Click Me" />
				<p>Count: {count}</p>
			</div>
		</section>
	);
}

export default App;
