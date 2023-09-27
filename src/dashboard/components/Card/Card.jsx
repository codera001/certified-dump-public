import React, { useEffect } from "react";
import "./Card.css";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
const Card = ({ image, title, provider, cost, date }) => {
  const getImage = async () => {
    try {
      const res = await fetch(image, {
        headers: {
          "Content-Type": "image",
        },
      });
      // console.log(res);
      const data = await res.blob();
      // console.log(data);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(data);
      link.download = `${title}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {}
  };

  return (
    <div className="d-card">
      <div className="d-card-img">
        <button onClick={getImage}
        >
          <BsDownload />
        </button>
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
