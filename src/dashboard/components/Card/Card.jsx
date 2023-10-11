import React from "react";
import "./Card.css";
import { BsDownload } from "react-icons/bs";
import axios from "axios";

const Card = ({ image, title, file, provider, cost, date }) => {
  const token = sessionStorage.getItem("token");
  const getFile = async () => {
    try {
      const res = await axios.get(file, {
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      const data = await res.blob();
      console.log(data);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(data);
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-card">
      <div className="d-card-img">
        <button onClick={getFile}>
          <BsDownload />
        </button>
        <img loading="lazy" src={image} alt={title} />
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
