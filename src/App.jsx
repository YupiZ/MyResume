// import React, { useState } from "react";
// import Button from "./components/button";
import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Home
                name="Your Name"
                subtitles={[
                    'Web Developer',
                    'Photographer',
                    'Lifelong Learner',
                    'Tech Enthusiast',
                ]}
            />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
