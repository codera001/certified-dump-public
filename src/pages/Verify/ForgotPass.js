import React, { useState } from "react";
import "./Verify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PublicLayout from "../../component/PublicLayout";
import loader from "../../static/loader.gif";

function ForgotPass() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
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
    setLoading(!loading);
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/forgot-password`,
        userData
      );
      navigate("/verify-account");
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Username or email is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
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
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="py-2" type="submit">
                {loading ? (
                  <img
                    className="loading-logo"
                    loading="lazy"
                    src={loader}
                    alt="loading gif"
                  />
                ) : (
                  <>Get Reset Link</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default ForgotPass;
