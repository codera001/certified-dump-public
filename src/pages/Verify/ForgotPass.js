import React from "react";
import "./Verify.css";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";

function ForgotPass() {
  return (
    <>
      <NavigationBar />
      <div className="confirmpass">
        <h3 className="pt-5">Confirm Password to continue</h3>
        <div className="confirmpass-wrap">
          <div className="confirmpass-text">
            <div className="d-flex justify-content-between">
              <label>Password</label>
              <label className="" style={{ color: "var(--green-500)" }}>
                Forgot password?
              </label>
            </div>
            <input type="password"></input>
            <button className="py-2">Confirm Password</button>
          </div>
        </div>
      </div>

      <PageFooter />
    </>
  );
}

export default ForgotPass;
