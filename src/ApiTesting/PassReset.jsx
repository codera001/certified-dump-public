import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const PassReset = () => {
  const [hidden, setHidden] = useState(false);
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserEmail({
      ...userEmail,
      [name]: value,
    });
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/forgot-password`,
        userEmail
      );
      // console.log("Email verification Successful:", response);
      // console.log(userEmail);
      setHidden(!hidden);
    } catch (error) {
      // console.log("verification error:", error);
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    if (password.newPassword == password.confirmPassword) {
      try {
        const response = await axios.post(
          `https://api.certifieddump.com/api/verify-forgot-password`,
          password
        );
      } catch (error) {
        // console.log("passsword error:", error);
      }
    }
    toast.error("passwords don't match");
  };

  return (
    <div className="login-container">
      <h2>Reset your password</h2>
      {hidden ? (
        ""
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your email address"
              // id="pin"
              name="email"
              value={userEmail.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Request verification code</button>
        </form>
      )}
      {hidden && (
        <form onSubmit={changePassword}>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              // id="input"
              name="newPassword"
              placeholder="Enter your new password"
              value={password.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Enter email or username</label>
            <input
              type="password"
              // id="input"
              name="confirmPassword"
              value={password.confirmPassword}
              placeholder="Confirm your new password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset password</button>
        </form>
      )}
    </div>
  );
};

export default PassReset;
