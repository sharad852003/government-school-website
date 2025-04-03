import React, { useState } from 'react';
import './Clubs.css';

const Clubs = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const clubsData = [
    {
      id: 1,
      name: "ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳ ನೈತಿಕ ಮತ್ತು ಶಿಸ್ತು ಸಂಘಟನಾ ಸಮಿತಿ ನಂದಗೂರು.",
      category: "students",
      logo: "🌱",
      members: 45,
      achievements: ["Planted 500+ trees (2023)", "Zero Waste School Award"],
      description: "Promoting environmental awareness and sustainable practices",
      president: "",
      meeting: "Every Tuesday, 3:30 PM"
    },
    {
      id: 2,
      name: "",
      category: "",
      logo: "💻",
      members: 32,
      achievements: [""],
      description: "",
      president: "",
      meeting: "Every Friday, 4:00 PM"
    },
    {
      id: 3,
      name: "Young Leaders",
      category: "leadership",
      logo: "🌟",
      members: 28,
      achievements: [""],
      description: "Developing leadership skills through community projects",
      president: "",
      meeting: "Every Wednesday, 3:00 PM"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Clubs' },
    { id: 'environment', name: 'Environment' },
    { id: 'stem', name: 'STEM' },
    { id: 'leadership', name: 'Leadership' }
  ];

  const filteredClubs = activeTab === 'all' 
    ? clubsData 
    : clubsData.filter(club => club.category === activeTab);

  return (
    <section className="clubs-section">
      <div className="section-header">
        <h2>Student Leadership & Clubs</h2>
        <p>Where passion meets purpose and skills are honed</p>
      </div>

      <div className="club-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`club-tab ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="club-grid">
        {filteredClubs.map(club => (
          <div key={club.id} className="club-card">
            <div className="club-header">
              <div className="club-logo">{club.logo}</div>
              <h3>{club.name}</h3>
              <span className="member-count">{club.members} members</span>
            </div>
            
            <div className="club-body">
              <p className="club-description">{club.description}</p>
              
              <div className="club-details">
                <div className="detail-item">
                  <span className="detail-label">President:</span>
                  <span>{club.president}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Meets:</span>
                  <span>{club.meeting}</span>
                </div>
              </div>
              
              <div className="achievements">
                <h4>Recent Achievements:</h4>
                <ul>
                  {club.achievements.map((achievement, index) => (
                    <li key={index}>
                      <span className="trophy-icon">🏆</span> 
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="join-button">Express Interest</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clubs;