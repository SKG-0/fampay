import React, { useEffect, useRef, useState } from "react";
import "../../Stylesheets/HC3Card.css";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
const HC3Card = ({ card }) => {
  const buttons = useRef(null);
  const [cardDetails, setCardDetails] = useState();
  const [cardState, setCardState] = useState(false);
  const rightBox = useRef(null);
  useEffect(() => {
    setCardDetails(card);
  }, [card]);
  //change class name for display right buttons
  const startTouch = () => {
    if (!timer) {
      timer = setTimeout(() => {
        buttons.current.classList.toggle("displayButtons");
        rightBox.current.classList.toggle("moveRight");
      }, 500);
    }
  };
  const endTouch = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  //function for rendering formatted text according to different colours
  const FormattedText = (text, entities, textName) => {
    let splittedArray = text.split("{}");
    let first = splittedArray[0];
    splittedArray = splittedArray.slice(1, splittedArray.length);
    return (
      <React.Fragment>
        <b
          style={{
            color: "white",
            fontWeight: textName == "description" ? "400" : "500",
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
                color: "white",
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
  let timer;

  return (
    <>
      {!cardDetails || cardState ? (
        <div />
      ) : (
        <div className="HC3-card">
          <div className="HC3-card-right-buttons" ref={buttons}>
            <div
              className="HC3-card-right-btn"
              onClick={() => {
                //set card details to null so that on refresh it can be loaded
                setCardDetails(null);
              }}
            >
              <img alt="Loading..." src={image1} style={{ height: "17px" }} />
              <p className="HC3-card-right-btn-text">remind later</p>
            </div>

            <div
              className="HC3-card-right-btn"
              onClick={() => {
                //set card state to true so that on refresh the component doesn't displays
                setCardState(true);
              }}
            >
              <img alt="Loading..." src={image2} style={{ height: "17px" }} />
              <p className="HC3-card-right-btn-text">dismiss now</p>
            </div>
          </div>

          <div
            className="HC3-card-data"
            tabIndex="0"
            onTouchStart={startTouch}
            onTouchEnd={endTouch}
            ref={rightBox}
            style={{
              backgroundColor: cardDetails.bg_color,
              backgroundImage: `url(${cardDetails.bg_image.image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h2 style={{ marginTop: "50%" }}>
              {FormattedText(
                cardDetails.formatted_title.text,
                cardDetails.formatted_title.entities,
                "title"
              )}
            </h2>
            <p style={{ marginTop: "1.7rem" }}>
              {FormattedText(
                cardDetails.formatted_description.text,
                cardDetails.formatted_description.entities,
                "description"
              )}
            </p>
            <a href={cardDetails.cta[0].url}>
              <button
                style={{
                  backgroundColor: cardDetails.cta[0].bg_color,
                  color: cardDetails.cta[0].text_color,
                }}
                className="HC3-card-btn"
              >
                {cardDetails.cta[0].text}
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default HC3Card;
