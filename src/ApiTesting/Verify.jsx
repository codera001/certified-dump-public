import React, { useState } from "react";
import "./test.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
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
      // console.log("Email verification Successful:", response.data.msg);
      toastr.success(response.data.msg);
      navigate("/login");
    } catch (error) {
      // console.log("verification error:", error.response.data.msg);
    }
  };

  const getVerificationCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/resend-verification-email", input
      );
      // console.log("Verification Code sent:", response.data)
    } catch (error) {
      // console.log("verification error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Confirm Your Email</h2>
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
      {hidden && (
        <form onSubmit={getVerificationCode}>
          <div className="form-group">
            <label htmlFor="input">Enter email or username</label>
            <input
              type="text"
              id="input"
              name="input"
              value={input}
              onChange={inputChange}
              required
            />
          </div>
          <button type="submit">Resend verification pin</button>
        </form>
      )}
    </div>
  );
};

export default Verify;
