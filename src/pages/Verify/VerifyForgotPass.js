import axios from "axios";
import React from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import "./Verify.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyForgotPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/verify-forgot-password`,
        verifyData
      );
      console.log("Verification Successful:", response);
      // console.log(userData);
      // toast.success(response.data.msg);
    } catch (error) {
      console.log("verification error:", error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="confirmpass">
        <h3 className="pt-5">Retrieve your account now</h3>
        <div className="confirmpass-wrap">
          <div className="confirmpass-text">
            <form onSubmit={handleSubmit(resetPassword)}>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Enter your username"
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
                Get Reset link
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
