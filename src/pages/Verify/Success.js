import React from "react";
import "./Verify.css";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import PublicLayout from "../../component/PublicLayout";

function Success() {
  return (
    <PublicLayout>
      <div className="success-mail">
        <div className="success-wrap">
          <div className="pass-text">
            <h1 className="mb-3">Welcome!</h1>
            <p className="mb-5"> Your Email has been verified successfully</p>
            <Link to="/login" className="px-4 py-2">
              SIGN IN NOW
            </Link>
          </div>
          <div className="help-text mt-5 d-flex justify-content-around mx-auto px-2 py-3">
            <AiFillMessage style={{ fontSize: "50px" }} className="" />
            <div className="">
              <h4>HAVE A QUESTION?</h4>
              <a
                style={{
                  fontSize: "14px",
                  color: "var(--tertiary-color)",
                  textDecoration: "underline",
                }}
              >
                Reach out to our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Success;
