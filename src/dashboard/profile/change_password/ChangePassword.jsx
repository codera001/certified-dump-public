import React, { useState } from "react";
import "./ChangePassword.css";
import ModalLayout from "../../../component/ModalLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loader from "../../../static/loader.gif";

const ChangePassword = (props) => {
  const [loading, setLoading] = useState(false);
  const { HideChangePass } = props;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updatePassword = async ({
    password,
    newpassword,
    confirm_newpassword,
  }) => {
    setLoading(!loading);
    if (newpassword !== confirm_newpassword) {
      toast.error("New passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/change-password?userid=${sessionStorage.getItem(
          "userId"
        )}`,
        {
          password: password,
          newpassword: newpassword,
          confirm_newpassword: confirm_newpassword,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response);
      toast.success(
        response.data.msg ||
          "Password update is successful. Please login again!"
      );
      navigate("/login");
    } catch (error) {
      toast.error(
        "Can't update password now, please try again later." ||
          error.response.data.msg
      );
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalLayout>
      <div>
        <h1>Change Password</h1>
      </div>
      <form onSubmit={handleSubmit(updatePassword)}>
        <div className="pass-form">
          <div>
            <label htmlFor="current password">Current Password</label>
            <input
              type="text"
              placeholder="Current Password"
              {...register("password", {
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
              {...register("newpassword", {
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
              {...register("confirm_newpassword", {
                required: true,
              })}
              required
            />
          </div>
        </div>
        <div className="submit-cancel-Btn">
          <button>
            {loading ? (
              <img
                loading="lazy"
                src={loader}
                alt="loading gif"
                className="loading-logo"
              />
            ) : (
              <>Submit</>
            )}
          </button>
          <button onClick={HideChangePass}>Cancel</button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default ChangePassword;
