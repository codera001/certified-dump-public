import React, { useState } from "react";
import "./Verify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillMessage } from "react-icons/ai";
import toast from "react-hot-toast";
import PublicLayout from "../../component/PublicLayout";
import loader from "../../static/loader.gif";

function VerifyEmail() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [hidden, setHidden] = useState(false);
  const handleChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/verify-email/${pin}`
      );
      // console.log("Email verification Successful:", response.data.msg);
      toast.success(response.data.msg);
      navigate("/success");
      localStorage.removeItem("unverifiedMail");
    } catch (error) {
      toast.error(`verification error: ${error.response.data.msg}`);
    } finally {
      setLoading(false);
    }
  };

  const getVerificationCode = async (e) => {
    e.preventDefault();
    setLoading2(!loading2);
    try {
      await axios.post(
        "https://api.certifieddump.com/api/resend-verification-email",
        {
          email: localStorage.getItem("unverifiedMail"),
        }
      );
      // console.log("Verification Code sent:", response.data);
      toast.success("Verification code has been sent to your mail");
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setLoading2(false);
    }
  };

  setTimeout(() => {
    setHidden(!hidden);
  }, 30000);

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
              <button type="submit">
                {loading ? (
                  <img
                    className="loading-logo"
                    loading="lazy"
                    src={loader}
                    alt="loading gif"
                  />
                ) : (
                  <>Verify Your Email Address</>
                )}
              </button>
            </form>
            {hidden ? (
              <button type="submit" onClick={getVerificationCode}>
                {loading2 ? (
                  <img
                    className="loading-logo"
                    loading="lazy"
                    src={loader}
                    alt="loading gif"
                  />
                ) : (
                  <>Resend Verification Code</>
                )}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="help-text mt-5 d-flex justify-content-around mx-auto px-2 py-3">
            <AiFillMessage style={{ fontSize: "50px" }} />
            <div>
              <h4>HAVE A QUESTION?</h4>
              <Link
                to="/contact"
                style={{
                  fontSize: "14px",
                  color: "var(--tertiary-color)",
                  textDecoration: "underline",
                }}
              >
                Reach out to our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default VerifyEmail;
