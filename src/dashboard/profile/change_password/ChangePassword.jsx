import React from "react";
import "./changePasseord.css";

const ChangePassword = (props) => {
    const { HideChangePass} = props
  return (
    <div className="change-password">
      <div>
        <h1>Change Password</h1>
      </div>
      <form action="">
        <label htmlFor="current password">Current Password</label>
        <input type="text" placeholder="Current Password" />
        <label htmlFor="new password">New Password</label>
        <input type="text" placeholder="New Password" />
        <label htmlFor="current password">Confirm New Password</label>
        <input type="text" placeholder="Confirm New Password" />
        <div className="submit-cancel-Btn">
          <button>Submit</button>
          <button onClick={HideChangePass}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
