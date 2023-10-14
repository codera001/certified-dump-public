import React, { useEffect, useState } from "react";
import "./Payment.css";
import Layout from "../components/Layout/Layout";
import card from "../images/card.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ModalLayout from "../../component/ModalLayout";

const Payment = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [amt, setAmt] = useState("");
  const currency = sessionStorage.getItem("currency");
  const [activeCurrency, setActiveCurrency] = useState(null);
  const [open, setOpen] = useState(true);
  // console.log(curr);
  useEffect(() => {
    if (currency === null) setOpen(true);
  }, []);

  const handleSelect = (currency) => {
    setActiveCurrency(currency);
  };

  const handleClick = (amount) => {
    setAmt(amount);
    setSelectedButton(amount);
  };
  const Deposit = async () => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api-wallet/payment",
        {
          amount: Number(amt) * 100,
          userid: sessionStorage.getItem("userId"),
          callbackUrl: "https://certifieddump.com/payment-verification",
          currency: currency,
          customerFirstName: sessionStorage.getItem("userFirstname"),
          customerLastName: sessionStorage.getItem("userLastname"),
          customerPhoneNumber: sessionStorage.getItem("userNo"),
          email: sessionStorage.getItem("userEmail"),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response);
      // navigate(response.data.authorizationUrl);
      sessionStorage.setItem("paymentRef", response.data.reference);
      window.location.href = response.data.authorizationUrl;
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Layout>
      <div className="d-payment">
        <h3>Top up your balance</h3>
        <div className="d-payment-body">
          <h4>1. Choose a payment method</h4>
          <div className="d-payment-modes">
            <div className="payment-mode">
              <img loading="lazy" src={card} alt="card payment method" />
            </div>
          </div>
          <h4>2. Specify top up amount</h4>
          <div className="d-amounts">
            <button
              className={selectedButton === "10" ? "selected" : ""}
              onClick={() => handleClick("10")}
            >
              $10
            </button>
            <button
              className={selectedButton === "50" ? "selected" : ""}
              onClick={() => handleClick("50")}
            >
              $50
            </button>
            <button
              className={selectedButton === "100" ? "selected" : ""}
              onClick={() => handleClick("100")}
            >
              $100
            </button>
            <input
              type="number"
              onChange={(e) => {
                setAmt(e.target.value);
                setSelectedButton(null);
              }}
              placeholder="Other amount"
              value={amt}
            />
          </div>
          <div className="d-payment-btn">
            <button
              className="d-sec-btn"
              onClick={() => {
                if (currency === null) {
                  setOpen(true);
                } else if (amt) {
                  Deposit();
                } else toast.error("Please enter an amount to pay");
              }}
            >
              Pay
            </button>
          </div>
          <p>
            You will be redirected to the payment page of the chosen service
          </p>
        </div>
        <>
          {open ? (
            <ModalLayout>
              <h3 style={{ color: "black" }}>
                Please select a currency option for transactions
              </h3>
              <h5 style={{ color: "red" }}>
                Kindly note that this decision cannot be reversed!
              </h5>
              <div className="submit-cancel-Btn">
                <button
                  className={`curr ${activeCurrency === "USD" ? "active" : ""}`}
                  onClick={() => {
                    handleSelect("USD");
                    sessionStorage.setItem("currency", "USD");
                  }}
                >
                  USD
                </button>
                <button
                  className={`curr ${activeCurrency === "NGN" ? "active" : ""}`}
                  onClick={() => {
                    handleSelect("NGN");
                    sessionStorage.setItem("currency", "NGN");
                  }}
                >
                  Naira
                </button>
              </div>
              <button style={{ margin: "1rem 0 0" }} onClick={setOpen(false)}>
                I will do that later
              </button>
            </ModalLayout>
          ) : (
            ""
          )}
        </>
      </div>
    </Layout>
  );
};

export default Payment;
