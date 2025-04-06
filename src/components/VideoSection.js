import React from "react";
import "./VideoSection.css";

// Import your videos
import video1 from "../assets/video.mp4";
import video2 from "../assets/video1.mp4";
import video3 from "../assets/video1.mp4";

const videos = [
  {
    title: "🏫 School Tour",
    description: "Take a virtual walk through our school campus.",
    src: video1,
    filename: "school-tour.mp4"
  },
  {
    title: "🎉 Annual Function",
    description: "Highlights from our school's annual celebration.",
    src: video2,
    filename: "annual-function.mp4"
  },
  {
    title: "📚 Classroom Activity",
    description: "Interactive classroom session with students.",
    src: video3,
    filename: "classroom-activity.mp4"
  }
];

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2 className="video-title">🎥 School Video Highlights</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <video className="video-player" controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <a
                href={video.src}
                download={video.filename}
                className="download-btn"
              >
                📥 Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
