import React from "react";
import "./changePasseord.css";

const ChangePassword = (props) => {
  const { HideChangePass } = props;
  return (
    <div className="change-pass-page">
      <div className="change-password">
        <div>
          <h1>Change Password</h1>
        </div>
        <form action="">
          <div className="pass-form">
            <div>

            <label htmlFor="current password">Current Password</label>
            <input type="text" placeholder="Current Password" />
            </div>
            <div>

            <label htmlFor="new password">New Password</label>
            <input type="text" placeholder="New Password" />
            </div>
            <div>

            <label htmlFor="current password">Confirm Password</label>
            <input type="text" placeholder="Confirm New Password" />
            </div>
          </div>
          <div className="submit-cancel-Btn">
            <button>Submit</button>
            <button onClick={HideChangePass}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
