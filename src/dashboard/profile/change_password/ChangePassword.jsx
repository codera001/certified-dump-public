import React from "react";
import "./ChangePassword.css";
import ModalLayout from "../../../component/ModalLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const ChangePassword = (props) => {
  const { HideChangePass } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async ({ code, password, confirmPassword }) => {
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
      navigate("/success");
      sessionStorage.clear();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <ModalLayout>
      <div>
        <h1>Change Password</h1>
      </div>
      <form onSubmit={handleSubmit(resetPassword)}>
        <div className="pass-form">
          <div>
            <label htmlFor="current password">Current Password</label>
            <input
              type="text"
              placeholder="Current Password"
              {...register("code", {
                required: true,
              })}
              required
            />
          </div>
          <div>
            <label htmlFor="new password">New Password</label>
            <input
              type="text"
              placeholder="New Password"
              {...register("password", {
                required: true,
              })}
              required
            />
          </div>
          <div>
            <label htmlFor="current password">Confirm Password</label>
            <input
              type="text"
              placeholder="Confirm New Password"
              {...register("confirmPassword", {
                required: true,
              })}
              required
            />
          </div>
        </div>
        <div className="submit-cancel-Btn">
          <button type="submit">Submit</button>
          <button onClick={HideChangePass}>Cancel</button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default ChangePassword;
