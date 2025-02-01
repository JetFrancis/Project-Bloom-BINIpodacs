import React from "react";
import "../assets/styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <div className="about-title">
            BINI, redefining <span className="highlight">PPOP</span>
          </div>
          <p className="about-description">
            Discover the story behind the sensational girl group, with their
            vibrant energy and captivating performances.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="about-image">
          <img
            src="src/assets/images/about_img.png"
            alt="BINI group in pink outfits"
            className="group-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
