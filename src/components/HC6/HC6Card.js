import "../../Stylesheets/HC6Card.css";
import React from "react";
import arrow from "../../assets/arrow.svg";
const HC6Card = ({ card }) => {
  //function for rendering formatted text with the colours accordingly
  const FormattedText = (text, entities) => {
    let splittedArray = text.split("{}");
    let first = splittedArray[0];
    splittedArray = splittedArray.slice(1, splittedArray.length);
    return (
      <React.Fragment>
        <b
          style={{
            fontWeight: "500",
            fontFamily: "Roboto,sans-serif",
          }}
        >
          {first}
        </b>
        {splittedArray.map((txt, index) => (
          <>
            <b
              style={{
                color: entities[index].color,
                paddingRight: 5,
                fontFamily: "Roboto,sans-serif",
              }}
            >
              {entities[index].text}
            </b>
            <b
              style={{
                paddingRight: 5,
                fontFamily: "Roboto,sans-serif",
              }}
            >
              {txt}
            </b>
          </>
        ))}
      </React.Fragment>
    );
  };
  return (
    <a href={card.url} style={{ textDecoration: "none", color: "black" }}>
      <div className="HC6-card">
        <div className="HC6-card-content">
          <img src={card.icon.image_url} alt="Loading..." height="30" />
          <p style={{ marginLeft: "1rem" }}>
            {FormattedText(
              card.formatted_title.text,
              card.formatted_title.entities
            )}
          </p>
        </div>
        <img src={arrow} height="12" />
      </div>
    </a>
  );
};

export default HC6Card;
