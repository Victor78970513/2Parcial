import React from "react";
import "./CardDescription.css";
import Button from "./Button";

const CardDescription = ({ title, subtitle, price }) => {
  return (
    <div className="card-description-container">
      <div className="title-container">
        <div className="icon">
            <div style={{width:"6px",height:"6px",background: "#2D9737",borderRadius:"30px",marginTop:"3px",marginLeft:"3px"}}></div>
        </div>
        <span>{title}</span>
      </div>
      <span className="subtitle">{subtitle}</span>
      <br />
      <br />
      <div className="price-container">
        <span className="price">Bs {price}</span>
        <Button/>
      </div>
    </div>
  );
};

export default CardDescription;
