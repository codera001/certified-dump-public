import React, { useState } from "react";
import "./Card.css";
import { BsDownload } from "react-icons/bs";
import axios from "axios";

const Card = ({ image, title, file, provider, cost, date }) => {
  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFile = async () => {
    if (!file) {
      setError("No file specified.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(file, {
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(res.data);
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-card">
      <div className="d-card-img">
        <button onClick={getFile} disabled={loading} aria-label="Download File">
          <BsDownload />
        </button>
        <img loading="lazy" src={image} alt={title} />
      </div>
      <div className="d-card-details">
        <p className="d-title">{title}</p>
        <p className="d-cost">{cost}</p>
        <p>{date}</p>
        <p>{provider}</p>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    </div>
  );
};

export default Card;
