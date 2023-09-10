import React from "react";
import "./Verify.css";

import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import { AiFillMessage , AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function Success() {
    return (
        <>
            <NavigationBar />
            <div className="success-mail">
                <div className="success-wrap">

                    <div className="pass-text">
                    
                        <h1 className="mb-3">Welcome!</h1>
                        <p className="mb-5">  Your Email  has been verified successfully</p>
                        <a href="login" className="px-4 py-2">SIGN IN NOW</a>
                    </div>

                    <div className="help-text mt-5 d-flex justify-content-around mx-auto px-2 py-3">
                        <AiFillMessage style={{ fontSize: "50px" }} className="" />
                        <div className="">

                            <h4>HAVE A QUESTION?</h4>
                            <a style={{ fontSize: "14px", color: "var(--tertiary-color)", textDecoration: "underline" }}>Reach out to our team</a>
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
                </div>
            </div>

            <PageFooter />

        </>
    );
}

export default Success;
