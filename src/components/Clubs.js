import React, { useState } from 'react';
import './Clubs.css';

const Clubs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredClub, setHoveredClub] = useState(null);

  const clubsData = [
    {
      id: 1,
      name: "ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳ ನೈತಿಕ ಮತ್ತು ಶಿಸ್ತು ಸಂಘಟನಾ ಸಮಿತಿ",
      category: "environment",
      logo: "🌱",
      members: 45,
      achievements: ["500+ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ (2023)", "ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಶಾಲೆ ಪ್ರಶಸ್ತಿ"],
      description: "ಪರಿಸರ ಜಾಗೃತಿ ಮತ್ತು ಸುಸ್ಥಿರ ಅಭ್ಯಾಸಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು",
      president: "ರಾಹುಲ್ ದೇಶಮುಖ್ (9ನೇ ತರಗತಿ)",
      meeting: "ಪ್ರತಿ ಮಂಗಳವಾರ, ಮಧ್ಯಾಹ್ನ 3:30",
      color: "#10B981"
    },
    {
      id: 2,
      name: "ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ಕ್ಲಬ್",
      category: "stem",
      logo: "💻",
      members: 32,
      achievements: ["ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕೋಡಿಂಗ್ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ವಿಜೇತರು"],
      description: "ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ ಮತ್ತು ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಕೌಶಲ್ಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು",
      president: "ಪ್ರಿಯಾ ಶರ್ಮಾ (10ನೇ ತರಗತಿ)",
      meeting: "ಪ್ರತಿ ಶುಕ್ರವಾರ, ಮಧ್ಯಾಹ್ನ 4:00",
      color: "#3B82F6"
    },
    {
      id: 3,
      name: "ಯುವ ನಾಯಕರು",
      category: "leadership",
      logo: "🌟",
      members: 28,
      achievements: ["ಸಮುದಾಯ ಸೇವಾ ಯೋಜನೆಗಳ ಮೂಲಕ 5000+ ರೂಪಾಯಿ ಸಂಗ್ರಹ"],
      description: "ಸಮುದಾಯ ಯೋಜನೆಗಳ ಮೂಲಕ ನಾಯಕತ್ವ ಕೌಶಲ್ಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು",
      president: "ವಿಕ್ರಮ್ ಜೋಶಿ (7ನೇ ತರಗತಿ)",
      meeting: "ಪ್ರತಿ ಬುಧವಾರ, ಮಧ್ಯಾಹ್ನ 3:00",
      color: "#F59E0B"
    },
    {
      id: 4,
      name: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಂಘ",
      category: "culture",
      logo: "📚",
      members: 38,
      achievements: ["ವಾರ್ಷಿಕ ಕನ್ನಡ ನಾಟಕ ಪ್ರದರ್ಶನ", "ಅಂಕುರ ಕವನ ಸಂಕಲನ ಪ್ರಕಟಣೆ"],
      description: "ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು",
      president: "ಸೌಮ್ಯಾ ಪಾಟೀಲ್ (8ನೇ ತರಗತಿ)",
      meeting: "ಪ್ರತಿ ಸೋಮವಾರ, ಮಧ್ಯಾಹ್ನ 4:30",
      color: "#8B5CF6"
    }
  ];

  const categories = [
    { id: 'all', name: 'ಎಲ್ಲಾ ಕ್ಲಬ್ಗಳು', icon: '✨' },
    { id: 'environment', name: 'ಪರಿಸರ', icon: '🌿' },
    { id: 'stem', name: 'ಸ್ಟೆಮ್', icon: '🔬' },
    { id: 'leadership', name: 'ನಾಯಕತ್ವ', icon: '👑' },
    { id: 'culture', name: 'ಸಂಸ್ಕೃತಿ', icon: '🎭' }
  ];

  const filteredClubs = activeTab === 'all' 
    ? clubsData 
    : clubsData.filter(club => club.category === activeTab);

  return (
    <section className="clubs-section">
      <div className="clubs-container">
        <div className="section-header">
          <div className="header-decoration"></div>
          <h2 className="kannada-title">ವಿದ್ಯಾರ್ಥಿ ನಾಯಕತ್ವ ಮತ್ತು ಕ್ಲಬ್ಗಳು</h2>
          <p className="kannada-subtitle">ಅಭಿರುಚಿಗಳು ಭೇಟಿಯಾಗುವ ಮತ್ತು ಕೌಶಲ್ಯಗಳನ್ನು ಹರಿತಗೊಳಿಸುವ ಸ್ಥಳ</p>
        </div>

        <div className="club-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`club-tab ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="kannada-text">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="club-grid">
          {filteredClubs.map(club => (
            <div 
              key={club.id} 
              className="club-card"
              onMouseEnter={() => setHoveredClub(club.id)}
              onMouseLeave={() => setHoveredClub(null)}
              style={{ '--club-color': club.color }}
            >
              <div className="card-background"></div>
              <div className="card-content">
                <div className="club-header">
                  <div className="club-logo">{club.logo}</div>
                  <h3 className="kannada-text">{club.name}</h3>
                  <div className="member-badge kannada-text">
                    <span className="member-icon">👥</span>
                    {club.members} ಸದಸ್ಯರು
                  </div>
                </div>
                
                <div className="club-body">
                  <p className="club-description kannada-text">{club.description}</p>
                  
                  <div className="club-details">
                    <div className="detail-item">
                      <span className="detail-icon">👨‍💼</span>
                      <div>
                        <span className="detail-label kannada-text">ಅಧ್ಯಕ್ಷರು:</span>
                        <span className="kannada-text">{club.president}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🕒</span>
                      <div>
                        <span className="detail-label kannada-text">ಸಭೆಗಳು:</span>
                        <span className="kannada-text">{club.meeting}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="achievements">
                    <h4 className="kannada-text">
                      <span className="trophy-icon">🏆</span>
                      ಇತ್ತೀಚಿನ ಸಾಧನೆಗಳು:
                    </h4>
                    <ul>
                      {club.achievements.map((achievement, index) => (
                        <li key={index} className="kannada-text">
                          <span className="bullet-icon">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button 
                  className={`join-button ${hoveredClub === club.id ? 'hovered' : ''}`}
                >
                  <span className="kannada-text">ಆಸಕ್ತಿ ವ್ಯಕ್ತಪಡಿಸಿ</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;