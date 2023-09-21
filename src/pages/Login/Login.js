import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import recaptcha from "../../static/recaptcha.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-hot-toast";

import { BsFacebook } from "react-icons/bs";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let date = new Date();
  let currentTime = date.getTime();
  // console.log(currentTime);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/login",
        formData
      );
      console.log(response.data);
      toast.success(response.data.msg);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.user.id);
      sessionStorage.setItem("username", response.data.user.username);
      sessionStorage.setItem("userFirstname", response.data.user.firstname);
      sessionStorage.setItem("userLastname", response.data.user.lastname);
      sessionStorage.setItem("userEmail", response.data.user.email);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.msg);
      // console.log(error);
      if (error.response.data.msg == "Unverified Email ") {
        navigate("/verify-email");
      }
    }
  };

  return (
    <>
      <section className="section">
        <NavigationBar />
        <div className="login container">
          <div className="login-form-wrap">
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3 ">
                <Form.Label className="my-4 form-title"> Log in</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3 form-group-s">
                <Form.Control
                  className="form-control-s"
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="true"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 form-group-s">
                <Form.Control
                  className="form-control-s"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="true"
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 d-flex justify-content-around form-group-s recaptcha"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="I'm not a robot"
                  style={{ fontWeight: "bold" }}
                ></Form.Check>
                <Form.Label>
                  <div>
                    <img
                      src={recaptcha}
                      alt="recaptcha"
                      className="d-block"
                    ></img>
                    <small style={{ fontSize: "10px" }} className="d-block">
                      reCAPTCHA
                    </small>
                    <small style={{ fontSize: "10px" }} className="d-block">
                      {" "}
                      Privacy-Terms
                    </small>
                  </div>
                </Form.Label>
              </Form.Group>

              <Button type="submit" className="form-button-s">
                SIGN IN
              </Button>
              <Link
                to="/forgot-password"
                style={{ color: "var(--green-600", fontWeight: "bolder" }}
              >
                forgot password?
              </Link>
              <p
                className=""
                style={{
                  fontWeight: "bolder",
                  color: "black",
                  fontSize: "12px",
                }}
              >
                Don&apos;t have an account yet?
                <Link
                  to="/signup"
                  style={{ color: "var(--green-600", fontWeight: "light" }}
                >
                  Sign up
                </Link>
              </p>
              <p
                style={{
                  fontWeight: "bolder",
                  color: "black",
                  fontSize: "12px",
                }}
              >
                Or log in with your social network
              </p>
              {/* <GoogleOAuthProvider clientId="808631123105-qt399aga53mske5kmea2k0t83doctuge.apps.googleusercontent.com">
                <Google />
              </GoogleOAuthProvider> */}
              <div className="social-images d-flex">
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
              </div>
            </Form>
          </div>
        </div>
        <PageFooter />
      </section>
    </>
  );
}

export default Login;
