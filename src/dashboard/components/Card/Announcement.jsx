import React from "react";
import "./Card.css";

const Announcement = ({ image, title, body, date }) => {
  return (
    // <div className="d-card">
      <>
        <div className="d-card-img d-admin-card">
          <img loading="lazy" src={image} alt={title} />
        </div>
        <div className="d-card-details">
          <p style={{ fontWeight: "bold" }} className="d-title">
            {title}
          </p>
          <p className="d-cost">{body}</p>
          <p style={{ fontSize: "0.6rem" }}>{date}</p>
        </div>
      </>
    // </div>
  );
};

export default Announcement;
