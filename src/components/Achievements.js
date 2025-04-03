import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="section-header">
        <h2>Our Proud Achievements</h2>
        <p>Celebrating excellence in education since 1985</p>
      </div>

      <div className="achievements-grid">
        {/* Academic Excellence */}
        <div className="achievement-card academic">
          <div className="icon">🎓</div>
          <h3>Academic Excellence</h3>
          <ul>
            <li>100% pass rate for 8 consecutive years</li>
            <li>32 district toppers since 2015</li>
            <li>85% distinction rate in 2024 board exams</li>
            <li>Published "Ankur" poetry collection by students</li>
          </ul>
        </div>

        {/* Sports Achievements */}
        <div className="achievement-card sports">
          <div className="icon">🏅</div>
          <h3>Sports & Arts</h3>
          <ul>
            <li>State champions in athletics (2023, 2024)</li>
            <li>Featured on Doordarshan for cultural program</li>
            <li>Best school for sports infrastructure award</li>
          </ul>
        </div>

        {/* Cultural Achievements */}
        <div className="achievement-card cultural">
          <div className="icon">🎭</div>
          <h3>Cultural Excellence</h3>
          <ul>
            <li>"ಅಂಕುರ - ಕವನ ಸಂಕಲನ" poetry collection published</li>
            <li>State-level science exhibition champions</li>
            <li>Annual cultural fest with 1000+ participants</li>
          </ul>
        </div>

        {/* Environmental Achievements */}
        <div className="achievement-card alumni">
          <div className="icon">🌱</div>
          <h3>Environmental Leadership</h3>
          <ul>
            <li>Pioneers in ಪರಿಸರ ಸಂರಕ್ಷಣೆ (Environmental Protection)</li>
            <li>ವೈಜ್ಞಾನಿಕ ಮನೋಭಾವ-ಅರಿವಿನ ಹರಿವು program</li>
            <li>National recognition for eco-friendly initiatives</li>
          </ul>
        </div>
      </div>

      <div className="view-more">
        <button className="btn-view-more">Explore All Achievements →</button>
      </div>
    </section>
  );
};

export default Achievements;