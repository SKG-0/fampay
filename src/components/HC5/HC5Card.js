import "../../Stylesheets/HC5Card.css";
import React from "react";
const HC5Card = ({ card }) => {
  return (
    <a href={card.url}>
      <img className="HC5-card" src={card.bg_image.image_url} alt="Loading" />
    </a>
  );
};

export default HC5Card;
