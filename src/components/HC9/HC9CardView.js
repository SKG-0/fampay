import { useState, useEffect } from "react";
import HC9Card from "./HC9Card";
import React from "react";
const HC9CardView = ({ cardsData }) => {
  const [height, setHeight] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setData(cardsData?.[0].cards);
    setHeight(cardsData?.[0].height);
  }, [cardsData]);

  return (
    <div className="HC9-card-container">
      {data === undefined
        ? ""
        : data.map((card) => {
            return <HC9Card card={card} height={height} />;
          })}
    </div>
  );
};

export default HC9CardView;
