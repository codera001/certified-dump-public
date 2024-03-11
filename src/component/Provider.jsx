import React from "react";
import { Link } from "react-router-dom";

const Provider = ({ title, providerName, image, i, text, price }) => {
  return (
    <div key={i} className="card-body">
      <div className="card-image">
        <img loading="lazy" src={image} alt="" />
      </div>
      <h5>{title}</h5>
      <h6>{price}</h6>
      <div className="card-footer py-2">
        <Link to={providerName} className="card-text">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Provider;
