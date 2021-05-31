import React from "react";
import "./Card.css";

function Card({ name, description, images }) {
  return (
    <div className="card__main">
      <h4>{name}</h4>
      <div className="card__img__container">
        {images.map((image, index) => (
          <img className="card__img" key={index} src={image} alt="" />
        ))}
      </div>
      <div className="card__popup">{description}</div>
    </div>
  );
}

export default Card;
