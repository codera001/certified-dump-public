import React, { useState } from "react";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import Google from "../../ApiTesting/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReCAPTCHA from "react-google-recaptcha";
import PublicLayout from "../../component/PublicLayout";

function Signup() {
  const [isVerified, setIsVerified] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [show, setShow] = useState(false);
  function onChange() {
    setIsVerified(!isVerified);
  }
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone_no: "",
    password: "",
    password_repeat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(formData);
    // e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/signup",
        formData
      );
      // console.log("Signup Successful:", response.data);
      toast.success(response.data.msg);
      localStorage.setItem("unverifiedMail", formData.email);
      navigate("/verify-email");
    } catch (error) {
      // console.log("signup error:", error.response.data.msg);
      toast.error(error.response.data.msg);
      // console.log(error);
    }
  };

  // 808631123105-qt399aga53mske5kmea2k0t83doctuge.apps.googleusercontent.com
  // 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

  return (
    <>
      <section className="section">
        <PublicLayout>
          <div className="signup container">
            <div className="signup-form-wrap">
              <Form
                className="signup-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  isVerified ? handleSubmit() : setShow(!show);
                }}
              >
                <Form.Group className="mb-3 ">
                  <Form.Label className="my-4  form-title"> Sign up</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 form-group-s">
                  <Form.Control
                    className="form-control-s"
                    type="text"
                    placeholder="Enter your firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group-s">
                  <Form.Control
                    className="form-control-s"
                    type="text"
                    placeholder="Enter your lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group-s">
                  <Form.Control
                    className="form-control-s"
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-group-s">
                  <Form.Control
                    className="form-control-s"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group-s"
                  controlId="formBasicPassword"
                  style={{ position: "relative" }}
                >
                  <Form.Control
                    className="form-control-s"
                    type={viewPassword ? "text" : "password"}
                    placeholder="Create password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={() => setViewPassword(!viewPassword)}
                  >
                    {viewPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </Form.Group>

                <Form.Group className="mb-3 form-group-s">
                  <Form.Control
                    className="form-control-s"
                    type="password"
                    placeholder="Confirm password"
                    name="password_repeat"
                    value={formData.password_repeat}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="login-capcha">
                  <ReCAPTCHA
                    sitekey="6LeublgoAAAAAJcgjbrXDIOqr3839Npd0g-sE8Pd"
                    onChange={onChange}
                  />
                </div>
                {show && (
                  <small
                    style={{
                      color: "red",
                      fontSize: "14px",
                    }}
                  >
                    Please solve recapcha puzzle
                  </small>
                )}

                <Button type="submit" className="form-button-s">
                  SIGN UP
                </Button>

                <p
                  className=""
                  style={{
                    fontWeight: "bolder",
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  Already have an account?
                  <Link
                    to="/login"
                    style={{ color: "var(--green-600", fontWeight: "light" }}
                    className="signin"
                  >
                    Sign in
                  </Link>
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  Or sign up with google
                </p>
                <Google />
                {/* <div className="social-images d-flex">
                  <div className="social-images-wrap">
                    <BsFacebook
                      className="me-1"
                      style={{ fontSize: "21px", color: "blue" }}
                    ></BsFacebook>
                    <AiFillTwitterCircle
                      className="me-1"
                      style={{ fontSize: "23px", color: "skyblue" }}
                    ></AiFillTwitterCircle>
                    <FcGoogle
                      className="me-1"
                      style={{ fontSize: "22px" }}
                    ></FcGoogle>
                    <AiFillGithub
                      className="me-1"
                      style={{ fontSize: "22px" }}
                    ></AiFillGithub>
                  </div>
                </div> */}
              </Form>
            </div>
          </div>
        </PublicLayout>
      </section>
    </>
  );
}

export default Signup;
