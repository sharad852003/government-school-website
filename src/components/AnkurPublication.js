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

  // Publication details in Kannada
  const publicationInfo = {
    title: "ಅಂಕುರ - ಸೃಜನಶೀಲತೆಯ ಮೊಳಕೆ",
    description: "ನಮ್ಮ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳು ರಚಿಸಿದ ಕವನಗಳು ಮತ್ತು ಹಾಡುಗಳ ಸಂಗ್ರಹ, ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ",
    year: "2023",
    pages: "120",
    teacher: {
      name: "ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ",
      role: "ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಸಂಗೀತ ಶಿಕ್ಷಕರು",
      contribution: `ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ ಅವರು ಕಲಬುರ್ಗಿ ಜಿಲ್ಲೆಯ ಸರಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆಯಲ್ಲಿ ಶಿಕ್ಷಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ. ಅವರು 2021ರಲ್ಲಿ 'ಮಕ್ಕಳ ಸ್ನೇಹಿ ಶಿಕ್ಷಕ' ರಾಜ್ಯ ಪ್ರಶಸ್ತಿ ಪಡೆದಿದ್ದಾರೆ. ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಬೆಳವಣಿಗೆಗಾಗಿ ಅವರು ನಿರಂತರವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ.

      ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು 600 ಕ್ಕೂ ಹೆಚ್ಚು ಕವನಗಳನ್ನು ರಚಿಸಿದ್ದು, ಅವುಗಳಲ್ಲಿ ಉತ್ತಮವಾದವುಗಳನ್ನು "ಅಂಕುರ" ಮತ್ತು "ಅಂಕುರ-2" ಪುಸ್ತಕಗಳಾಗಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ. ಅವರ "ಚಂದೇರ್ ನಸೋಸ್" ಮಕ್ಕಳ ಪುಸ್ತಕವು ಜಿಲ್ಲಾ ಮಟ್ಟದಲ್ಲಿ ಪ್ರಶಂಸೆಗೆ ಪಾತ್ರವಾಗಿದೆ.
      
      ರವೀಂದ್ರ ಸರ್ ಅವರು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಸಾಹಿತ್ಯ, ಸಂಗೀತ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳ ಬಗ್ಗೆ ಆಸಕ್ತಿ ಮೂಡಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ್ದಾರೆ. ರೇಡಿಯೋ ಮತ್ತು ಸ್ಥಳೀಯ ಟಿವಿ ಚಾನೆಲ್ಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿ ಕೃತಿಗಳ ಪ್ರಸಾರಕ್ಕೆ ಅವರು ನಾಂದಿ ಹಾಡಿದ್ದಾರೆ.`
    }
  };

  // Authors data in Kannada
  const authors = [
    {
      id: 1,
      name: "ಪ್ರಿಯಾ ಶರ್ಮಾ",
      grade: "10ನೇ ತರಗತಿ",
      photo: priyaPhoto,
      bio: "ಲೋಕಗೀತೆ ಮತ್ತು ಪ್ರಕೃತಿ ವಿಷಯಗಳ ಬಗ್ಗೆ ಆಸಕ್ತಿ",
      songs: ["ಬೆಳದಿಂಗಳ ಬೀಸುತಿರಲು", "ಅಜ್ಜಿಯ ಕಥೆಗಳು"]
    },
    {
      id: 2,
      name: "ರಾಹುಲ್ ದೇಶಮುಖ್",
      grade: "9ನೇ ತರಗತಿ",
      photo: rahulPhoto,
      bio: "ದೇಶಭಕ್ತಿ ಗೀತೆಗಳ ರಚನೆಗೆ ಪ್ರಸಿದ್ಧ",
      songs: ["ನನ್ನ ತ್ರಿವರ್ಣ ಧ್ವಜ", "ರಣಗಂಟೆಯ ನಾದ"]
    },
    {
      id: 3,
      name: "ಸೌಮ್ಯಾ ಪಾಟೀಲ್",
      grade: "8ನೇ ತರಗತಿ",
      photo: priyaPhoto,
      bio: "ಸಾಮಾಜಿಕ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಕವನ ರಚನೆ",
      songs: ["ಬಾಲಕಿಯರ ಹಾಡು", "ಮಳೆನೀರಿನ ಆಟ"]
    },
    {
      id: 4,
      name: "ವಿಕ್ರಮ್ ಜೋಶಿ",
      grade: "7ನೇ ತರಗತಿ",
      photo: rahulPhoto,
      bio: "ಹಾಸ್ಯ ಮತ್ತು ಚುಟುಕು ಕವನಗಳು",
      songs: ["ಶಾಲೆಯ ದಿನಚರಿ", "ನನ್ನ ಸ್ನೇಹಿತ"]
    },
    // Add more authors as needed
  ];

  // Sample songs data in Kannada
  const songs = [
    {
      id: 1,
      title: "ಬೆಳದಿಂಗಳ ಬೀಸುತಿರಲು",
      author: "ಪ್ರಿಯಾ ಶರ್ಮಾ",
      lyrics: "ಬೆಳದಿಂಗಳ ಬೀಸುತಿರಲು, ನಿದ್ದೆ ಬಾರದು ಮನಸಿಗೆ...\nಎಲ್ಲರೂ ಮಲಗಿದ ಮೇಲೆ, ನಾನೊಬ್ಬಳೇ ಎದುರುಗುಳ್ಳೆ...",
      theme: "ಪ್ರಕೃತಿ",
      page: 23
    },
    {
      id: 2,
      title: "ನನ್ನ ತ್ರಿವರ್ಣ ಧ್ವಜ",
      author: "ರಾಹುಲ್ ದೇಶಮುಖ್",
      lyrics: "ಓ ಕೇಸರಿ, ಬಿಳಿ, ಹಸಿರು...\nನಿನ್ನೆದುರಲಿ ನಿಲ್ಲುವಾಗ, ಎದೆ ಉಬ್ಬರಿಸುತಿದೆ...\nನೀನೇ ನಮ್ಮ ಗರ್ವದ ಸಂಕೇತ...",
      theme: "ದೇಶಭಕ್ತಿ",
      page: 45
    },
    // Add more songs
  ];

  return (
    <section className="ankur-publication">
      {/* Cover Section */}
      <div className="cover-section">
        <div className="cover-image">
          <img src={publicationCover} alt="ಅಂಕುರ ಪುಸ್ತಕದ ಮುಖಪುಟ" />
        </div>
        <div className="cover-details">
          <h1 className="kannada-title">{publicationInfo.title}</h1>
          <p className="description kannada-text">{publicationInfo.description}</p>
          <div className="meta-info">
            <span className="kannada-text">ಪ್ರಕಟಣೆ: {publicationInfo.year}</span>
            <span className="kannada-text">{publicationInfo.pages} ಪುಟಗಳು</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="publication-tabs">
        <button 
          className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <span className="kannada-text">ಪರಿಚಯ</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'authors' ? 'active' : ''}`}
          onClick={() => setActiveTab('authors')}
        >
          <span className="kannada-text">ಯುವ ಲೇಖಕರು ({authors.length})</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'songs' ? 'active' : ''}`}
          onClick={() => setActiveTab('songs')}
        >
          <span className="kannada-text">ಹಾಡುಗಳ ಸಂಗ್ರಹ ({songs.length})</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mentor' ? 'active' : ''}`}
          onClick={() => setActiveTab('mentor')}
        >
          <span className="kannada-text">ಮಾರ್ಗದರ್ಶಕರು</span>
        </button>
      </div>

      {/* Content Sections */}
      <div className="publication-content">
        {activeTab === 'about' && (
          <div className="about-section">
            <h2 className="kannada-title">ಅಂಕುರದ ಹಿನ್ನೆಲೆ</h2>
            <p className="kannada-text">
              ಭಾಷಾ ಕಲಿಕೆಗೆ ಹೆಚ್ಚು ಆಲಿಸುವಿಕೆ ಬೇಕು. ಅದಕ್ಕೆ ಪೂರಕವಾಗಿ ಹಾಡು-ಕಥೆಗಳನ್ನು ಹೇಳಲು ಆರಂಭಿಸಿದೆವು. ಒಂದು ಚಿಕ್ಕ ಬ್ಲ್ಯೂಟೂಥ್ ಸ್ಪೀಕರ್ ಖರೀದಿಸಿ ಮಕ್ಕಳಿಗೆ ಕೇಳಿಸತೊಡಗಿದೆ. ಮಕ್ಕಳಿಂದ ವ್ಯಾಪಕವಾಗಿ ಹಾಡು-ಕಥೆ ಹೇಳಿಸಿ, ಅವರ ಮಾತನಾಡುವ ಸಾಮರ್ಥ್ಯವೃದ್ಧಿಗೆ ಶ್ರಮಿಸಿದೆವು. ಭಾಷಾ ಕೀಳರಿಮೆಯಿಂದ ಮಕ್ಕಳು ಕನ್ನಡ ಮಾತಾಡಲು ತಡವರಿಸುವಂತಾಯ್ತು. ಆದರೂ ಪಟ್ಟುಬಿಡದೇ ಕಥೆ-ಕವನಗಳನ್ನು ಓದಿಸತೊಡಗಿದೆವು.
              
              <br /><br />
              ಈ ನಡುವೆ ಧ್ವನಿ ಶೈಕ್ಷಣಿಕ ಸಾಮಗ್ರಿಗಳ ಪಾತ್ರ ಮರೆಯುವಂತಿಲ್ಲ. ಮಕ್ಕಳ ಓದಿಗೆ ಕುತೂಹಲಕರ ಸಾಮಗ್ರಿಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದ 'ಧ್ವನಿ' ನಮ್ಮ ಪರಮಾಪ್ತ ಸ್ನೇಹಿತ. ಅದರಾಚೆ ಗ್ರಂಥಾಲಯ ಬಳಕೆ ಆರಂಭವಾಯಿತು. ಓದುವ ಮಕ್ಕಳು ಓದಿದ್ದನ್ನು ಬರೆಯುವುದು, ಸಂದೇಹಗಳನ್ನು ಬರೆದು ಕೇಳುವುದು, ಓದಿದ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಳ್ಳುವುದನ್ನು ಆರಂಭಿಸಿದರು.
              
              <br /><br />
              ಪಠ್ಯ ಹಾಗೂ ಹೊರಗಿನ ಪುಸ್ತಕಗಳೊಂದಿಗೆ ಒಡನಾಡುವುದನ್ನು ಕಲಿತ ಮಕ್ಕಳು ತಮ್ಮ ಅಭಿಪ್ರಾಯಗಳನ್ನು ಕವನ-ಕಥೆ ರೂಪದಲ್ಲಿ ದಾಖಲಿಸತೊಡಗಿದರು. ಅದಾಗಲೇ ಕಂಪ್ಯೂಟರ್ ಕಲಿಯುತ್ತಿದ್ದವರು ತಮ್ಮ ಕವನಗಳನ್ನು ತಾವೇ ಟೈಪ್ ಮಾಡತೊಡಗಿದರು. ೨೦೧೮ರಷ್ಟರೊತ್ತಿಗೆ ನಾನು ಪರಿಶೀಲಿಸಿದ ಕವನಗಳು ೧ ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು. ಅವುಗಳಲ್ಲಿ ಸುಮಾರು ೬೦೦ ಕ್ಕೂ ಹೆಚ್ಚು ಕವನಗಳನ್ನು ಉಳಿಸಿಕೊಂಡು ಮುದ್ರಿಸಿದೆವು. ಹೀಗೆ ಮುದ್ರಿಸಿದವುಗಳನ್ನು ಪುಸ್ತಕ ಮಾಡೋಣ ಎಂಬ ಆಲೋಚನೆ ಮೂಡಿತು.
            </p>
            
            <div className="gallery-preview1">
              <h3 className="kannada-title1">ಪ್ರಕಟಣಾ ಸಮಾರಂಭದ ಝಲಕಿ</h3>
              <div className="event-images1">
                <img src={launch1} alt="ಪುಸ್ತಕ ಪ್ರಕಟಣೆ ಸಮಾರಂಭ" />
                <img src={launch2} alt="ವಿದ್ಯಾರ್ಥಿ ಪ್ರದರ್ಶನ" />
                <img src={launch3} alt="ಅತಿಥಿ ಭಾಷಣ" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'authors' && (
          <div className="authors-section">
            <h2 className="kannada-title">ನಮ್ಮ ಪ್ರತಿಭಾವಂತ ಯುವ ಲೇಖಕರು</h2>
            <div className="authors-grid">
              {authors.map(author => (
                <div key={author.id} className="author-card">
                  <div className="author-photo">
                    <img src={author.photo} alt={author.name} />
                  </div>
                  <div className="author-details">
                    <h3 className="kannada-text">{author.name}</h3>
                    <p className="grade kannada-text">{author.grade}</p>
                    <p className="bio kannada-text">{author.bio}</p>
                    <div className="contributions">
                      <h4 className="kannada-text">ಕೊಡುಗೆಗಳು:</h4>
                      <ul>
                        {author.songs.map(song => (
                          <li key={song} className="kannada-text">{song}</li>
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
            <h2 className="kannada-title">ಹಾಡುಗಳ ಸಂಗ್ರಹ</h2>
            <div className="songs-list">
              {songs.map(song => (
                <div 
                  key={song.id} 
                  className={`song-card ${selectedSong === song.id ? 'expanded' : ''}`}
                  onClick={() => setSelectedSong(selectedSong === song.id ? null : song.id)}
                >
                  <div className="song-header">
                    <h3 className="kannada-text">{song.title}</h3>
                    <span className="page-number kannada-text">ಪುಟ {song.page}</span>
                  </div>
                  <p className="author kannada-text">ಲೇಖಕ: {song.author}</p>
                  <p className="theme kannada-text">ವಿಷಯ: {song.theme}</p>
                  {selectedSong === song.id && (
                    <div className="song-lyrics">
                      <h4 className="kannada-text">ಹಾಡಿನ ಸಾಲುಗಳು:</h4>
                      <p className="kannada-text">{song.lyrics}</p>
                      <button className="read-more kannada-text">ಪೂರ್ಣ ಹಾಡು ಓದಿ</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mentor' && (
          <div className="mentor-section">
            <h2 className="kannada-title">ಮಾರ್ಗದರ್ಶಕರು</h2>
            <div className="mentor-profile">
              <div className="mentor-photo">
                <img src={rudravadiPhoto} alt={publicationInfo.teacher.name} />
              </div>
              <div className="mentor-details">
                <h3 className="kannada-text">{publicationInfo.teacher.name}</h3>
                <p className="role kannada-text">{publicationInfo.teacher.role}</p>
                <p className="contribution kannada-text">{publicationInfo.teacher.contribution}</p>
                <blockquote className="kannada-text">
                  "ಈ ಯುವ ಕವಿಗಳು ತಮ್ಮ ರಚನೆಗಳಲ್ಲಿ ಅಸಾಧಾರಣ ಆಳವನ್ನು ತೋರಿಸಿದ್ದಾರೆ. ಅಂಕುರ ಅವರ ಸೃಜನಶೀಲ ಪ್ರಯಾಣದ ಪ್ರಾರಂಭ ಮಾತ್ರ."
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>

     
    </section>
  );
};

export default AnkurPublication;