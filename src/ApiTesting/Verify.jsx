import React, { useState } from "react";
import "./test.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const handleChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/verify-email/${pin}`
      );
      console.log("Email verification Successful:", response.data.msg);
      navigate("/apilog");
    } catch (error) {
      console.log("verification error:", error.response.data.msg);
    }
  };

  return (
    <div>
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
        <button type="submit">Very Your Email Address</button>
      </form>
    </div>
  );
};

export default Verify;
