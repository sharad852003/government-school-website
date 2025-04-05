import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Banner.css';
// Import your banner images
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';

const BannerCarousel = () => {
  const banners = [
    {
      image: banner1,
      title: "Welcome to the Education Hub & IT City - Bengaluru",
      subtitle: "Admissions Now Open (2025-26)",
      cta: "APPLY NOW"
    },
    {
      image: banner2,
      title: "State-of-the-Art Facilities",
      subtitle: "Modern Classrooms & Labs",
      cta: "TOUR OUR CAMPUS"
    },
    {
      image: banner3,
      title: "Expert Faculty Members",
      subtitle: "Learn from Industry Professionals",
      cta: "MEET OUR TEACHERS"
    },
    {
      image: banner4,
      title: "Holistic Development Programs",
      subtitle: "Sports, Arts & Technology",
      cta: "EXPLORE ACTIVITIES"
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
    <div className="banner-container">
      <div className="banner-carousel">
        {banners.map((banner, index) => (
          <div 
            key={index}
            className={`banner-slide ${index === currentIndex ? 'active' : ''} ${
              isTransitioning && index === currentIndex ? 'transitioning' : ''
            }`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), url(${banner.image}))` }}
          >
            <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <button className="cta-button">{banner.cta}</button>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          className="nav-arrow prev-arrow"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          className="nav-arrow next-arrow"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>
      
      {/* Search Container */}
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      
      {/* Dots Indicator */}
      <div className="dots-container">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;