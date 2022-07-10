//fetching data from api
const fetchedData = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17"
  );
  return await response.json();
};

const data = async () => {
  const { card_groups: cardGroups } = await fetchedData();
  //grouping data according to design_types
  const HC3Cards = cardGroups.filter((card) => card.design_type === "HC3");
  const HC6Cards = cardGroups.filter((card) => card.design_type === "HC6");
  const HC5Cards = cardGroups.filter((card) => card.design_type === "HC5");
  const HC9Cards = cardGroups.filter((card) => card.design_type === "HC9");
  const scrollableHC1Cards = cardGroups.filter(
    (card) => card.design_type === "HC1" && card["is_scrollable"] === true
  );
  const nonScrollableHC1Cards = cardGroups.filter(
    (card) => card.design_type === "HC1" && card["is_scrollable"] === false
  );
  const HC1Cards = {
    scrollable: scrollableHC1Cards[0].cards,
    nonScrollable: nonScrollableHC1Cards[0].cards,
  };
  return {
    HC3Cards,
    HC6Cards,
    HC5Cards,
    HC9Cards,
    HC1Cards,
  };
};

export default data;
