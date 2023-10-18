import React, { useState } from "react";
import "./test.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Apilog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/login",
        formData
      );
      sessionStorage.setItem("token", response.data.token);
      // console.log("login Successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      if (error.response.data.msg == "Unverified Email ") {
        navigate("/confirm-email");
      }
      // console.log("login error:", error.response.data.msg);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/apisign">Signup</Link>
      </form>
    </div>
  );
};

export default Apilog;
