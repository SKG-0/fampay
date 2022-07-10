import { useEffect, useState } from "react";
import HC3Card from "./HC3Card";
const HC3CardView = ({ cardsData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cardsData?.[0].cards);
  }, [cardsData]);

  return (
    <div className="HC3-card-container">
      {data == undefined
        ? ""
        : data.map((card) => {
            return <HC3Card card={card} />;
          })}
    </div>
  );
};
export default HC3CardView;
