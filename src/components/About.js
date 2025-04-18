import React from 'react';
import './About.css';
import { FaChalkboardTeacher, FaBookOpen, FaGraduationCap, FaLeaf, FaSchool, FaDesktop } from 'react-icons/fa';
import village1 from '../assets/photo.jpg';
import village2 from '../assets/photo.jpg';
import village3 from '../assets/photo.jpg';
import village4 from '../assets/photo.jpg';
import schoolImage from '../assets/school.jpg'; // New school image


const About = () => {
  return (
    <div className="about-page">
      
      {/* School Introduction Section */}
      <section className="school-intro">
        <div className="section-container intro-container">
          <div className="intro-image">
            <img src={schoolImage} alt="Our School" loading="lazy" />
          </div>
          
          <div className="intro-text">
            <h2>
              <span className="kannada-highlight">ನಮ್ಮ ಶಾಲೆಯ ಪರಿಚಯ</span>
            
            </h2>
            <p>
              ನಮ್ಮ ಶಾಲೆ ಒಂದು ಆಧುನಿಕ ಶಿಕ್ಷಣದ ಪ್ರತೀಕವಾಗಿದೆ. ಇಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ಕೇವಲ ಪುಸ್ತಕದ ಪಾಠವಷ್ಟೇ ಅಲ್ಲದೆ ನೈತಿಕ ಮೌಲ್ಯಗಳು, ಸ್ವಚ್ಛತೆ, ಕಾವ್ಯ ಪ್ರೀತಿ, ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಂಡು ಪರಿಪೂರ್ಣ ವ್ಯಕ್ತಿತ್ವವನ್ನು ರೂಪಿಸುತ್ತಿದ್ದಾರೆ.
            </p>
            <p>
              ಶಿಕ್ಷಕ  ಪಂಪಾಪತಿ ಸರ್, ರವೀಂದ್ರ ಸರ್ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಪ್ರಕಟವಾದ "ಅಂಕುರ" ಕವನ ಸಂಕಲನ ಮತ್ತು ಶಾಲೆಯ ಉತ್ತಮ ಫಲಿತಾಂಶಗಳು ಇದರ ಸಾಕ್ಷ್ಯಗಳು. ಶಿಕ್ಷಣ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ತಾಣವಾಗಿರುವ ನಮ್ಮ ಶಾಲೆ, ನೂರಾರು ಮಕ್ಕಳ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುತ್ತಿದೆ.
            </p>
          </div>
        </div>
      </section>

      {/* Village Story Section */}
      <div className="village-story">
        <div className="section-container">
          <div className="text-content">
            <h2>
              <span className="kannada-highlight">ನಮ್ಮ ಹಳ್ಳಿಯ ಕಥೆ</span>
             
            </h2>
            
            {/* Village Photo Gallery */}
            <div className="village-gallery">
              <div className="gallery-main">
                <img src={village1} alt="ನಮ್ಮೂರಿನ ನೋಟ" loading="lazy" />
              </div>
              <div className="gallery-secondary">
                <img src={village2} alt="ನಮ್ಮೂರಿನ ಹೊಲಗಳು" loading="lazy" />
                <img src={village3} alt="ನಮ್ಮೂರಿನ ಸಂಸ್ಕೃತಿ" loading="lazy" />
                <img src={village4} alt="ನಮ್ಮೂರಿನ ಜನಜೀವನ" loading="lazy" />
              </div>
            </div>

            <div className="content-grid">
              <div className="text-column">
                <p className="kannada-text">
                  <strong>ನಮ್ಮೂರು</strong> – ಕಲಬುರಗಿ ಜಿಲ್ಲೆಯ ಆಳಂದ ತಾಲೂಕಿನ ಒಂದು ಪುಟ್ಟ ಹಳ್ಳಿ. ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಬೀದರ್ ಜಿಲ್ಲೆಯ ಗಡಿಗಳಿಗೆ ಸಮೀಪದಲ್ಲಿರುವ ನಮ್ಮ ಗ್ರಾಮವು ಸುಂದರವಾದ ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ ಮತ್ತು ಸಂಪ್ರದಾಯಬದ್ಧ ಸಂಸ್ಕೃತಿಯನ್ನು ಹೊಂದಿದೆ.
                </p>

                <p className="kannada-text">
                  <strong>ನಮ್ಮೂರಿನ ಸ್ಥಳ ಮತ್ತು ಪ್ರಾಕೃತಿಕ ಸೌಂದರ್ಯ:</strong><br />
                  ನಮ್ಮೂರು ಆಳಂದ ತಾಲೂಕಿನಿಂದ ಸುಮಾರು 25 ಕಿ.ಮೀ. ದೂರದಲ್ಲಿದೆ. ಮಳೆಗಾಲದಲ್ಲಿ ಹರಿಯುವ <strong>ಬೆನ್ನೇತೊರೆ ನದಿ</strong> ನಮ್ಮೂರಿನ ಪಕ್ಕದಲ್ಲೇ ಹರಿಯುತ್ತದೆ. ಈ ನದಿಯು ರೈತರ ಬೆಳೆಗಳಿಗೆ ಪ್ರಾಣವಾಗಿದೆ. ಹಸಿರು ಬಯಲುಗಳು, ಹೊಲಗಳು ಮತ್ತು ಸಮಶೀತೋಷ್ಣವಲಯದ ಹವಾಮಾನವು ನಮ್ಮೂರನ್ನು ವಿಶೇಷವಾಗಿ ಮಾಡಿದೆ.
                </p>

                <p className="kannada-text">
                  <strong>ಜನಜೀವನ ಮತ್ತು ವ್ಯವಸಾಯ:</strong><br />
                  ನಮ್ಮೂರಿನ ಜನಸಂಖ್ಯೆ ಸುಮಾರು 500. ಹೆಚ್ಚಿನ ಯುವಕರು ಉದ್ಯೋಗ ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಬೆಂಗಳೂರು, ಮುಂಬೈ, ಪುಣೆ, ಕಲಬುರಗಿ ಮುಂತಾದ ನಗರಗಳಿಗೆ ಸ್ಥಳಾಂತರಗೊಂಡಿದ್ದಾರೆ. <strong>ವ್ಯವಸಾಯವೇ</strong> ಇಲ್ಲಿನ ಮುಖ್ಯ ಉದ್ಯೋಗ. ತೊಗರಿ, ಸೋಯಾಬಿನ್, ಗೋದಿ, ಜೋಳ, ಕಡಲೆ, ಕಬ್ಬು ಮುಂತಾದ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯುತ್ತಾರೆ. ಬೆಳೆಗಳು ಮಾನ್ಸೂನ್ ಮಳೆಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿವೆ. ಇಂದಿಗೂ ಕೆಲವು ರೈತರು ಎತ್ತುಗಳನ್ನು ಬಳಸಿ ಬೇಸಾಯ ಮಾಡುತ್ತಾರೆ. ಪ್ರತಿ ಮನೆಯ ಮುಂದೆ ದನ-ಕರುಗಳನ್ನು ನೋಡಬಹುದು.
                </p>
              </div>

              <div className="text-column">
                <p className="kannada-text">
                  <strong>ನಮ್ಮೂರಿನ ಐತಿಹಾಸಿಕ ಮಹತ್ವ:</strong><br />
                  20ನೇ ಶತಮಾನದ ಮಧ್ಯಭಾಗದಲ್ಲಿ <strong>ಬಾಬಾರಾವ ಪಾಟೀಲ್</strong> ಅವರು ನಮ್ಮೂರಿನಲ್ಲಿ ನೀರಾವರಿ ಯೋಜನೆಗೆ ಕೆಲಸ ಮಾಡಿದ್ದರು. ಇದರಿಂದ ಪ್ರಭಾವಿತರಾದ ಮೈಸೂರು ಸರ್ಕಾರವು ಅವರನ್ನು ಗೌರವಿಸಿತು. ಇದು ನಮ್ಮೂರಿಗೆ ಒಂದು ಹೆಗ್ಗಳಿಕೆ.
                </p>

                <p className="kannada-text">
                  <strong>ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು:</strong><br />
                  ನಮ್ಮೂರಿನ <strong>ಪ್ರಾಥಮಿಕ ಶಾಲೆ</strong> (1ರಿಂದ 8ನೇ ತರಗತಿ) ಸುಮಾರು 50 ಮಕ್ಕಳಿಗೆ ಶಿಕ್ಷಣ ನೀಡುತ್ತದೆ. ಶಿಕ್ಷಕ <strong>ರವೀಂದ್ರ ಸರ್</strong> ಅವರು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಪ್ರೀತಿಯನ್ನು ಬೆಳೆಸಿದ್ದಾರೆ. ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು "ಅಂಕುರ" ಮತ್ತು "ಅಂಕುರ-2" ಕವನ ಸಂಕಲನಗಳನ್ನು ಪ್ರಕಟಿಸಿದ್ದಾರೆ. ಕೆಲವು ಕವನಗಳು ರೇಡಿಯೋ ಮತ್ತು ಚಂದನ ಟಿವಿಯಲ್ಲಿ ಪ್ರಸಾರವಾಗಿವೆ.
                </p>

                <p className="kannada-text">
                  <strong>ನಮ್ಮೂರಿನ ವಿಶೇಷ ಹಬ್ಬ:</strong><br />
                  ಏಪ್ರಿಲ್ ತಿಂಗಳಲ್ಲಿ <strong>"ಅಖಂಡ ಹರಿನಾಮ ಸಪ್ತಾಹ ಮತ್ತು ಜ್ಞಾನೇಶ್ವರಿ ಪಾರಾಯಣ"</strong> 7 ದಿನಗಳ ಕಾಲ ಆಚರಿಸಲಾಗುತ್ತದೆ. ಪ್ರತಿದಿನ ಪ್ರವಚನ, ಕೀರ್ತನೆ ಮತ್ತು ಸಾಮೂಹಿಕ ಊಟದ ವ್ಯವಸ್ಥೆ ಇರುತ್ತದೆ. ಮರಾಠಿ ಸಂಸ್ಕೃತಿಯ ಪ್ರಭಾವ ಇರುವುದರಿಂದ ಹಬ್ಬಗಳು ಮತ್ತು ಆಚರಣೆಗಳು ಮಹಾರಾಷ್ಟ್ರದ ಶೈಲಿಯಲ್ಲಿರುತ್ತವೆ.
                </p>

                <p className="kannada-text closing-text">
                  ನಮ್ಮೂರು ಸಣ್ಣದಾಗಿದ್ದರೂ, <strong>ಸಾತ್ವಿಕ ಸಂಸ್ಕೃತಿ, ಸಹಕಾರದ ಮನೋಭಾವ</strong> ಮತ್ತು ಹಸಿರು ಬೆಳೆಗಳಿಂದ ಕೂಡಿದ ಗ್ರಾಮ. ಇದು ನಮ್ಮೆಲ್ಲರಿಗೂ ಹೆಮ್ಮೆಯ ಸ್ಥಳ.<br />
                  <strong>ನಮ್ಮೂರು – ನಮ್ಮ ಹೆಮ್ಮೆಯ ಹಳ್ಳಿ!</strong> 🌾🏡
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            ನಮ್ಮ ಶಾಲೆಯು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಕನ್ನಡ ಸಾಹಿತ್ಯ, ಶಿಸ್ತು, ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪರಿಸರದ ಬಗ್ಗೆ ಪ್ರೀತಿ ಬೆಳೆಸುವುದರೊಂದಿಗೆ 
            ಉತ್ತಮ ಶಿಕ್ಷಣವನ್ನು ನೀಡುತ್ತದೆ. "ಅಂಕುರ" ಕವನ ಸಂಕಲನ ನಮ್ಮ ಹೆಮ್ಮೆ.
          </p>
          <p className="testimonial-author">- ರವೀಂದ್ರ ರುದ್ರವಾಡಿ,  ಶಿಕ್ಷಕ</p>
        </div>
      </section>
    </div>
  );
};

export default About;
