import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import ModalLayout from "../../component/ModalLayout";

const CurrencyUpdate = () => {
  const [currency, setCurrency] = useState("");
  const [activeCurrency, setActiveCurrency] = useState(null);
  const [open, setOpen] = useState(false);
  let curr = sessionStorage.getItem("currency");

  useEffect(() => {
    if (curr === "null") setOpen(!open);
  }, []);

  const handleSelect = (currency) => {
    setActiveCurrency(currency);
  };

  const GetProfile = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api/profile`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response.data[0]);
      sessionStorage.setItem("currency", response.data[0].currency);
    } catch (error) {}
  };

  const updateCurrency = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/edituser`,
        {
          userid: sessionStorage.getItem("userId"),
          currency: currency,
          firstname: sessionStorage.getItem("userFirstname"),
          lastname: sessionStorage.getItem("userLastname"),
          phone_no: sessionStorage.getItem("userPhone"),
          country: sessionStorage.getItem("country"),
          dob: sessionStorage.getItem("dob"),
          gender: sessionStorage.getItem("gender"),
          image_path: sessionStorage.getItem("userImg"),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      toast.success(response.data.msg);
      GetProfile();
      setOpen(false);
    } catch (error) {
      toast.error(
        "Can't update your currency option right now. Please try again later."
      );
    }
  };

  return (
    <>
      {open && (
        <ModalLayout>
          <h3 style={{ color: "black" }}>
            Welcome Please select a currency option for transactions
          </h3>
          <h5 style={{ color: "red" }}>
            Kindly note that this decision cannot be reversed!
          </h5>
          <div className="submit-cancel-Btn">
            <button
              className={`curr ${activeCurrency === "USD" ? "active" : ""}`}
              onClick={() => {
                handleSelect("USD");
                setCurrency("USD");
              }}
            >
              USD
            </button>
            <button
              className={`curr ${activeCurrency === "NGN" ? "active" : ""}`}
              onClick={() => {
                handleSelect("NGN");
                setCurrency("NGN");
              }}
            >
              Naira
            </button>
            {activeCurrency && <button onClick={updateCurrency}>Submit</button>}
          </div>
        </ModalLayout>
      )}
    </>
  );
};

export default CurrencyUpdate;
