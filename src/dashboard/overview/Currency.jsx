import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import loader from "../../static/loader.gif";
import ModalLayout from "../../component/ModalLayout";

const CurrencyUpdate = () => {
  const [activeCurrency, setActiveCurrency] = useState(null);
  let curr = sessionStorage.getItem("currency");
  const [open, setOpen] = useState(true);
  console.log(curr);
  // useEffect(() => {
  //   if (curr === null) setOpen(true);
  // }, []);
  const handleSelect = (currency) => {
    setActiveCurrency(currency);
  };

  const updateCurrency = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://api.certifieddump.com/api/edituser`,
        {
          currency: sessionStorage.getItem("currency"),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          <button
            style={{ margin: "1rem 0 0" }}
            onClick={setOpen(false)}
          >
            I will do that later
          </button>
        </ModalLayout>
       ) : ""}
    </>
  );
};

export default CurrencyUpdate;
