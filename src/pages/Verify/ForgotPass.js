import React, { useState } from "react";
import "./Verify.css";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import axios from "axios";

function ForgotPass() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/forgot-password`,
        userData
      );
      // console.log("Email verification Successful:", response);
      // console.log(userData);
      toast.success(response.data.msg)
    } catch (error) {
      console.log("verification error:", error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="confirmpass">
        <h3 className="pt-5">
          Forgot your Password? No qualms! Fill the form below to retrieve your
          account
        </h3>
        <div className="confirmpass-wrap">
          <div className="confirmpass-text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="py-2" type="submit">
                Get Reset link
              </button>
            </form>
          </div>
        </div>
      </div>

      <PageFooter />
    </>
  );
}

export default ForgotPass;
