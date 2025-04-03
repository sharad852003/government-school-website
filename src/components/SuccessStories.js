import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const alumni = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      batch: "2005",
      achievement: "Cardiologist at AIIMS Delhi",
      quote: "The foundation from my school paved my medical career",
      image: "/images/alumni1.jpg" // Update path
    },
    {
      id: 2,
      name: "Rahul Deshmukh",
      batch: "2012",
      achievement: "IAS Officer, Maharashtra Cadre",
      quote: "My teachers' guidance shaped my civil service journey",
      image: "/images/alumni2.jpg" // Update path
    },
    {
      id: 3,
      name: "Neha Patil",
      batch: "2018",
      achievement: "Google Software Engineer",
      quote: "School's computer lab sparked my tech passion",
      image: "/images/alumni3.jpg" // Update path
    }
  ];

  return (
    <section className="success-stories">
      <div className="section-header">
        <h2>Where Our Students Shine</h2>
        <p>Proud alumni making waves across industries</p>
      </div>

      <div className="alumni-grid">
        {alumni.map((alum) => (
          <div key={alum.id} className="alumni-card">
            <div className="alumni-image">
              <img src={alum.image} alt={alum.name} />
              <div className="batch-badge">Batch {alum.batch}</div>
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
        <button className="btn-view-more">More Success Stories →</button>
      </div>
    </section>
  );
};

export default SuccessStories;