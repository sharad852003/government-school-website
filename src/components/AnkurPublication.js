import React, { useState } from 'react';
import './AnkurPublication.css';

// Import images
import publicationCover from '../assets/publication1.jpg';
import priyaPhoto from '../assets/ankur1.jpg';
import rahulPhoto from '../assets/ankur2.jpg';
import launch1 from '../assets/ankur2.jpg';
import launch2 from '../assets/ankur1.jpg';
import launch3 from '../assets/ankur3.jpg';
import rudravadiPhoto from '../assets/ravisir.jpg';

const AnkurPublication = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedSong, setSelectedSong] = useState(null);

  // Publication details
  const publicationInfo = {
    title: "Ankur - The Blossom of Creativity",
    description: "A collection of poems and songs composed by our talented students, nurtured under the guidance of Shri Ravindra S. Rudravadi",
    year: "2023",
    pages: "120",
    teacher: {
      name: "Shri Ravindra S. Rudravadi",
      role: "Mentor & Music Teacher",
      contribution: "ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ ಅವರು, ಕಲಬುರ್ಗಿ ಜಿಲ್ಲೆಯ ಸರಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆಯ ಶಿಕ್ಷಕರಾಗಿದ್ದು, ಮಕ್ಕಳ ಸ್ನೇಹಿ ಶಿಕ್ಷಕ ರಾಜ್ಯ ಪ್ರಶಸ್ತಿ ಪಡೆದಿದ್ದಾರೆ. ಅವರು ಮಕ್ಕಳ ಶಿಕ್ಷಣ ಹಾಗೂ ಸಾಹಿತ್ಯದ ಬೆಳವಣಿಗೆಗಾಗಿ ಹಲವು ಕೃತಿಗಳನ್ನು ರಚಿಸಿದ್ದಾರೆ. ಚಂದೇರ್ ನಸೋಸ್ ಮತ್ತು ಅಂಕುರ ಎಂಬ ಮಕ್ಕಳ ಪುಸ್ತಕಗಳು ಅವರ ಮಹತ್ವದ ಕೃತಿಗಳಾಗಿವೆ."
    }
  };

  // Authors data
  const authors = [
    {
      id: 1,
      name: "Priya Sharma",
      grade: "10th",
      photo: priyaPhoto,
      bio: "Passionate about folk music and nature themes",
      songs: ["The Morning Dew", "Grandpa's Stories"]
    },
    {
      id: 2,
      name: "Rahul Deshmukh",
      grade: "9th",
      photo: rahulPhoto,
      bio: "Specializes in patriotic compositions",
      songs: ["My Flag", "Soldier's Promise"]
    },
    // Add 8 more authors following same structure
  ];

  // Sample songs data
  const songs = [
    {
      id: 1,
      title: "The Morning Dew",
      author: "Priya Sharma",
      lyrics: "First light touches the petals...",
      theme: "Nature",
      page: 23
    },
    {
      id: 2,
      title: "My Flag",
      author: "Rahul Deshmukh",
      lyrics: "Oh saffron, white and green...",
      theme: "Patriotism",
      page: 45
    },
    // Add more songs
  ];

  return (
    <section className="ankur-publication">
      {/* Cover Section */}
      <div className="cover-section">
        <div className="cover-image">
          <img src={publicationCover} alt="Ankur Publication Cover" />
        </div>
        <div className="cover-details">
          <h1>{publicationInfo.title}</h1>
          <p className="description">{publicationInfo.description}</p>
          <div className="meta-info">
            <span>Published: {publicationInfo.year}</span>
            <span>{publicationInfo.pages} Pages</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="publication-tabs">
        <button 
          className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={`tab-btn ${activeTab === 'authors' ? 'active' : ''}`}
          onClick={() => setActiveTab('authors')}
        >
          Young Authors ({authors.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'songs' ? 'active' : ''}`}
          onClick={() => setActiveTab('songs')}
        >
          Song Collection ({songs.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mentor' ? 'active' : ''}`}
          onClick={() => setActiveTab('mentor')}
        >
          Our Mentor
        </button>
      </div>

      {/* Content Sections */}
      <div className="publication-content">
        {activeTab === 'about' && (
          <div className="about-section1">
            <h2>The Genesis of Ankur</h2>
            <p>ಭಾಷಾ ಕಲಿಕೆಗೆ ಹೆಚ್ಚು ಆಲಿಸುವಿಕೆ ಬೇಕು. ಅದಕ್ಕೆ ಪೂರಕವಾಗಿ ಹಾಡು-ಕಥೆಗಳನ್ನು ಹೇಳಲು ಆರಂಭಿಸಿದೆವು. ಒಂದು ಚಿಕ್ಕ ಬ್ಲ್ಯೂಟೂಥ್ ಖರೀದಿಸಿ ಮಕ್ಕಳಿಗೆ ಕೇಳಿಸತೊಡಗಿದೆ. ಮಕ್ಕಳಿಂದ ವ್ಯಾಪಕವಾಗಿ ಹಾಡು-ಕಥೆ ಹೇಳಿಸಿ, ಅವರ ಮಾತನಾಡುವ ಸಾಮರ್ಥ್ಯವೃದ್ಧಿಗೆ ಶ್ರಮಿಸಿದೆವು. ಭಾಷಾ ಕೀಳರಿಮೆಯಿಂದ ಮಕ್ಕಳು ಕನ್ನಡ ಮಾತಾಡಲು ತಡವರಿಸುವಂತಾಯ್ತು. ಆದರೂ ಪಟ್ಟುಬಿಡದೇ ಕಥೆ-ಕವನಗಳನ್ನು ಓದಿಸತೊಡಗಿದೆವು. ಈ ನಡುವೆ ಧ್ವನಿ ಶೈಕ್ಷಣಿಕ ಸಾಮಗ್ರಿಗಳ ಪಾತ್ರ ಮರೆಯುವಂತಿಲ್ಲ. ಮಕ್ಕಳ ಓದಿಗೆ ಕುತೂಹಲಕರ ಸಾಮಗ್ರಿಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದ 'ಧ್ವನಿ' ನಮ್ಮ ಪರಮಾಪ್ತ ಸ್ನೇಹಿತ. ಅದರಾಚೆ ಗ್ರಂಥಾಲಯ ಬಳಕೆ ಆರಂಭವಾಯಿತು. ಓದುವ ಮಕ್ಕಳು ಓದಿದ್ದನ್ನು ಬರೆಯುವುದು, ಸಂದೇಹಗಳನ್ನು ಬರೆದು ಕೇಳುವುದು, ಓದಿದ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಳ್ಳುವುದನ್ನು ಆರಂಭಿಸಿದರು. ಪಠ್ಯ ಹಾಗೂ ಹೊರಗಿನ ಪುಸ್ತಕಗಳೊಂದಿಗೆ ಒಡನಾಡುವುದನ್ನು ಕಲಿತ ಮಕ್ಕಳು ತಮ್ಮ ಅಭಿಪ್ರಾಯಗಳನ್ನು ಕವನ-ಕಥೆ ರೂಪದಲ್ಲಿ ದಾಖಲಿಸತೊಡಗಿದರು. ಅದಾಗಲೇ ಕಂಪ್ಯೂಟರ್ ಕಲಿಯುತ್ತಿದ್ದವರು ತಮ್ಮ ಕವನಗಳನ್ನು ತಾವೇ ಟೈಪ್ ಮಾಡತೊಡಗಿದರು. ೨೦೧೮ರಷ್ಟರೊತ್ತಿಗೆ ನಾನು ಪರಿಶೀಲಿಸಿದ ಕವನಗಳು ೧ ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು. ಅವುಗಳಲ್ಲಿ ಸುಮಾರು ೬೦೦ ಕ್ಕೂ ಹೆಚ್ಚು ಕವನಗಳನ್ನು ಉಳಿಸಿಕೊಂಡು ಮುದ್ರಿಸಿದೆವು. ಹೀಗೆ ಮುದ್ರಿಸಿದವುಗಳನ್ನು ಪುಸ್ತಕ ಮಾಡೋಣ ಎಂಬ ಆಲೋಚನೆ ಮೂಡಿತು. ಎಲ್ಲಿ, ಹೇಗೆ ಮುದ್ರಿಸುವುದು ? ಈಗಾಗಲೇ ಎರಡು ವಾರ್ಷಿಕ ಪತ್ರಿಕೆ ಪ್ರಕಟಿಸಿ ಖರ್ಚು ಮಾಡಿಕೊಂಡಿದ್ದ ನಮಗೆ ಈ ಪುಸ್ತಕದ ಖರ್ಚು ಹೊರೆನಿಸಿತು. ಇಲಾಖೆಯ ಸಹಾಯ ಸಿಗಬಹುದೆಂದು ಹಿರಿಯ ಅಧಿಕಾರಿಗಳೆಲ್ಲರನ್ನೂ ಸಂಪರ್ಕಿಸಿದೆವು. ಆ ರೀತಿಯ ಅವಕಾಶಗಳು ಇಲ್ಲದ್ದಾಗಿ ಎಲ್ಲರೂ ಕೈ ಚೆಲ್ಲಿದರು. ಕಲಬುರ್ಗಿಯ ಪ್ರಜ್ಞಾ ಪ್ರಕಾಶನದಿಂದ ಹೊರ ತರುವುದು ಎಂದಾಯಿತು. ಒಟ್ಟು ೧೯೦ ಪುಟಗಳು ! ಖರ್ಚೂ ಕಡಿಮೆಯೇನಲ್ಲ; ಅಂದಾಜು ೮೦ ಸಾವಿರ ರುಪಾಯಿಗಳು.
            </p>
            
            <div className="gallery-preview">
              <h3>Glimpses from the Launch Event</h3>
              <div className="event-images">
                <img src={launch1} alt="Book launch event" />
                <img src={launch2} alt="Student performance" />
                <img src={launch3} alt="Guest speech" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'authors' && (
          <div className="authors-section">
            <h2>Our Talented Young Authors</h2>
            <div className="authors-grid">
              {authors.map(author => (
                <div key={author.id} className="author-card">
                  <div className="author-photo">
                    <img src={author.photo} alt={author.name} />
                  </div>
                  <div className="author-details">
                    <h3>{author.name}</h3>
                    <p className="grade">{author.grade} Grade</p>
                    <p className="bio">{author.bio}</p>
                    <div className="contributions">
                      <h4>Contributions:</h4>
                      <ul>
                        {author.songs.map(song => (
                          <li key={song}>{song}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'songs' && (
          <div className="songs-section">
            <h2>Song Collection</h2>
            <div className="songs-list">
              {songs.map(song => (
                <div 
                  key={song.id} 
                  className={`song-card ${selectedSong === song.id ? 'expanded' : ''}`}
                  onClick={() => setSelectedSong(selectedSong === song.id ? null : song.id)}
                >
                  <div className="song-header">
                    <h3>{song.title}</h3>
                    <span className="page-number">Page {song.page}</span>
                  </div>
                  <p className="author">By {song.author}</p>
                  <p className="theme">{song.theme} Theme</p>
                  {selectedSong === song.id && (
                    <div className="song-lyrics">
                      <h4>Lyrics Preview:</h4>
                      <p>{song.lyrics}</p>
                      <button className="read-more">Read Full Version</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mentor' && (
          <div className="mentor-section">
            <h2>Guiding Light</h2>
            <div className="mentor-profile">
              <div className="mentor-photo">
                <img src={rudravadiPhoto} alt={publicationInfo.teacher.name} />
              </div>
              <div className="mentor-details">
                <h3>{publicationInfo.teacher.name}</h3>
                <p className="role">{publicationInfo.teacher.role}</p>
                <p className="contribution">{publicationInfo.teacher.contribution}</p>
                <blockquote>
                  "These young poets have shown remarkable depth in their compositions. 
                  Ankur is just the beginning of their creative journey."
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <p>Interested in getting a copy of Ankur?</p>
        <button className="request-btn">Request Publication</button>
      </div>
    </section>
  );
};

export default AnkurPublication;