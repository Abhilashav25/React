import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Eating a variety of foods from all food groups ensures a balanced intake of nutrients. A healthy diet includes a mix of fruits, vegetables, whole grains, lean proteins, and healthy fats. 
        Consistently choosing natural, minimally processed foods can contribute to overall health and well-being.
        </p>
        <p className="primary-text">
        It's also important to consider portion sizes and to listen to your body's hunger and fullness signals.
        For more personalized advice, consider consulting with a registered dietitian who can help tailor dietary choices to your individual needs.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
