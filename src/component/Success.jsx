import React from "react";
import "../pages/Verify/Verify.css";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import PublicLayout from "./PublicLayout";

function Success({ text }) {
  return (
    <PublicLayout>
      <div className="success-mail">
        <div className="success-wrap">
          <div className="pass-text">
            <h1 className="mb-3">Welcome!</h1>
            <p className="mb-5">{text}</p>
            <Link to="/login" className="px-4 py-2">
              SIGN IN NOW
            </Link>
          </div>
          <div className="help-text mt-5 d-flex justify-content-around mx-auto px-2 py-3">
            <AiFillMessage style={{ fontSize: "50px" }} />
            <div>
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
