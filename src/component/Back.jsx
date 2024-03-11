import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Back = ({ path }) => {
  return (
    <Link
      to={path}
      className="back d-flex justify-content-between align-items-center arrow-text"
      style={{ fontWeight: "bolder" }}
    >
      <TiArrowLeftThick style={{ color: "black", marginRight: "0.5rem" }} />
      Back
    </Link>
  );
};

export default Back;
