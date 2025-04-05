import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import SuccessStories from "./components/SuccessStories";
import Teachers from "./components/Teachers";
import Clubs from "./components/Clubs";
import AnkurPublication from "./components/AnkurPublication";
import CommentSection from "./components/CommentSection"; // Import the new CommentSection component
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Individual Section Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/ankur" element={<AnkurPublication />} />
        <Route path="/feedback" element={<CommentSection />} /> {/* New comment section route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;