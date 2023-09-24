import axios from "axios";
import React from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import "./Verify.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyForgotPass = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async ({ code, password }) => {
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/verify-forgot-password`,
        {
          code: code,
          newpass: password,
        }
      );
      // console.log("Verification Successful:", response);
      toast.success(response.data.msg);
      navigate("/success")
    } catch (error) {
      toast.error(response.data.msg)
      // console.log("verification error:", error);
    }
  };

  return (
    <>
      <NavigationBar />
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
                {/* <input
                  type="password"
                  placeholder="Confirm your new password"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                /> */}
              </div>
              <button className="py-2" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <PageFooter />
    </>
  );
};

export default VerifyForgotPass;
