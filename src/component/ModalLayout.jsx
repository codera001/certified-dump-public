import React from "react";
import "../dashboard/profile/change_password/ChangePassword.css"

const ModalLayout = ({ children }) => {
  return (
    <div className="change-pass-page">
      <div className="change-password book-modal">{children}</div>
    </div>
  );
};

export default ModalLayout;
