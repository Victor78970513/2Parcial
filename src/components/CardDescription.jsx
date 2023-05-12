import React from "react";

const CardDescription = ({ title, subtitle, price }) => {
  return (
    <div>
      <div>
        <span>{title}</span>
      </div>
      <span>{subtitle}</span>
      <span>{price}</span>
    </div>
  );
};

export default CardDescription;
