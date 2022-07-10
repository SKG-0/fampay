import { useEffect, useState } from "react";
import HC6Card from "./HC6Card";

const HC6CardView = ({ cardsData }) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(cardsData?.[0].cards);
  }, [cardsData]);

  return (
    <div className="HC6-card-container">
      {data === undefined
        ? ""
        : data.map((card) => {
            return <HC6Card card={card} />;
          })}
    </div>
  );
};
export default HC6CardView;
