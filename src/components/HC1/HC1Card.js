import "../../Stylesheets/HC1Card.css";
import React from "react";
const HC1Card = ({ card, isScrollable }) => {
  //function for formatted text to render according to colours
  const FormattedText = (text, entities, textName) => {
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
    <div className={isScrollable ? "" : "non-scrollable"}>
      <a href={card.url} style={{ textDecoration: "none", color: "black" }}>
        <div
          className="HC1-card"
          style={{
            width: isScrollable ? "65vw" : "100%",
            backgroundColor: card.bg_color,
          }}
        >
          <img
            className="HC1-card-icon"
            src={card.icon.image_url}
            alt="Loading"
            style={{ height: "24px" }}
          />
          <p className="HC1-card-title">
            {FormattedText(
              card.formatted_title.text,
              card.formatted_title.entities
            )}
          </p>
        </div>
      </a>
    </div>
  );
};

export default HC1Card;
