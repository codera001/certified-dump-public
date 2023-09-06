import React from "react";
import "./Verify.css";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

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
              <label className="" style={{ color: "var(--green-500)" }}>Forgot password?</label>
            </div>
            <input type="password">
            </input>
            <button className="py-2">Confirm Password</button>
          </div>
        </div>

        <div className="forgot-social-images d-flex ">
          <div className="forgot-social-images-wrap ">
            <BsFacebook className="me-1" style={{ fontSize: "21px", color: "blue" }}></BsFacebook>
            <AiFillTwitterCircle className="me-1" style={{ fontSize: "23px", color: "skyblue" }}></AiFillTwitterCircle>
            <FcGoogle className="me-1" style={{ fontSize: "22px" }}></FcGoogle>
            <AiFillGithub className="me-1" style={{ fontSize: "22px" }}></AiFillGithub>
          </div>
        </div>

        <small>Tip: You are entering <span style={{ color: "var(--tertiary-color)" }}>sudo mode</span> we won't ask for your password again in few hours</small>
      </div>


      <PageFooter />

    </>
  );
}

export default ForgotPass;
