import React, { useState } from "react";
import "./Verify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import { AiFillMessage } from "react-icons/ai";

function VerifyEmail() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(false);

  const handleChange = (e) => {
    setPin(e.target.value);
  };
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/verify-email/${pin}`
      );
      console.log("Email verification Successful:", response.data.msg);
      toastr.success(response.data.msg);
      navigate("/success");
    } catch (error) {
      console.log("verification error:", error.response.data.msg);
    }
  };

  const getVerificationCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/resend-verification-email",
        input
      );
      console.log("Verification Code sent:", response.data);
    } catch (error) {
      console.log("verification error:", error);
    }
  };
  return (
    <>
      <NavigationBar />
      <div className="verifyemail">
        <div className="verifyemail-wrap">
          <div className="pass-text">
            <p>You are one step away</p>
            <h1 className="mb-3">Verify your Email</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pin">Enter verification code</label>
                <input
                  type="text"
                  id="pin"
                  name="pin"
                  value={pin}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <p className="mb-5">
                Please click on the button below to verify your email address
                and enjoy exclusive resources to excel in your educational
                journey
              </p> */}
              <button type="submit">Verify Your Email Address</button>
            </form>
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

      <PageFooter />
    </>
  );
}

export default VerifyEmail;
