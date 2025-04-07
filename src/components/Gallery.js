import React, { useState } from 'react';
import './Gallery.css';

import event1 from '../assets/event2.jpg';
import event2 from '../assets/event3.jpg';
import event3 from '../assets/event4.jpg';
import event6 from '../assets/event6.jpg';
import event7 from '../assets/event7.jpg';
import event8 from '../assets/event8.jpg';
import event91 from '../assets/event91.jpg';
import event92 from '../assets/event92.jpg';
import event93 from '../assets/event93.jpg';
import event94 from '../assets/event94.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [modalContent, setModalContent] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [cardImageIndexes, setCardImageIndexes] = useState({});
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const sections = {
    events: {
      title: "School Events",
      items: [
        {
          id: 'e1',
          images: [event1, event2, event3, event94],
          title: "ಚಿಣ್ಣರ ಸಾಹಿತ್ಯ ಮೇಳ",
          date: "15 Jan 2023",
          description: "ಮಕ್ಕಳು ಬರವಣಿಗೆ, ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಬೇಕು...",
          category: 'events'
        },
        {
          id: 'e2',
          images: [event6, event7, event8, event1],
          title: "ವೈಜ್ಞಾನಿಕ ಮನೋಭಾವ-ಅರಿವಿನ ಹರಿವು",
          date: "22 Mar 2023",
          description: "ಪ್ರತಿ ವರ್ಷ ಜೂನ್, ಜುಲೈ ತಿಂಗಳುಗಳೆಂದರೆ ನಮಗೆ ಎಲ್ಲಿಲ್ಲದ ಸಂಭ್ರಮ...",
          category: 'events'
        },
        {
          id: 'e3',
          images: [event91, event92, event93, event94],
          title: "ಪರಿಸರ ಸಂರಕ್ಷಣೆ.",
          date: "22 Mar 2023",
          description: "ಮಳೆಗಾಲದಲ್ಲಿ ಮೊದಲ ಮಳೆ ಸುರಿದು ಇಳೆ ತಂಪಾಗಿ ಹಸಿರೆಲೆ ಚಿಗುರೊಡೆಯುವ ದಿನಗಳಲ್ಲಿ...",
          category: 'events'
        }
      ]
    },
    awareness: {
      title: "Anti-Panmasala Campaigns",
      items: [
        {
          id: 'a1',
          images: [event1],
          title: "Health Awareness Rally",
          date: "5 Jun 2023",
          description: "Students campaigning against tobacco products",
          category: 'awareness'
        }
      ]
    },
    nature: {
      title: "Nature Protection",
      items: [
        {
          id: 'n1',
          images: [event1],
          title: "Tree Plantation Drive",
          date: "22 Apr 2023",
          description: "Planted 500+ saplings in the community",
          category: 'nature'
        }
      ]
    }
  };

  const allItems = Object.values(sections).flatMap(section => section.items);

  const openModal = (item) => {
    setModalContent(item);
    setModalImageIndex(0);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % modalContent.images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + modalContent.images.length) % modalContent.images.length);
  };

  const handleCardImageChange = (id, direction) => {
    setCardImageIndexes(prev => {
      const current = prev[id] || 0;
      const max = sections[activeTab === 'all' ? Object.keys(sections).find(key => sections[key].items.some(i => i.id === id)) : activeTab].items.find(i => i.id === id).images.length;
      const newIndex = direction === 'next' ? (current + 1) % max : (current - 1 + max) % max;
      return { ...prev, [id]: newIndex };
    });
  };

  // Touch handlers for swipe detection
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEndCard = (id) => {
    if (touchStartX !== null && touchEndX !== null) {
      const delta = touchStartX - touchEndX;
      if (Math.abs(delta) > 50) {
        handleCardImageChange(id, delta > 0 ? 'next' : 'prev');
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleTouchEndModal = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const delta = touchStartX - touchEndX;
      if (Math.abs(delta) > 50) {
        delta > 0 ? nextModalImage() : prevModalImage();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="gallery-section">
      <div className="section-header">
        <h2>Our School's Journey</h2>
        <p>Capturing milestones, initiatives, and community impact</p>
      </div>

      <div className="gallery-tabs">
        <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All</button>
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="gallery-container">
        {(activeTab === 'all' ? allItems : sections[activeTab].items).map(item => {
          const imageIndex = cardImageIndexes[item.id] || 0;
          return (
            <div key={item.id} className="gallery-card" onClick={() => openModal(item)}>
              <div className="card-image-slider">
                <button className="slider-arrow left" onClick={(e) => { e.stopPropagation(); handleCardImageChange(item.id, 'prev'); }}>&lt;</button>
                <img
                  src={item.images[imageIndex]}
                  alt={item.title}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEndCard(item.id)}
                />
                <button className="slider-arrow right" onClick={(e) => { e.stopPropagation(); handleCardImageChange(item.id, 'next'); }}>&gt;</button>
                <div className="card-badge">{item.category}</div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                {item.date && <p className="card-date">{item.date}</p>}
                <p className="card-desc">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={() => setModalContent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-image-container">
              <img
                src={modalContent.images[modalImageIndex]}
                alt={modalContent.title}
                className="modal-image"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEndModal}
              />
              {modalContent.images.length > 1 && (
                <>
                  <button className="image-nav-btn prev-btn" onClick={(e) => { e.stopPropagation(); prevModalImage(); }}>&lt;</button>
                  <button className="image-nav-btn next-btn" onClick={(e) => { e.stopPropagation(); nextModalImage(); }}>&gt;</button>
                  <div className="image-counter">{modalImageIndex + 1} / {modalContent.images.length}</div>
                </>
              )}
            </div>
            <div className="modal-details">
              <h3>{modalContent.title}</h3>
              <p className="modal-description">{modalContent.description}</p>
              <button className="modal-close" onClick={() => setModalContent(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
