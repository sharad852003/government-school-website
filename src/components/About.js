import React from 'react';
import './About.css';
import schoolImage from '../assets/school.jpg';
import villageImage from '../assets/school.jpg';
import studentsImage from '../assets/school.jpg';
import teacherImage from '../assets/school.jpg';
import { FaChalkboardTeacher, FaBookOpen, FaGraduationCap, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Parallax Section */}
      <section className="hero-parallax">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="kannada">ನಂದಗೂರು ಸರ್ಕಾರಿ ಶಾಲೆ</span>
            <span className="english">Nandagoor Government School</span>
          </h1>
          <p className="hero-subtitle">Building futures since 1985</p>
        </div>
      </section>

      {/* Village Story Section */}
      <section className="village-story">
        <div className="section-container">
          <div className="text-content animate-fade">
            <h2>
              <span className="kannada-highlight">ನಮ್ಮ ಹಳ್ಳಿಯ ಕಥೆ</span>
              <span className="english-text">Our Village Story</span>
            </h2>
            <p className="kannada-text">
              ಕಲಬುರಗಿ ಜಿಲ್ಲೆಯ ಆಳಂದ ತಾಲೂಕಿನ ಈ ಸುಂದರ ಗ್ರಾಮವು ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಬೀದರ್ ಜಿಲ್ಲೆಗಳ ಗಡಿಯಲ್ಲಿದೆ. 
              ಮಳೆಗಾಲದಲ್ಲಿ ಹರಿಯುವ ಬೆನ್ನೇತೊರೆ ನದಿ ನಮ್ಮ ಜೀವನಾಡಿ. ಸೋಯಾಬಿನ್, ತೊಗರಿ, ಗೋದಿ ಮತ್ತು ಜೋಳ 
              ನಮ್ಮ ಪ್ರಮುಖ ಬೆಳೆಗಳು. ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿ ಸುಮಾರು 500 ಜನರು ವಾಸಿಸುತ್ತಿದ್ದಾರೆ.
            </p>
            <p className="english-text">
              Nestled between Maharashtra and Bidar districts, our picturesque village in Aland taluk 
              thrives with agriculture. The seasonal Benne Tore river sustains our crops of soybean, 
              pigeon pea, wheat and corn. About 500 residents call this peaceful village home.
            </p>
          </div>
          <div className="image-gallery">
            <div className="gallery-item main-image">
              <img src={villageImage} alt="Village landscape" loading="lazy" />
            </div>
            <div className="gallery-item secondary-image">
              <img src={studentsImage} alt="Village students" loading="lazy" />
            </div>
            <div className="gallery-item tertiary-image">
              <img src={teacherImage} alt="Village teacher" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* School Excellence Section */}
      <section className="school-excellence">
        <div className="section-container">
          <h2 className="section-title">
            <span className="kannada-highlight">ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ</span>
            <span className="english-text">Academic Excellence</span>
          </h2>
          
          <div className="excellence-cards">
            <div className="excellence-card">
              <div className="card-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>Experienced Faculty</h3>
              <p>4 dedicated teachers with 20+ years average experience</p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaBookOpen />
              </div>
              <h3>Creative Learning</h3>
              <p>Published student poetry collections "Ankur" and "Ankur 2"</p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Holistic Education</h3>
              <p>Focus on academics, arts, and environmental awareness</p>
            </div>
            
            <div className="excellence-card">
              <div className="card-icon">
                <FaLeaf />
              </div>
              <h3>Green Initiatives</h3>
              <p>Environmental protection programs and scientific awareness</p>
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
            <p>
              Established in 1985, our school has been serving the community for nearly four decades. 
              We provide education from 1st to 8th standard to about 50 students annually. Under the 
              leadership of Headmaster Shri Pampapati Gadgere, we've developed unique programs like 
              the "Student Ethics and Discipline Committee" that empowers students.
            </p>
            <div className="history-stats">
              <div className="stat-item">
                <span className="stat-number">38+</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Students Graduated</span>
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