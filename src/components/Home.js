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
import About from "./About";
import AnkurPublication from "./AnkurPublication";
import CommentSection from './CommentSection';
import ImageComparison from './ImageComparison'; 
import VideoSection from "./VideoSection";

function Home() {
  const banners = [
    {
      image: bg1,
      kannadaTitle: "ನಮ್ಮೂರು ಸರ್ಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ ನಂದಗೂರು",
      englishTitle: "",
      tagline: "Empowering rural minds through quality education since 1985"
    },
    {
      image: bg2,
      kannadaTitle: "ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಸಮರ್ಪಿತ",
      englishTitle: "",
      tagline: "ಶಿಕ್ಷಣವೇ ಈ ಜಗತ್ತನ್ನು ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಾಗುವ ಶಕ್ತಿಯುತ ಆಯುಧವಾಗಿದೆ."
    },
    {
      image: bg3,
      kannadaTitle: "ವೈವಿಧ್ಯತೆ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ",
      englishTitle: "",
      tagline: "ಕಲಿಕೆಯಿಂದ ಸೃಜನಶೀಲತೆ, ಸೃಜನಶೀಲತೆಯಿಂದ ಚಿಂತನೆ, ಚಿಂತನೆ ಯಿಂದ ಜ್ಞಾನ, ಜ್ಞಾನದಿಂದ ಮಹತ್ವತೆ ಬರುತ್ತದೆ."
    },
    {
      image: bg4,
      kannadaTitle: "ಸಮುದಾಯದೊಂದಿಗೆ ಸಂಪರ್ಕ",
      englishTitle: "",
      tagline: "ಕಲಿಯುವ ನಿಷ್ಠೆ ಬೆಳೆಯಿಸಿ, ಏಕೆಂದರೆ ಅದು ಜೀವಿತವಿಡೀ ನಿಮ್ಮ ಬೆಳವಣಿಗೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

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

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (Math.abs(distance) > 50) {
        if (distance > 0) {
          goToNext(); // swipe left
        } else {
          goToPrev(); // swipe right
        }
      }
      setTouchStartX(null);
      setTouchEndX(null);
    }
  }, [touchEndX]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Main Banner Section */}
      <section
        className="home-banner"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Carousel */}
        <div className="banner-bg-carousel">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner-bg-image ${index === currentIndex ? "active" : ""} ${
                isTransitioning && index === currentIndex ? "transitioning" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner.image})`
              }}
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

      {/* Thought Below Banner */}
      <div className="thought-container">
        <p>🎓 <strong>ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಕಲಿಯಿರಿ, ಜ್ಞಾನದೊಂದಿಗೆ ಬೆಳೆಯಿರಿ.</strong></p>
      </div>

      {/* Page Sections */}
      <div className="page-content">
        <About />
        <Teachers />
        <Gallery />
        <AnkurPublication />
        
        <ImageComparison />
        <VideoSection />
        <SuccessStories />
        <CommentSection />
      </div>
    </div>
  );
}

export default Home;
