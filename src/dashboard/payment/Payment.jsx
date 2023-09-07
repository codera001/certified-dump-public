import React from "react";
import "./Payment.css";
import Layout from "../components/Layout/Layout";
import { Button } from "../components/Button/Button";
import PaymentMethod from "../components/PaymentCard/PaymentMethod";
import paystack from "../images/paystack.png";
import card from "../images/card.jpg";
import flutterwave from "../images/flutterwave.jpg";

const Payment = () => {
  const paymentMethods = [
    {
      image: card,
      name: "Pay with card",
    },
    {
      image: paystack,
      name: "Pay with Paystack",
    },
    {
      image: flutterwave,
      name: "Pay with Flutterwave",
    },
  ];
  return (
    <Layout>
      <div className="d-payment">
        <h3>Top up your balance</h3>
        <h4>1. Choose a payment method</h4>
        <div className="d-payment-modes">
          {paymentMethods.map((item, i) => (
            <PaymentMethod key={i} title={item.name} image={item.image} />
          ))}
        </div>
        <h4>2. Specify top up amount</h4>
        <div className="d-amounts">
          <Button>$10</Button>
          <Button>$50</Button>
          <Button>$100</Button>
          <input type="number" placeholder="Other amount" />
        </div>
        <div className="d-payment-btn">
          <Button>Pay</Button>
        </div>
        <p>You will be redirected to the payment page of the chosen service</p>
      </div>
    </Layout>
  );
};

export default Payment;
