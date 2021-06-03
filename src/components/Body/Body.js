import React from "react";
import cards from "../../util/cardData";
import Card from "../Card/Card";
import "./Body.css";

const Body = () => {
  return (
    <div className="body__main">
      {cards.map(({ id, name, images, description }) => (
        <Card key={id} name={name} images={images} description={description} />
      ))}
    </div>
  );
};

export default Body;
