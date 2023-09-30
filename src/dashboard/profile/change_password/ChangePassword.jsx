import React from "react";
import "./ChangePassword.css";
import ModalLayout from "../../../component/ModalLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ChangePassword = (props) => {
  const { HideChangePass } = props;
  // const [newPass, setNewPass] = useState("");
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
      toast.error(error.response.data.msg);
      // console.log(error);
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
          <button type="submit">Submit</button>
          <button onClick={HideChangePass}>Cancel</button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default ChangePassword;
