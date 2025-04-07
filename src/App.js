import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import SuccessStories from "./components/SuccessStories";
import Teachers from "./components/Teachers";
import Clubs from "./components/Clubs";
import AnkurPublication from "./components/AnkurPublication";
import CommentSection from "./components/CommentSection";
import ImageComparison from "./components/ImageComparison";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Router>
        {/* Dark mode toggle header button */}
        <div className="topbar-toggle">
          <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞 Light Mode" : "🌘 Dark Mode"}
          </button>
        </div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/ankur" element={<AnkurPublication />} />
          <Route path="/feedback" element={<CommentSection />} />
          <Route path="/gallery" element={<ImageComparison />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
