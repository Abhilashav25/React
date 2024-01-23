import React from "react";
import ProfilePic from "../Assets/Abhi.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Perseverance is the hard work you do after you get tired of doing the hard work you already did.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Success is not final!
          Failure is not Fatal!
          It is the courage to continue that counts.
          
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Abhilasha Gowda</h2>
      </div>
    </div>
  );
};

export default Testimonial;
