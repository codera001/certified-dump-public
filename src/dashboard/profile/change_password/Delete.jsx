import React, { useState } from "react";
import ModalLayout from "../../../component/ModalLayout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Delete = (props) => {
  const { HideChangePass } = props;
  const navigate = useNavigate();
  // const [removeAcc, setRemoveAcc] = useState(false);
  const [loading, setLoading] = useState(false);
  const userid = sessionStorage.getItem("userId");

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api/deleteuser/:${userid}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      // setRemoveAcc(true);
      setLoading(!loading);
      toast.success("Your account no longer exist");
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalLayout>
      {loading ? (
        <div className="d-gif-div">
          <h3 style={{ color: "red" }}>Deleting...</h3>
          <img
            loading="lazy"
            src={loader}
            alt="loading-gif"
            className="d-gif"
          />
        </div>
      ) : (
        <>
          <h3 style={{ color: "red" }}>
            Are you sure you want to delete your account?
          </h3>
          <div className="submit-cancel-Btn">
            <button style={{ color: "red" }} onClick={updateUser}>
              Yes
            </button>
            <button onClick={HideChangePass} style={{ fontWeight: "bold" }}>
              No
            </button>
          </div>
        </>
      )}
    </ModalLayout>
  );
};

export default Delete;
