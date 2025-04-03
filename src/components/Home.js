import React, { useState, useEffect } from "react";
import "./Home.css";
// Import your 4 background images
import bg1 from "../assets/photo.jpg";
import bg2 from "../assets/school.jpg";
import bg3 from "../assets/school2.jpg";
import bg4 from "../assets/photo.jpg";
// Import Achievements component
import Achievements from "./Achievements"; // Update path as per your structure
import SuccessStories from "./SuccessStories";
import Teachers from './Teachers';
import Gallery from './Gallery';
import Clubs from "./Clubs";
import About from "./About";
import AnkurPublication from "./AnkurPublication";

function Home() {
  const backgrounds = [bg1, bg2, bg3, bg4];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="home-container">
      {/* Background Image Carousel */}
      <div className="bg-carousel">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`bg-image ${index === currentBgIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        <div className="bg-overlay"></div>
      </div>

      {/* Main Banner Section */}
      <section className="home-banner">
        <div className="home-content">
          <h1>Welcome to Government School Nandgur</h1>
          <p>
            Empowering minds, shaping futures, and building tomorrow's leaders
            through quality education and holistic development.
          </p>
          <div className="home-buttons">
            <a href="#learn-more" className="btn learn-more">
              Learn More
            </a>
            <a href="#contact" className="btn contact-us">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
     
      <About/>
      <Teachers />
      <SuccessStories />
      <Gallery />
      <AnkurPublication/>
      <Achievements />
      <Clubs /> 
   
      </div>
  );
}

export default Home;