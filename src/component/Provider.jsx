import React from "react";
import cisco from "../static/cisco.png";
import { Link } from "react-router-dom";

const Provider = ({title, providerName, i, text, price }) => {
  return (
    <div key={i} className="card card-body">
      <div className="card-image">
        <img src={cisco} alt="" />
      </div>
      <h4>{title}</h4>
      <h4>{price}</h4>
      <div className="card-footer py-0">
        <Link to={providerName} className="card-text">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Provider;
