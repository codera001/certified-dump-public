import React, { useState } from "react";
import "./Payment.css";
import Layout from "../components/Layout/Layout";
import card from "../images/card.jpg";
import axios from "axios";
import toast from "react-hot-toast";
import loader from "../../static/loader.gif";
import { useNavigate } from "react-router-dom";
import CurrencyUpdate from "../overview/Currency";

const Payment = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [amt, setAmt] = useState("");
  const [mode, setMode] = useState(null);
  const [loading, setLoading] = useState(false);
  const currency = sessionStorage.getItem("currency");
  const [showPop, setShowPop] = useState(false);
  const navigate = useNavigate();
  const handleSelect = (modetype) => {
    setMode(modetype);
  };
  const handleClick = (amount) => {
    setAmt(amount);
    setSelectedButton(amount);
  };

  const Deposit = async () => {
    setLoading(!loading);
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
          customerPhoneNumber: sessionStorage.getItem("userPhone"),
          email: sessionStorage.getItem("userEmail"),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      sessionStorage.setItem("paymentRef", response.data.reference);
      window.location.href = response.data.authorizationUrl;
    } catch (error) {
      if (
        error.response.data.error ==
        "Missing required fields: customerPhoneNumber"
      ) {
        toast.error(
          "Please update your phone number in order to make transactions"
        );
        navigate("/profile");
      } else {
        toast.error("Can't make USD payments now. Please try again later!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="d-payment">
        <h3>Top up your balance</h3>
        <div className="d-payment-body">
          <h4>1. Choose a payment method</h4>
          <div className="d-payment-modes">
            <div
              className={`payment-mode ${
                mode === "Card" ? "payment-active" : ""
              }`}
              onClick={() => {
                handleSelect("Card");
              }}
            >
              <img loading="lazy" src={card} alt="card payment method" />
            </div>
          </div>
          <h4>2. Specify top up amount</h4>
          {currency === "NGN" ? (
            <div className="d-amounts">
              <button
                className={selectedButton === "5000" ? "selected" : ""}
                onClick={() => handleClick("5000")}
              >
                <s style={{ textDecorationStyle: "double" }}>N</s>5,000
              </button>
              <button
                className={selectedButton === "10000" ? "selected" : ""}
                onClick={() => handleClick("10000")}
              >
                <s style={{ textDecorationStyle: "double" }}>N</s>10,000
              </button>
              <button
                className={selectedButton === "20000" ? "selected" : ""}
                onClick={() => handleClick("20000")}
              >
                <s style={{ textDecorationStyle: "double" }}>N</s>20,000
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
          ) : (
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
          )}
          <div className="d-payment-btn">
            {currency === "NGN" ? (
              <button
                className="d-sec-btn"
                onClick={() => {
                  if (currency !== "NGN" && currency !== "USD") {
                    setShowPop(!showPop);
                  } else if (amt) {
                    Deposit();
                  } else toast.error("Please enter an amount to pay");
                }}
              >
                {loading ? (
                  <img
                    loading="lazy"
                    src={loader}
                    alt="loading gif"
                    className="loading-logo"
                  />
                ) : (
                  <>Pay</>
                )}
              </button>
            ) : (
              <button
                className="d-sec-btn"
                onClick={() => {
                  if (currency !== "NGN" && currency !== "USD") {
                    setShowPop(!showPop);
                  } else if (amt) {
                    Deposit();
                  } else toast.error("Please enter an amount to pay");
                }}
              >
                {loading ? (
                  <img
                    loading="lazy"
                    src={loader}
                    alt="loading gif"
                    className="loading-logo"
                  />
                ) : (
                  <>Pay</>
                )}
              </button>
            )}
          </div>
          <p>
            You will be redirected to the payment page of the chosen service
          </p>
        </div>
        {showPop ? <CurrencyUpdate /> : ""}
      </div>
    </Layout>
  );
};

export default Payment;
