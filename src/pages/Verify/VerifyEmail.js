import React from "react";
import "./Verify.css";

import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import { AiFillMessage , AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function VerifyEmail() {
    return (
        <>
            <NavigationBar />
            <div className="verifyemail">
                <div className="verifyemail-wrap">

                    <div className="pass-text">
                        <p>You are one step away</p>
                        <h1 className="mb-3">Verify your Email</h1>
                        <p className="mb-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="/" className="px-4 py-2">VERIFY NOW</a>
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

export default VerifyEmail;
