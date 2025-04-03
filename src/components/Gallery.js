import React, { useState } from 'react';
import './Gallery.css';

// Import images for each section separately
// Events images
import event1 from '../assets/event2.jpg';
import event2 from '../assets/event3.jpg';
import event3 from '../assets/event4.jpg'; 
import event6 from '../assets/event6.jpg';
import event7 from '../assets/event7.jpg';
import event8 from '../assets/event8.jpg';
import event91 from '../assets/event91.jpg'; 
import event92 from '../assets/event92.jpg';
import event93 from '../assets/event93.jpg';
import event94 from '../assets/event94.jpg'; // example additional image

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [modalContent, setModalContent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sections = {
    events: {
      title: "School Events",
      items: [
        {
          id: 'e1',
          images: [event1, event2, event3], // Now using an array of images
          title: "ಚಿಣ್ಣರ ಸಾಹಿತ್ಯ ಮೇಳ",
          date: "15 Jan 2023",
          description: "ಮಕ್ಕಳು ಬರವಣಿಗೆ, ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಬೇಕು. ಪಠ್ಯವಲ್ಲದೇ ಉತ್ತಮ ಸಾಹಿತ್ಯ ಕೃತಿಗಳು, ಮಕ್ಕಳ ಕಥೆಗಳು ಮತ್ತು ಪತ್ರಿಕೆಗಳನ್ನು ಓದುವ ಹವ್ಯಾಸ ಬೆಳೆಸಿದರೆ, ಅವರ ಓದುವ ಮತ್ತು ಬರೆಯುವ ಕೌಶಲ್ಯ ವೃದ್ಧಿಯಾಗುತ್ತದೆ.ನಂದಗೂರಿನ ಸರಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆಯಲ್ಲಿ ಮಕ್ಕಳ ಸಾಹಿತ್ಯವನ್ನು ಉತ್ತೇಜಿಸುವ ವಿಶೇಷ ಪ್ರಯತ್ನ ನಡೆಯುತ್ತಿದೆ. ಚಿಣ್ಣರ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ ಎಂಬ ವಿಭಿನ್ನ ಕಾರ್ಯಕ್ರಮದ ಮೂಲಕ, ಮಕ್ಕಳಿಂದಲೇ ಮಕ್ಕಳ ಸಾಹಿತ್ಯ ರಚನೆಗೆ ಉತ್ತೇಜನೆ ನೀಡಲಾಗುತ್ತಿದೆ. ಜಿಪಿ ರಾಜರತ್ನಂ, ಕುವೆಂಪು, ನಾ. ಡಿಸೋಜ್ ಮುಂತಾದವರ ಸಾಹಿತ್ಯ ಪರಂಪರೆಯಿಂದ ಪ್ರೇರಿತವಾಗಿ, ಮಕ್ಕಳು ತಮ್ಮ ಬರವಣಿಗೆಯ ಶಕ್ತಿಯನ್ನು ಅಭಿವೃದ್ದಿ ಪಡಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ.",
          category: 'events'
        },
        {
          id: 'e2',
          images: [event6,event7,event8], // Single image still works as an array
          title: "ವೈಜ್ಞಾನಿಕ ಮನೋಭಾವ-ಅರಿವಿನ ಹರಿವು",
          date: "22 Mar 2023",
          description: "ಪ್ರತಿ ವರ್ಷ ಜೂನ್, ಜುಲೈ ತಿಂಗಳುಗಳೆಂದರೆ ನಮಗೆ ಎಲ್ಲಿಲ್ಲದ ಸಂಭ್ರಮ. ಮಾನ್ಸೂನ್ ಮಾರುತಗಳು ಭಾರತವನ್ನು ಪ್ರವೇಶಿಸುತ್ತಲೇ ಎಲ್ಲೆಡೆ ಅಸ್ವಚ್ಛತೆ, ಕ್ರಿಮಿ ಕೀಟಗಳ ಹಾವಳಿ, ಅಸ್ವಾಸ್ಥ್ಯ ಅನೇಕ ಪೀಡೆಗಳೂ ಹುಟ್ಟಿಕೊಳ್ಳುತ್ತವೆ. ಸ್ವಚ್ಛತೆ, ಮುಂಜಾಗೃತೆಗಳಿಂದ ಇವನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದಾದರೂ ಅಜ್ಞಾನ ಮತ್ತು ಅವಿವೇಕದಿಂದ ನೈರ್ಮಲ್ಯ ಸಾಧ್ಯವಾಗದೇ ಇಡೀ ಗ್ರಾಮ ಭಾರತವೇ ಅನಾರೋಗ್ಯಕ್ಕೀಡಾಗುತ್ತದೆ.ಹೀಗಿರುವಾಗ ಸಮುದಾಯದ ಜ್ಞಾನಕೇಂದ್ರವಾದ ಶಾಲೆಯು ಸಮುದಾಯದಲ್ಲಿ ಅರಿವು ಮೂಡಿಸುವ ಹೊಣೆ ಹೊರಬೇಕಾಗುತ್ತದೆ. ಎಲ್ಲೆಡೆಯೂ ಅರಿವು ಮೂಡಿಸುವ ಕಾರ್ಯಕ್ರಮಗಳು ಚುರುಕುಗೊಳ್ಳುತ್ತವೆ. ಅಂತೆಯೇ ನಂದಗೂರಿನ ಶಾಲೆಯಲ್ಲೂ ಇಂಥ ಯೋಜನೆ ಹಾಕಿಕೊಳ್ಳಲಾಗಿತ್ತು.",
          category: 'events'
        },
        {
            id: 'e3',
            images: [event91,event92,event93], // Single image still works as an array
            title: "ಪರಿಸರ ಸಂರಕ್ಷಣೆ.",
            date: "22 Mar 2023",
            description: "ಮಳೆಗಾಲದಲ್ಲಿ ಮೊದಲ ಮಳೆ ಸುರಿದು ಇಳೆ ತಂಪಾಗಿ ಹಸಿರೆಲೆ ಚಿಗುರೊಡೆಯುವ ದಿನಗಳಲ್ಲಿ ಭೂಮಿ ಹಸಿರು ಸೀರೆಯುಟ್ಟಂತೆ ಕಂಗೊಳಿಸುತ್ತದೆ. ಜೂನ್ ಐದು ವಿಶ್ವವೇ ಪ್ರಕೃತಿಗಾಗಿ ಮಿಡಿಯುವ ದಿನ. ಈ ಹಸಿರಿನಲ್ಲಿ ನಮ್ಮದು ಒಂದು ಪಾಲು ಇರಲಿ ಎಂದು ನಾವು ಬಯಸುತ್ತೇವೆ. ನಮ್ಮ ಶಾಲೆಯಲ್ಲಿ ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಹಲವಾರು ಪ್ರಯತ್ನಗಳನ್ನು ಮಾಡಿದ್ದೇವೆ. ಅವುಗಳಲ್ಲಿ ಬೀಜದುಂಡೆ ಮತ್ತು ಸಸಿಗಳ ತಯಾರಿಯೂ ಒಂದು. 2014-15ನೇ ಶೈಕ್ಷಣಿಕ ವರ್ಷ ಆರಂಭದಲ್ಲಿ ಮೊದಲ ಬಾರಿಗೆ ನಾವು ಈ ಪ್ರಯೋಗ ಆರಂಭಿಸಿದೆವು. ಹಸಿರೀಕರಣ, ಸ್ವಚ್ಛತೆ, ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಕುರಿತು ವಿಪರೀತ ಹುಚ್ಚಿದ್ದ ನಾನು ಆಗ ವಿಭಿನ್ನ ಪ್ರಯೋಗಗಳಿಗಿಳಿದಿದ್ದೆ. ಮಲೆನಾಡು ಸುತ್ತಲು ಹೋಗಿ ಅಲ್ಲಿನ ಬೀಜಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ತರುವುದು, ಬೇರೆ ಬೇರೆ ಭಾಗದ ಹಣ್ಣುಗಳು, ಬೇರೆ ಬೇರೆ ಭಾಗದ ಅಲಂಕಾರಿಕ ಮರಗಳ ಬೀಜಗಳನ್ನ ಸಂಗ್ರಹಿಸಿ ತಂದು ಅವುಗಳನ್ನು ನಮ್ಮಲ್ಲೂ ಚೆನ್ನಾಗಿ ಬೆಳಸಬೇಕೆಂಬ ಹುಚ್ಚು. ಎಲ್ಲಾ ಪ್ರಯೋಗಗಳನ್ನು ಕಾರ್ಯರೂಪಕ್ಕಿಳಿಸಿದೆ ಯಾವುದೂ ಫಲಿಸಲಿಲ್ಲ..!   ",
            category: 'events'
          }
      ]
    },
    // ... rest of your sections remain the same
    awareness: {
      title: "Anti-Panmasala Campaigns",
      items: [
        {
          id: 'a1',
          images: [event1], // Changed from image to images
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
          images: [event1], // Changed from image to images
          title: "Tree Plantation Drive",
          date: "22 Apr 2023",
          description: "Planted 500+ saplings in the community",
          category: 'nature'
        }
      ]
    },
    // ... other sections follow the same pattern
  };

  const allItems = Object.values(sections).flatMap(section => section.items);

  const openModal = (item) => {
    setModalContent(item);
    setCurrentImageIndex(0); // Reset to first image when opening modal
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % modalContent.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + modalContent.images.length) % modalContent.images.length
    );
  };

  return (
    <section className="gallery-section">
      <div className="section-header">
        <h2>Our School's Journey</h2>
        <p>Capturing milestones, initiatives, and community impact</p>
      </div>

      <div className="gallery-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
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
        {(activeTab === 'all' ? allItems : sections[activeTab].items).map(item => (
          <div 
            key={item.id} 
            className="gallery-card"
            onClick={() => openModal(item)}
          >
            <div className="card-image">
              <img src={item.images[0]} alt={item.title} /> {/* Show first image in card */}
              <div className="card-badge">{item.category}</div>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              {item.date && <p className="card-date">{item.date}</p>}
              <p className="card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={() => setModalContent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-image-container">
              <img 
                src={modalContent.images[currentImageIndex]} 
                alt={modalContent.title} 
                className="modal-image"
              />
              
              {/* Navigation arrows - only show if multiple images */}
              {modalContent.images.length > 1 && (
                <>
                  <button 
                    className="image-nav-btn prev-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    &lt;
                  </button>
                  <button 
                    className="image-nav-btn next-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    &gt;
                  </button>
                </>
              )}
              
              {/* Image counter */}
              {modalContent.images.length > 1 && (
                <div className="image-counter">
                  {currentImageIndex + 1} / {modalContent.images.length}
                </div>
              )}
            </div>
            
            <div className="modal-details">
              <h3>{modalContent.title}</h3>
              <div className="meta-info">
                {modalContent.date && (
                  <div className="meta-item">
                    <span className="material-icons">event</span>
                    <span>{modalContent.date}</span>
                  </div>
                )}
                {modalContent.source && (
                  <div className="meta-item">
                    <span className="material-icons">article</span>
                    <span>{modalContent.source}</span>
                  </div>
                )}
                {modalContent.year && (
                  <div className="meta-item">
                    <span className="material-icons">calendar_today</span>
                    <span>{modalContent.year}</span>
                  </div>
                )}
              </div>
              <p className="modal-description">{modalContent.description}</p>
              <button 
                className="modal-close"
                onClick={() => setModalContent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;