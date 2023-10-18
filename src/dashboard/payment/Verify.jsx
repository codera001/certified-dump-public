import React, { useEffect, useState } from "react";
import "../../pages/Verify/Verify.css";
import Layout from "../components/Layout/Layout";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import loader from "../../static/loader.gif";

const VerifyPayment = () => {
  const ref = sessionStorage.getItem("paymentRef");
  const [verified, setVerified] = useState(false);

  const VerifyPayment = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api/getSupportChat?senderId=${ref}`
      );
      // console.log(response);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    VerifyPayment();
  }, []);

  return (
    <Layout>
      <div
        className="success-mail"
        style={{
          background: "white",
        }}
      >
        <div className="success-wrap">
          <div className="pass-text">
            {verified ? (
              <>
                <img loading="lazy" src={loader} width={20} alt="loading-gif" />
                <p className="mb-5">Please wait...</p>
              </>
            ) : (
              <p
                className="mb-5"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Payment is successful!
              </p>
            )}
            {/* <p> Your payment is successful</p> */}
            <Link to="/dashboard" className="px-4 py-2">
              Go to overview
            </Link>
          </div>
          <div className="help-text mt-5 d-flex justify-content-around mx-auto px-2 py-3">
            <AiFillMessage style={{ fontSize: "50px" }} className="" />
            <div className="">
              <h4>HAVE A QUESTION?</h4>
              <a
                style={{
                  fontSize: "14px",
                  color: "var(--tertiary-color)",
                  textDecoration: "underline",
                }}
              >
                Reach out to our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyPayment;
