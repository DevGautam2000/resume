import React from "react";
import cards from "../../util/cardData";
import Card from "../Card/Card";
import "./Body.css";

const Body = () => {
  return (
    <div className="body__main">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          images={card.images}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Body;
