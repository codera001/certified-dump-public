import React, { useState } from "react";
import "./Verify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillMessage } from "react-icons/ai";
import toast from "react-hot-toast";
import PublicLayout from "../../component/PublicLayout";

function VerifyEmail() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [hidden, setHidden] = useState(false);
  const handleChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/verify-email/${pin}`
      );
      // console.log("Email verification Successful:", response.data.msg);
      toast.success(response.data.msg);
      navigate("/success");
      localStorage.removeItem("unverifiedMail");
    } catch (error) {
     toast.error("verification error:", error.response.data.msg);
    }
  };


  const getVerificationCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/resend-verification-email",
        {
          email: localStorage.getItem("unverifiedMail"),
        }
      );
      // console.log("Verification Code sent:", response.data);
      toast.success("Verification code has been sent to your mail");
    } catch (error) {
      // console.log("verification error:", error);
      // toast.success("Your account is already verified, please login");
    }
  };

  setTimeout(() => {
    setHidden(!hidden);
  }, 25000);
  return (
    <PublicLayout>
      <div className="verifyemail">
        <div className="verifyemail-wrap">
          <div className="pass-text">
            <p>You are one step away!</p>
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
              <button type="submit">Verify Your Email Address</button>
            </form>
            {hidden ? (
              <button type="submit" onClick={getVerificationCode}>
                Resend verification code
              </button>
            ) : (
              ""
            )}
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
    </PublicLayout>
  );
}

export default VerifyEmail;
