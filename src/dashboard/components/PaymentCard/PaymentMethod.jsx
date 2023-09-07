import React from "react";
import "./PaymentMethod.css";
const PaymentMethod = ({image, title}) => {
  return (
    <div className="payment-mode">
      <img src={image} alt={title} />
    </div>
  );
};

export default PaymentMethod;
