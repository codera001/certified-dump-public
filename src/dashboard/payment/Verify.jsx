import React, { useEffect, useState } from "react";
import "../../pages/Verify/Verify.css";
import Layout from "../components/Layout/Layout";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import loader from "../../static/loader.gif"

const VerifyPayment = () => {
  const ref = sessionStorage.getItem("paymentRef");
  const [verified, setVerified] = useState(false);
  const VerifyPayment = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api/getSupportChat?senderId=${ref}`
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    VerifyPayment()
  setVerified(true)}, []);


  return (
    <Layout>
      <div className="success-mail">
        <div className="success-wrap">
          <div className="pass-text">
            <h1 className="mb-3">Welcome!</h1>
            <p className="mb-5"> Your Email has been verified successfully</p>
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
