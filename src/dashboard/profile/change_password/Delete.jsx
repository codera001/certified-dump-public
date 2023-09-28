import React from "react";
import ModalLayout from "../../../component/ModalLayout";

const Delete = (props) => {
  const { HideChangePass } = props;

  return (
    <ModalLayout>
      <h3 style={{ color: "red" }}>
        Are you sure you want to delete your account?
      </h3>
      <div className="submit-cancel-Btn">
        <button style={{ color: "red" }}>Yes</button>
        <button onClick={HideChangePass} style={{ fontWeight: "bold" }}>
          No
        </button>
      </div>
    </ModalLayout>
  );
};

export default Delete;
