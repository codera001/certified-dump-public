import React from "react";
import "./Card.css";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
const Card = ({ image, title, provider, cost, date }) => {
  return (
    <div className="d-card">
      <div className="d-card-img">
        <Link to={image} download={true}>
          <BsDownload />
        </Link>
        <img src={image} alt={title} />
      </div>
      <div className="d-card-details">
        <p className="d-title">{title}</p>
        <p className="d-cost">{cost}</p>
        <p>{date}</p>
        <p>{provider}</p>
      </div>
    </div>
  );
};

export default Card;
