import React, { useState } from 'react';
import './SuccessStories.css';
import alumni1 from '../assets/student.jpeg';
import alumni2 from '../assets/student.jpeg';
import alumni3 from '../assets/student.jpeg';
import alumni4 from '../assets/student.jpeg';
import alumni5 from '../assets/student.jpeg';
import alumni6 from '../assets/student.jpeg';

const SuccessStories = () => {
  const [showAll, setShowAll] = useState(false);

  const alumni = [
    {
      id: 1,
      name: "Avinash",
      batch: "Batch of 2005",
      achievement: "Teacher",
      quote: "The strong foundation from our school guided me to pursue teaching.",
      image: alumni1
    },
    {
      id: 2,
      name: "Rakesh",
      batch: "Batch of 2012",
      achievement: "Software Engineer",
      quote: "My teachers' guidance shaped my journey into civil services.",
      image: alumni2
    },
    {
      id: 3,
      name: "Suresh",
      batch: "Batch of 2018",
      achievement: "Software Engineer",
      quote: "Our school's computer lab sparked my passion for technology.",
      image: alumni3
    },
    {
      id: 4,
      name: "Priya",
      batch: "Batch of 2010",
      achievement: "Software Engineer",
      quote: "The science classes here fueled my ambition to become a doctor.",
      image: alumni4
    },
    {
      id: 5,
      name: "Manoj",
      batch: "Batch of 2008",
      achievement: "Entrepreneur",
      quote: "Leadership skills I learned in school helped me build my own company.",
      image: alumni5
    },
    {
      id: 6,
      name: "ರಘು",
      batch: "೨೦೧೪ ಬ್ಯಾಚ್",
      achievement: "ಅಧ್ಯಾಪಕ",
      quote: "ನಮ್ಮ ಶಾಲೆಯ ಶಿಕ್ಷಕರ ಪ್ರೇರಣೆ ನನಗೆ ಅಧ್ಯಾಪಕರಾಗಲು ಮಾರ್ಗದರ್ಶನ ನೀಡಿತು.",
      image: alumni6
    }
  ];

  const visibleAlumni = showAll ? alumni : alumni.slice(0, 3);

  return (
    <section className="success-stories">
      <div className="section-header">
        <h2>Where Our Students Shine</h2>
        <p>Meet the proud alumni who have left a mark in various fields</p>
      </div>

      <div className="alumni-grid">
        {visibleAlumni.map((alum) => (
          <div key={alum.id} className="alumni-card">
            <div className="alumni-image">
              <img src={alum.image} alt={alum.name} />
              <div className="batch-badge">{alum.batch}</div>
            </div>
            <div className="alumni-details">
              <h3>{alum.name}</h3>
              <p className="achievement">{alum.achievement}</p>
              <blockquote>"{alum.quote}"</blockquote>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button
          className="btn-view-more"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less ▲' : 'View More Success Stories →'}
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;
