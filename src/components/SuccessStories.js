import React from 'react';
import './SuccessStories.css';
import alumni1 from '../assets/photo.jpg'; // Update with your actual paths
import alumni2 from '../assets/photo.jpg';
import alumni3 from '../assets/photo.jpg';

const SuccessStories = () => {
  const alumni = [
    {
      id: 1,
      name: "Avi",
      batch: "2005",
      achievement: "teacher",
      quote: "ನಮ್ಮ ಶಾಲೆಯ ಅಡಿಪಾಯವು ನನ್ನ ವೈದ್ಯಕೀಯ ವೃತ್ತಿಜೀವನಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಿತು",
      image: alumni1
    },
    {
      id: 2,
      name: "",
      batch: "2012",
      achievement: "",
      quote: "ನನ್ನ ಶಿಕ್ಷಕರ ಮಾರ್ಗದರ್ಶನ ನನ್ನ ಸಿವಿಲ್ ಸರ್ವಿಸ್ ಪ್ರಯಾಣವನ್ನು ರೂಪಿಸಿತು",
      image: alumni2
    },
    {
      id: 3,
      name: "suresh",
      batch: "2018",
      achievement: "ಸಾಫ್ಟ್ವೇರ್ ಇಂಜಿನಿಯರ್",
      quote: "ಶಾಲೆಯ ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್ ನನ್ನ ತಂತ್ರಜ್ಞಾನದ ಬಗ್ಗೆ ಆಸಕ್ತಿಯನ್ನು ಮೂಡಿಸಿತು",
      image: alumni3
    }
  ];

  return (
    <section className="success-stories">
      <div className="section-header">
        <h2>ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು ಹೊಳೆಯುವೆಡೆ</h2>
        <p>ವಿವಿಧ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ತಮ್ಮ ಮುದ್ರೆಯನ್ನು ಮೂಡಿಸಿರುವ ಹೆಮ್ಮೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು</p>
      </div>

      <div className="alumni-grid">
        {alumni.map((alum) => (
          <div key={alum.id} className="alumni-card">
            <div className="alumni-image">
              <img src={alum.image} alt={alum.name} />
              <div className="batch-badge">{alum.batch} ಬ್ಯಾಚ್</div>
            </div>
            <div className="alumni-details">
              <h3>{alum.name}</h3>
              <p className="achievement">{alum.achievement}</p>
              <blockquote>" {alum.quote} "</blockquote>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button className="btn-view-more">ಹೆಚ್ಚಿನ ಯಶಸ್ಸಿನ ಕಥೆಗಳು →</button>
      </div>
    </section>
  );
};

export default SuccessStories;