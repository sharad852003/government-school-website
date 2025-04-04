import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="section-header">
        <h2>ನಮ್ಮ ಹೆಮ್ಮೆಯ ಸಾಧನೆಗಳು</h2>
        <p>೧೯೮೫ ರಿಂದ ಶಿಕ್ಷಣರಂಗದಲ್ಲಿ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಆಚರಿಸುತ್ತಿದೆ</p>
      </div>

      <div className="achievements-grid">
        {/* Academic Excellence */}
        <div className="achievement-card academic">
          <div className="icon">🎓</div>
          <h3>ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ</h3>
          <ul>
            <li>೮ ವರ್ಷಗಳಿಂದ ೧೦೦% ಪಾಸ್ ಮಾಡುವ ಸಾಧನೆ</li>
           
            <li>೨೦೨೪ ಬೋರ್ಡ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ ೮೫% ವಿಶೇಷ ಶ್ರೇಣಿ</li>
            <li>ವಿದ್ಯಾರ್ಥಿಗಳ "ಅಂಕುರ" ಕವನ ಸಂಕಲನ ಪ್ರಕಟಣೆ</li>
          </ul>
        </div>

        {/* Sports Achievements */}
        <div className="achievement-card sports">
          <div className="icon">🏅</div>
          <h3>ಕ್ರೀಡೆ & ಕಲೆ</h3>
          <ul>
           
            <li>ದೂರದರ್ಶನದಲ್ಲಿ ಪ್ರಸಾರವಾದ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ</li>
            
          </ul>
        </div>

        {/* Cultural Achievements */}
        <div className="achievement-card cultural">
          <div className="icon">🎭</div>
          <h3>ಸಾಂಸ್ಕೃತಿಕ ವೈಭವ</h3>
          <ul>
            <li>"ಅಂಕುರ - ಕನ್ನಡ ಕಾವ್ಯ ಸಂಗ್ರಹ" ಪ್ರಕಟಣೆ</li>
           
            <li>ವಾರ್ಷಿಕ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ </li>
          </ul>
        </div>

        {/* Environmental Achievements */}
        <div className="achievement-card alumni">
          <div className="icon">🌱</div>
          <h3>ಪರಿಸರ ನಾಯಕತ್ವ</h3>
          <ul>
            <li>ಪರಿಸರ ಸಂರಕ್ಷಣೆಯಲ್ಲಿ ಅಗ್ರಗಣ್ಯರು</li>
            <li>"ವೈಜ್ಞಾನಿಕ ಮನೋಭಾವ" ಯೋಜನೆ</li>
            <li>ಪರಿಸರ ಸ್ನೇಹಿ ಉಪಕ್ರಮಗಳಿಗೆ ರಾಷ್ಟ್ರೀಯ ಮನ್ನಣೆ</li>
          </ul>
        </div>
      </div>

      <div className="view-more">
        <button className="btn-view-more">ಎಲ್ಲಾ ಸಾಧನೆಗಳನ್ನು ನೋಡಿ →</button>
      </div>
    </section>
  );
};

export default Achievements;