import React from "react";
import "./Card.css";
const Card = ({image, title, provider, cost, date}) => {
  return (
    <div className="card" >
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-details">
        <p className="title">{title}</p>
        <p className="cost">{ cost }</p>
        <p>{ date }</p>
        <p>{provider}</p>
      </div>
    </div>
  );
};

export default Card;
