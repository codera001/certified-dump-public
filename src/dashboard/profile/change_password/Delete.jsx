import React, { useState } from "react";
import ModalLayout from "../../../component/ModalLayout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loader from "../../../static/loader.gif";

const Delete = (props) => {
  const { HideChangePass } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const userid = sessionStorage.getItem("userId");

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://api.certifieddump.com/api/deleteuser/${userid}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      setLoading(!loading);
      sessionStorage.clear();
      toast.success(response.data.msg || "Your account no longer exist");
      navigate("/signup");
    } catch (error) {}
  };

  return (
    <ModalLayout>
      <>
        <h3 style={{ color: "red" }}>
          Are you sure you want to delete your account?
        </h3>
        <div className="submit-cancel-Btn">
          <button style={{ color: "red" }} onClick={updateUser}>
            {loading ? (
              <img src={loader} alt="loading-gif" className="d-gif" />
            ) : (
              <>Yes</>
            )}
          </button>
          <button onClick={HideChangePass} style={{ fontWeight: "bold" }}>
            No
          </button>
        </div>
      </>
    </ModalLayout>
  );
};

export default Delete;
