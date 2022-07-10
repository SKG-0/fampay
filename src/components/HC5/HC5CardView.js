import { useEffect, useState } from "react";
import HC5Card from "./HC5Card";
import "../../Stylesheets/HC5Card.css";
import React from "react";
const HC5CardView = ({ cardsData }) => {
  const [data, setData] = useState();
  useEffect(() => {
    //collecting data of all cards with HC5 type
    const tempCards = [];
    cardsData?.forEach((card) => {
      tempCards.push(...card.cards);
    });
    setData(tempCards);
  }, [cardsData]);
  return (
    <div className="HC5-cards-container">
      {data === undefined
        ? ""
        : data.map((card) => {
            return <HC5Card card={card} />;
          })}
    </div>
  );
};

export default HC5CardView;
