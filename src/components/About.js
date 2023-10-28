import React from "react";
import "./About.css"; // Make sure to create a separate CSS file for styling
import profileImage from "../assets/images/profile.jpeg"; // Import your profile image

const About = (props) => {
  return (
    <section id="about">
      <div className="about-card">
        <div className="card-content">
          <div className="profile-image">
            <img
              src={profileImage} // Use the imported profile image
              alt="Your Name"
              className="profile-img"
            />
          </div>
          <div className="text-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">{props.about.start}</p>
            <p className="about-text">{props.about.exit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
