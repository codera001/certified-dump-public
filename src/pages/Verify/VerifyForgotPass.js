import axios from "axios";
import React, { useState } from "react";
import "./Verify.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PublicLayout from "../../component/PublicLayout";
import loader from "../../static/loader.gif";

const VerifyForgotPass = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async ({ code, password, confirmPassword }) => {
    setLoading(!loading);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/verify-forgot-password",
        {
          code: code,
          newpass: password,
        }
      );
      toast.success(response.data.msg);
      navigate("/success2");
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="confirmpass">
        <h3 className="pt-5">Retrieve your account now!</h3>
        <div className="confirmpass-wrap">
          <div className="confirmpass-text">
            <form onSubmit={handleSubmit(resetPassword)}>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Enter your verification code"
                  {...register("code", {
                    required: true,
                  })}
                />
                <input
                  type="password"
                  placeholder="Enter a new password"
                  {...register("password", {
                    required: true,
                  })}
                />
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  {...register("confirmPassword", {
                    required: true,
                  })}
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
                  <>Send</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default VerifyForgotPass;
