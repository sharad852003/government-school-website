import React, { useState, useRef } from 'react';
import './ImageComparison.css';
import { ChevronLeft, ChevronRight, Download, Expand } from 'lucide-react';

const ImageSlider = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 5;

  // Touch event tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setStartIndex(Math.floor(nextIndex / imagesPerPage) * imagesPerPage);
  };

  const goToPrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setStartIndex(Math.floor(prevIndex / imagesPerPage) * imagesPerPage);
  };

  const handleView = () => {
    const image = images[currentIndex];
    const newWindow = window.open();
    newWindow.document.write(`<img src="${image}" style="width:100%">`);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[currentIndex];
    link.download = `image-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        goToNext(); // swipe left
      } else {
        goToPrev(); // swipe right
      }
    }
  };

  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>

      <div className="carousel-wrapper">
        <button className="nav-button prev" onClick={goToPrev}>
          <ChevronLeft size={28} />
        </button>

        <div
          className="carousel-slide"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
            loading="lazy"
          />
        </div>

        <button className="nav-button next" onClick={goToNext}>
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-strip">
        {images.slice(startIndex, startIndex + imagesPerPage).map((img, idx) => {
          const actualIndex = startIndex + idx;
          return (
            <img
              key={actualIndex}
              src={img}
              alt={`Thumb ${actualIndex + 1}`}
              className={`thumbnail ${actualIndex === currentIndex ? 'active-thumb' : ''}`}
              onClick={() => handleThumbnailClick(actualIndex)}
              loading="lazy"
            />
          );
        })}
      </div>

      <div className="action-buttons">
        <button onClick={handleView}>
          <Expand size={16} /> View
        </button>
        <button onClick={handleDownload}>
          <Download size={16} /> Download
        </button>
      </div>
    </div>
  );
};

const ImageComparison = () => {
  const achievementImages = [
    require('../assets/photo2.jpg'),
    require('../assets/school.jpg'),
    require('../assets/school2.jpg'),
    require('../assets/event94.jpg'),
    require('../assets/photo2.jpg'),
    require('../assets/ankur1.jpg'),
    require('../assets/event6.jpg'),
    require('../assets/event4.jpg'),
    require('../assets/photo2.jpg'),
    require('../assets/event8.jpg'),
    require('../assets/newspaper3.jpg'),
  ];

  const schoolViewImages = [
    require('../assets/school2.jpg'),
    require('../assets/event94.jpg'),
    require('../assets/photo2.jpg'),
    require('../assets/school.jpg'),
    require('../assets/school2.jpg'),
    require('../assets/event94.jpg'),
    require('../assets/photo2.jpg'),
    require('../assets/school.jpg'),
    require('../assets/school2.jpg'),
    require('../assets/event94.jpg'),
    require('../assets/newspaper3.jpg'),
  ];

  return (
    <div className="modern-comparison-container">
      <ImageSlider title="🏆 ಶಾಲೆಯ ಸಾಧನೆಗಳು" images={achievementImages} />
      <ImageSlider title="🏫 ಶಾಲೆಯ ನೋಟಗಳು" images={schoolViewImages} />
    </div>
  );
};

export default ImageComparison;
