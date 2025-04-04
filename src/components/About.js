import React from 'react';
import './About.css';
import schoolImage from '../assets/event3.jpg';
import villageMainImage from '../assets/event3.jpg';
import villageFieldsImage from '../assets/event3.jpg';
import villageFestivalImage from '../assets/event3.jpg';
import { FaChalkboardTeacher, FaBookOpen, FaGraduationCap, FaLeaf, FaSchool, FaDesktop } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Parallax Section */}
      <section className="hero-parallax">
        <div className="hero-content">
          <h1 className="hero-title">
           
           
          </h1>
         
        </div>
      </section>

      {/* Village Story Section */}
      <div className="village-story">
        <div className="section-container">
          <div className="text-content">
            <h2>
              <span className="kannada-highlight">ನಮ್ಮ ಹಳ್ಳಿಯ ಕಥೆ</span>
              <span className="english-text">Our Village Story</span>
            </h2>
            
            <div className="content-grid">
              <div className="text-column">
                <p className="kannada-text">
                  <strong>ನಮ್ಮೂರು</strong> – ಕಲಬುರಗಿ ಜಿಲ್ಲೆಯ ಆಳಂದ ತಾಲೂಕಿನ ಒಂದು ಪುಟ್ಟ ಹಳ್ಳಿ. ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಬೀದರ್ ಜಿಲ್ಲೆಯ ಗಡಿಗಳಿಗೆ ಸಮೀಪದಲ್ಲಿರುವ ನಮ್ಮ ಗ್ರಾಮವು ಸುಂದರವಾದ ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ ಮತ್ತು ಸಂಪ್ರದಾಯಬದ್ಧ ಸಂಸ್ಕೃತಿಯನ್ನು ಹೊಂದಿದೆ.
                </p>
                
                <h3 className="kannada-highlight">ನಮ್ಮೂರಿನ ಸ್ಥಳ ಮತ್ತು ಪ್ರಾಕೃತಿಕ ಸೌಂದರ್ಯ</h3>
                <p className="kannada-text">
                  ನಮ್ಮೂರು ಆಳಂದ ತಾಲೂಕಿನಿಂದ ಸುಮಾರು 25 ಕಿ.ಮೀ. ದೂರದಲ್ಲಿದೆ. ಮಳೆಗಾಲದಲ್ಲಿ ಹರಿಯುವ <strong>ಬೆನ್ನೇತೊರೆ ನದಿ</strong> ನಮ್ಮೂರಿನ ಪಕ್ಕದಲ್ಲೇ ಹರಿಯುತ್ತದೆ. ಈ ನದಿಯು ರೈತರ ಬೆಳೆಗಳಿಗೆ ಪ್ರಾಣವಾಗಿದೆ. ಹಸಿರು ಬಯಲುಗಳು, ಹೊಲಗಳು ಮತ್ತು ಸಮಶೀತೋಷ್ಣವಲಯದ ಹವಾಮಾನವು ನಮ್ಮೂರನ್ನು ವಿಶೇಷವಾಗಿ ಮಾಡಿದೆ.
                </p>
                
                <h3 className="kannada-highlight">ಜನಜೀವನ ಮತ್ತು ವ್ಯವಸಾಯ</h3>
                <p className="kannada-text">
                  ನಮ್ಮೂರಿನ ಜನಸಂಖ್ಯೆ ಸುಮಾರು 500. ಹೆಚ್ಚಿನ ಯುವಕರು ಉದ್ಯೋಗ ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಬೆಂಗಳೂರು, ಮುಂಬೈ, ಪುಣೆ, ಕಲಬುರಗಿ ಮುಂತಾದ ನಗರಗಳಿಗೆ ಸ್ಥಳಾಂತರಗೊಂಡಿದ್ದಾರೆ. <strong>ವ್ಯವಸಾಯವೇ</strong> ಇಲ್ಲಿನ ಮುಖ್ಯ ಉದ್ಯೋಗ. ತೊಗರಿ, ಸೋಯಾಬಿನ್, ಗೋದಿ, ಜೋಳ, ಕಡಲೆ, ಕಬ್ಬು ಮುಂತಾದ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯುತ್ತಾರೆ. ಬೆಳೆಗಳು ಮಾನ್ಸೂನ್ ಮಳೆಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿವೆ. ಇಂದಿಗೂ ಕೆಲವು ರೈತರು ಎತ್ತುಗಳನ್ನು ಬಳಸಿ ಬೇಸಾಯ ಮಾಡುತ್ತಾರೆ. ಪ್ರತಿ ಮನೆಯ ಮುಂದೆ ದನ-ಕರುಗಳನ್ನು ನೋಡಬಹುದು.
                </p>
              </div>
              
              <div className="text-column">
                <h3 className="kannada-highlight">ನಮ್ಮೂರಿನ ಐತಿಹಾಸಿಕ ಮಹತ್ವ</h3>
                <p className="kannada-text">
                  20ನೇ ಶತಮಾನದ ಮಧ್ಯಭಾಗದಲ್ಲಿ <strong>ಬಾಬಾರಾವ ಪಾಟೀಲ್</strong> ಅವರು ನಮ್ಮೂರಿನಲ್ಲಿ ನೀರಾವರಿ ಯೋಜನೆಗೆ ಕೆಲಸ ಮಾಡಿದ್ದರು. ಇದರಿಂದ ಪ್ರಭಾವಿತರಾದ ಮೈಸೂರು ಸರ್ಕಾರವು ಅವರನ್ನು ಗೌರವಿಸಿತು. ಇದು ನಮ್ಮೂರಿಗೆ ಒಂದು ಹೆಗ್ಗಳಿಕೆ.
                </p>
                
                <h3 className="kannada-highlight">ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು</h3>
                <p className="kannada-text">
                  ನಮ್ಮೂರಿನ <strong>ಪ್ರಾಥಮಿಕ ಶಾಲೆ</strong> (1ರಿಂದ 8ನೇ ತರಗತಿ) ಸುಮಾರು 50 ಮಕ್ಕಳಿಗೆ ಶಿಕ್ಷಣ ನೀಡುತ್ತದೆ. ಶಿಕ್ಷಕ <strong>ರವೀಂದ್ರ ಸರ್</strong> ಅವರು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಪ್ರೀತಿಯನ್ನು ಬೆಳೆಸಿದ್ದಾರೆ. ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು "ಅಂಕುರ" ಮತ್ತು "ಅಂಕುರ-2" ಕವನ ಸಂಕಲನಗಳನ್ನು ಪ್ರಕಟಿಸಿದ್ದಾರೆ. ಕೆಲವು ಕವನಗಳು ರೇಡಿಯೋ ಮತ್ತು ಚಂದನ ಟಿವಿಯಲ್ಲಿ ಪ್ರಸಾರವಾಗಿವೆ.
                </p>
                
                <h3 className="kannada-highlight">ನಮ್ಮೂರಿನ ವಿಶೇಷ ಹಬ್ಬ</h3>
                <p className="kannada-text">
                  ಏಪ್ರಿಲ್ ತಿಂಗಳಲ್ಲಿ <strong>"ಅಖಂಡ ಹರಿನಾಮ ಸಪ್ತಾಹ ಮತ್ತು ಜ್ಞಾನೇಶ್ವರಿ ಪಾರಾಯಣ ಸೋಹळಾ"</strong> 7 ದಿನಗಳ ಕಾಲ ಆಚರಿಸಲಾಗುತ್ತದೆ. ಪ್ರತಿದಿನ ಪ್ರವಚನ, ಕೀರ್ತನೆ ಮತ್ತು ಸಾಮೂಹಿಕ ಊಟದ ವ್ಯವಸ್ಥೆ ಇರುತ್ತದೆ. ಮರಾಠಿ ಸಂಸ್ಕೃತಿಯ ಪ್ರಭಾವ ಇರುವುದರಿಂದ ಹಬ್ಬಗಳು ಮತ್ತು ಆಚರಣೆಗಳು ಮಹಾರಾಷ್ಟ್ರದ ಶೈಲಿಯಲ್ಲಿರುತ್ತವೆ.
                </p>
                
                <p className="kannada-text closing-text">
                  ನಮ್ಮೂರು ಸಣ್ಣದಾಗಿದ್ದರೂ, <strong>ಸಾತ್ವಿಕ ಸಂಸ್ಕೃತಿ, ಸಹಕಾರದ ಮನೋಭಾವ</strong> ಮತ್ತು ಹಸಿರು ಬೆಳೆಗಳಿಂದ ಕೂಡಿದ ಗ್ರಾಮ. ಇದು ನಮ್ಮೆಲ್ಲರಿಗೂ ಹೆಮ್ಮೆಯ ಸ್ಥಳ.<br />
                  <strong>ನಮ್ಮೂರು – ನಮ್ಮ ಹೆಮ್ಮೆಯ ಹಳ್ಳಿ!</strong> 🌾🏡
                </p>
              </div>
            </div>
          </div>
          
          <div className="image-gallery">
            <div className="gallery-item main-image">
              <img src={villageMainImage} alt="ನಮ್ಮೂರಿನ ಮುಖ್ಯ ನೋಟ" loading="lazy" />
            </div>
            <div className="gallery-item secondary-image">
              <img src={villageFieldsImage} alt="ನಮ್ಮೂರಿನ ಹೊಲಗಳು" loading="lazy" />
            </div>
            <div className="gallery-item tertiary-image">
              <img src={villageFestivalImage} alt="ನಮ್ಮೂರಿನ ಹಬ್ಬ" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      
      {/* School Excellence Section */}
      <section className="school-excellence">
        <div className="section-container">
          <h2 className="section-title">
            <span className="kannada-highlight">ನಮ್ಮ ಶಾಲೆಯ ವಿಶೇಷತೆಗಳು</span>
            <span className="english-text">Our School's Excellence</span>
          </h2>
          
          <div className="excellence-cards">
            <div className="excellence-card">
              <div className="card-icon">
                <FaChalkboardTeacher />
              </div>
              <h3 className="kannada-text">ಅನುಭವಿ ಬೋಧಕ ವರ್ಗ</h3>
              <p className="kannada-text">
                • 4 ನಿಷ್ಠಾವಂತ ಶಿಕ್ಷಕರು (20+ ವರ್ಷಗಳ ಸರಾಸರಿ ಅನುಭವ)<br />
                • ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ವೈಯಕ್ತಿಕ ಲಕ್ಷ್ಯ<br />
                • ಆಧುನಿಕ ಬೋಧನಾ ವಿಧಾನಗಳು<br />
                • ನಿಯಮಿತ ಶಿಕ್ಷಕರ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು
              </p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaBookOpen />
              </div>
              <h3 className="kannada-text">ಸೃಜನಾತ್ಮಕ ಶಿಕ್ಷಣ</h3>
              <p className="kannada-text">
                • ವಿದ್ಯಾರ್ಥಿ ಕವನ ಸಂಕಲನಗಳು ("ಅಂಕುರ" ಸರಣಿ)<br />• ನಿಯತಕಾಲಿಕ ಸಾಹಿತ್ಯ ಸಂಘಟನೆ<br/>• ವಾರ್ಷಿಕ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು<br/>
                • ರೇಡಿಯೋ/ಟಿವಿ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವಿಕೆ
              </p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3 className="kannada-text">ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ</h3>
              <p className="kannada-text">
                • ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳ ಸಮತೋಲನ<br />
                • ಕ್ರೀಡೆ ಮತ್ತು ಯೋಗಾ ತರಗತಿಗಳು<br />
                • ನೈತಿಕ ಮೌಲ್ಯಗಳ ಬೋಧನೆ<br />
                • ವಿದ್ಯಾರ್ಥಿ ನಾಯಕತ್ವ ತರಬೇತಿ
              </p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaLeaf />
              </div>
              <h3 className="kannada-text">ಸಮುದಾಯ ಮತ್ತು ಪರಿಸರ</h3>
              <p className="kannada-text">
                • ವಾರ್ಷಿಕ ವೃಕ್ಷಾರೋಪಣ ಉತ್ಸವ<br />
                • ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಶಾಲೆ ಯೋಜನೆ<br />
                • ಸ್ಥಳೀಯ ರೈತರೊಂದಿಗೆ ಸಹಯೋಗ<br />
                • ನೀರು ಸಂರಕ್ಷಣೆ ಕಾರ್ಯಕ್ರಮಗಳು
              </p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaSchool />
              </div>
              <h3 className="kannada-text">ಮೂಲಸೌಕರ್ಯ</h3>
              <p className="kannada-text">
                • ಆಧುನಿಕ ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ<br />
                • ಗ್ರಂಥಾಲಯ ಸೌಲಭ್ಯ<br />
                • ಶುಚಿತ್ವ ಮತ್ತು ನೈರ್ಮಲ್ಯ ವ್ಯವಸ್ಥೆ<br />
                • ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರಿನ ವ್ಯವಸ್ಥೆ
              </p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaDesktop />
              </div>
              <h3 className="kannada-text">ಡಿಜಿಟಲ್ ಶಿಕ್ಷಣ</h3>
              <p className="kannada-text">
                • ಸ್ಮಾರ್ಟ್ ಕ್ಲಾಸ್ ರೂಮ್ ಸೌಲಭ್ಯ<br />
                • ಕಂಪ್ಯೂಟರ್ ಸಾಕ್ಷರತೆ ತರಗತಿಗಳು<br />
                • ಡಿಜಿಟಲ್ ಗ್ರಂಥಾಲಯ ಪ್ರವೇಶ<br />
                • ಆನ್ಲೈನ್ ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳು
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School History Section */}
      <section className="school-history">
        <div className="history-container">
          <div className="history-image">
            <img src={schoolImage} alt="School building" loading="lazy" />
          </div>
          <div className="history-content">
            <h2>
              <span className="kannada-highlight">ನಮ್ಮ ಶಾಲೆಯ ಇತಿಹಾಸ</span>
              <span className="english-text">Our School Legacy</span>
            </h2>
            <p className="kannada-text">
  1985ರಲ್ಲಿ ಸ್ಥಾಪನೆಯಾದ ನಮ್ಮ ಶಾಲೆಯು ಸುಮಾರು ನಾಲ್ಕು ದಶಕಗಳಿಂದ ಸಮುದಾಯಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ. 
  ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣದ ಈ ಕೇಂದ್ರವು ಪ್ರತಿವರ್ಷ 1ನೇಯಿಂದ 8ನೇ ತರಗತಿಯವರೆಗೆ 50ಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಿಕ್ಷಣ ನೀಡುತ್ತಿದೆ.
  
  <br /><br />
  ಮುಖ್ಯೋಪಾಧ್ಯಾಯ ಶ್ರೀ ಪಂಪಾಪತಿ ಗಡ್ಗೆರೆ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ನಾವು ಅನನ್ಯ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ರೂಪಿಸಿದ್ದೇವೆ:
  <ul className="kannada-list">
    <li>"ವಿದ್ಯಾರ್ಥಿ ನೀತಿ ಮತ್ತು ಶಿಸ್ತು ಸಮಿತಿ" - ವಿದ್ಯಾರ್ಥಿ ನಾಯಕತ್ವ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮ</li>
    <li>ಶಿಕ್ಷಕ ರವೀಂದ್ರ ರುದ್ರವಾಡಿ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ "ಅಂಕುರ" ಕವನ ಸಂಕಲನ ಯೋಜನೆ</li>
    <li>ವಾರ್ಷಿಕ ಪರಿಸರ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವೃಕ್ಷಾರೋಪಣ ಉತ್ಸವ</li>
    <li>ಸ್ಥಳೀಯ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಾಹಿತ್ಯ ಪ್ರಚಾರ ಕಾರ್ಯಕ್ರಮಗಳು</li>
  </ul>

  <br />
  ರವೀಂದ್ರ ಸರ್ ಅವರು ನಮ್ಮ ಶಾಲೆಯ ಪ್ರಮುಖ ಕನ್ನಡ ಶಿಕ್ಷಕರಾಗಿದ್ದು:
  <ul className="kannada-list">
    <li>ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಪ್ರೀತಿಯನ್ನು ಬೆಳೆಸಿದ್ದಾರೆ</li>
    <li>"ಅಂಕುರ" ಮತ್ತು "ಅಂಕುರ-2" ಕವನ ಸಂಕಲನಗಳನ್ನು ಪ್ರಕಟಿಸಲು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ್ದಾರೆ</li>
    <li>ವಿದ್ಯಾರ್ಥಿ ಕವಿತೆಗಳನ್ನು ರೇಡಿಯೋ ಮತ್ತು ಚಂದನ ಟಿವಿಯಲ್ಲಿ ಪ್ರಸಾರ ಮಾಡಿಸಿದ್ದಾರೆ</li>
    <li>ಶಾಲೆಯ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಸಂಘಟಿಸುತ್ತಾರೆ</li>
  </ul>
</p>
            <div className="history-stats">
              <div className="stat-item">
                <span className="stat-number">38+</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students passed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Dedicated Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            ನಮ್ಮ ಶಾಲೆಯು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಕನ್ನಡ ಸಾಹಿತ್ಯ, ಶಿಸ್ತು, ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪರಿಸರದ ಬಗ್ಗೆ ಪ್ರೀತಿ ಬೆಳೆಸುವುದರೊಂದಿಗೆ 
            ಉತ್ತಮ ಶಿಕ್ಷಣವನ್ನು ನೀಡುತ್ತದೆ. "ಅಂಕುರ" ಕವನ ಸಂಕಲನ ನಮ್ಮ ಹೆಮ್ಮೆ.
          </p>
          <p className="testimonial-author">- ರವೀಂದ್ರ ರುದ್ರವಾಡಿ, ವಿಜ್ಞಾನ ಶಿಕ್ಷಕ</p>
        </div>
      </section>
    </div>
  );
};

export default About;