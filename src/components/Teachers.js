import React from 'react';
import './Teachers.css';
import rudravadiPhoto from '../assets/ravisir.jpg';
import headmasterPhoto from '../assets/ravisir.jpg';
import teacher1Photo from '../assets/ravisir.jpg';
import teacher2Photo from '../assets/ravisir.jpg';

const Teachers = () => {
  const faculty = [
    {
      id: 1,
      name: "Shri Pampapati Gadgere",
      role: "Headmaster & Mathematics Teacher",
      experience: "28 years",
      specialty: "Mathematics Pedagogy & School Administration",
      achievement: "Recipient of State Best Teacher Award 2020, Transformed school infrastructure",
      image: headmasterPhoto
    },
    {
      id: 2,
      name: "Shri Ravindra S. Rudravadi",
      role: "Senior Science Teacher",
      experience: "22 years",
      specialty: "Physics & Environmental Science",
      achievement: "Pioneer in STEM education, Published research papers",
      image: rudravadiPhoto
    },
    {
      id: 3,
      name: "Mrs. Sunita Deshpande",
      role: "Mathematics HOD",
      experience: "25 years",
      specialty: "Algebra & Calculus",
      achievement: "National Best Teacher Award 2022",
      image: teacher1Photo
    },
    {
      id: 4,
      name: "Mr. Rajesh Joshi",
      role: "Science Coordinator",
      experience: "18 years",
      specialty: "Physics & STEM Education",
      achievement: "State Curriculum Developer",
      image: teacher2Photo
    }
  ];

  return (
    <section className="faculty-spotlight">
      <div className="section-header">
        <h2>Meet Our Inspiring Faculty</h2>
        <p>Dedicated educators shaping young minds</p>
      </div>

      <div className="faculty-grid">
        {faculty.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <div className="teacher-image">
              <img src={teacher.image} alt={teacher.name} />
              <div className="experience-badge">{teacher.experience}</div>
            </div>
            <div className="teacher-details">
              <h3>{teacher.name}</h3>
              <p className="role">{teacher.role}</p>
              <div className="specialty">
                <span>Specializes in:</span> {teacher.specialty}
              </div>
              <div className="achievement">
                <span>Notable Achievement:</span> {teacher.achievement}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button className="btn-view-all">View All Faculty Members →</button>
      </div>
    </section>
  );
};

export default Teachers;