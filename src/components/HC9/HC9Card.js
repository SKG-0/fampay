import "../../Stylesheets/HC9Card.css";
import React from "react";
const HC9Card = ({ card, height }) => {
  return (
    <a href={card.url} style={{ margin: "8px" }}>
      <img
        className="dynamic-width-cards"
        src={card.bg_image.image_url}
        alt="card"
        style={{ height: `${height}px` }}
      />
    </a>
  );
};
export default HC9Card;
