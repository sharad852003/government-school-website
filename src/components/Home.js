import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./Home.css";
import bg1 from "../assets/school.jpg";
import bg2 from "../assets/photo.jpg";
import bg3 from "../assets/school2.jpg";
import bg4 from "../assets/school2.jpg";
import Achievements from "./Achievements";
import SuccessStories from "./SuccessStories";
import Teachers from './Teachers';
import Gallery from './Gallery';
import Clubs from "./Clubs";
import About from "./About";
import AnkurPublication from "./AnkurPublication";
import CommentSection from './CommentSection';

function Home() {
  const banners = [
    {
      image: bg1,
      kannadaTitle: "ನಮ್ಮೂರು ಸರ್ಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ ನಂದಗೂರು",
      englishTitle: "Government Higher Primary School Nandgur",
      tagline: "Empowering rural minds through quality education since 1985"
    },
    {
      image: bg2,
      kannadaTitle: "ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಸಮರ್ಪಿತ",
      englishTitle: "Dedicated to Quality Education",
      tagline: "Our mission is to nurture young minds for a better tomorrow"
    },
    {
      image: bg3,
      kannadaTitle: "ವೈವಿಧ್ಯತೆ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ",
      englishTitle: "Diversity and Holistic Development",
      tagline: "Fostering academic excellence with cultural values"
    },
    {
      image: bg4,
      kannadaTitle: "ಸಮುದಾಯದೊಂದಿಗೆ ಸಂಪರ್ಕ",
      englishTitle: "Connected with Community",
      tagline: "Building bridges between education and society"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? banners.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Main Banner Section */}
      <section className="home-banner">
        {/* Background Carousel */}
        <div className="banner-bg-carousel">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner-bg-image ${index === currentIndex ? "active" : ""} ${
                isTransitioning && index === currentIndex ? "transitioning" : ""
              }`}
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner.image})` }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow prev-arrow" onClick={goToPrev} aria-label="Previous slide">
          <ChevronLeft size={32} />
        </button>
        <button className="nav-arrow next-arrow" onClick={goToNext} aria-label="Next slide">
          <ChevronRight size={32} />
        </button>

        {/* Banner Content */}
        <div className="home-content">
          <h1>
            <span className="kannada-title">{banners[currentIndex].kannadaTitle}</span>
            <span className="english-subtitle">{banners[currentIndex].englishTitle}</span>
          </h1>
          <p className="tagline">{banners[currentIndex].tagline}</p>
          <div className="home-buttons">
           
           
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="dots-container">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

       
      </section>

      {/* Page Sections */}
      <div className="page-content">
        <About/>
        <Teachers />
        <Gallery />
        <AnkurPublication/>
        <Achievements />
        <Clubs /> 
        <SuccessStories />
        <CommentSection />
      </div>
    </div>
  );
}

export default Home;