import React from "react";
import "./CardDescription.css"

const CardDescription = ({ title, subtitle, price }) => {
  return (
    <div className="card-description-container">
      <div className="title-container">
        <div className="icon"></div>
        <span>{title}</span>
      </div>
      <span className="subtitle">{subtitle}</span>
      <br/>
      <br/>
      <span className="price">Bs {price}</span>
    </div>
  );
};

export default CardDescription;
