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
      name: "ಶ್ರೀ ಪಂಪಾಪತಿ ಗಡ್ಗೆರೆ",
      role: "ಮುಖ್ಯೋಪಾಧ್ಯಾಯರು ಮತ್ತು ಗಣಿತ ಶಿಕ್ಷಕರು",
      experience: "28 ವರ್ಷಗಳ ಅನುಭವ",
      specialty: "ಗಣಿತ, ವಿಜ್ಞಾನ ಮತ್ತು ಶಾಲಾ ಆಡಳಿತ",
      achievement: " ಶಾಲೆಯ ಮೂಲಸೌಕರ್ಯವನ್ನು ಪರಿವರ್ತಿಸಿದ್ದಾರೆ",
      image: headmasterPhoto
    },
    {
      id: 2,
      name: "ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ",
      role: "ಸಾಮಾಜಿಕ ವಿಜ್ಞಾನ ಶಿಕ್ಷಕರು, ಕನ್ನಡ",
      experience: "22 ವರ್ಷಗಳ ಅನುಭವ",
      specialty: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಮತ್ತು ಸಾಮಾಜಿಕ ಅಧ್ಯಯನ",
      achievement: "ವಿದ್ಯಾರ್ಥಿ ಕವನ ಸಂಕಲನ 'ಅಂಕುರ'ದ ಸಂಪಾದಕರು, ರೇಡಿಯೋ/ಟಿವಿ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿ ಕೃತಿಗಳ ಪ್ರಸಾರ",
      image: rudravadiPhoto
    },
    {
      id: 3,
      name: "ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ",
      role: "ಸಾಮಾಜಿಕ ವಿಜ್ಞಾನ ಶಿಕ್ಷಕರು, ಕನ್ನಡ",
      experience: "",
      specialty: "",
      achievement: "",
      image: teacher1Photo
    },
    {
      id: 4,
      name: "ಶ್ರೀ ರವೀಂದ್ರ ಎಸ್. ರುದ್ರವಾಡಿ",
      role: "ಸಾಮಾಜಿಕ ವಿಜ್ಞಾನ ಶಿಕ್ಷಕರು, ಕನ್ನಡ",
      experience: "",
      specialty: "",
      achievement: "",
      image: teacher2Photo
    }
  ];

  return (
    <section className="faculty-spotlight">
      <div className="section-header">
        <h2 className="kannada-title">ನಮ್ಮ ಪ್ರೇರಣಾದಾಯಕ ಶಿಕ್ಷಕ ಮಂಡಳಿ</h2>
        <p className="kannada-subtitle">ಯುವ ಮನಸ್ಸುಗಳನ್ನು ರೂಪಿಸುವ ನಿಷ್ಠಾವಂತ ಶಿಕ್ಷಕರು</p>
      </div>

      <div className="faculty-grid">
        {faculty.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <div className="teacher-image">
              <img src={teacher.image} alt={teacher.name} />
              {teacher.experience && <div className="experience-badge">{teacher.experience}</div>}
            </div>
            <div className="teacher-details">
              {teacher.name && <h3 className="kannada-text">{teacher.name}</h3>}
              {teacher.role && <p className="role kannada-text">{teacher.role}</p>}
              {teacher.specialty && (
                <div className="specialty kannada-text">
                  <span>ವಿಶೇಷತೆ:</span> {teacher.specialty}
                </div>
              )}
              {teacher.achievement && (
                <div className="achievement kannada-text">
                  <span>ಗಮನಾರ್ಹ ಸಾಧನೆ:</span> {teacher.achievement}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button className="btn-view-all kannada-text">ಎಲ್ಲಾ ಶಿಕ್ಷಕರನ್ನು ವೀಕ್ಷಿಸಿ →</button>
      </div>
    </section>
  );
};

export default Teachers;