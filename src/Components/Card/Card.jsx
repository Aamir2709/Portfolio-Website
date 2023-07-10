import React from "react";
import "./Card.css";
import github from "../../img/github1.png";

const Card = ({ emoji, heading, detail, link, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>

      <a href={link}>
        <img src={github} alt="" style={{ transform: "scale(0.6)", cursor:"pointer" }} />
      </a>
    </div>
  );
};

export default Card;
