import { useEffect, useState } from "react";
import HC1Card from "./HC1Card";

const HC1CardView = ({ cardsData }) => {
  const [scrollCards, setscrollCards] = useState();
  const [nonscrollCards, setNonscrollCards] = useState();

  useEffect(() => {
    setscrollCards(cardsData?.scrollable);
    setNonscrollCards(cardsData?.nonScrollable);
  }, [cardsData]);

  return (
    <div>
      <div className="HC1-scrollable-cards-container">
        {scrollCards === undefined
          ? ""
          : scrollCards.map((card) => {
              return <HC1Card card={card} isScrollable={true} />;
            })}
      </div>

      <div className="HC1-nonscrollable-cards-container">
        {nonscrollCards === undefined
          ? ""
          : nonscrollCards.map((card) => {
              return <HC1Card card={card} isScrollable={false} />;
            })}
      </div>
    </div>
  );
};

export default HC1CardView;
