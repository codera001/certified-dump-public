import React, { useState } from "react";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import recaptcha from "../../static/recaptcha.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import Google from "../../ApiTesting/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

function Signup() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log(error);
    }
  };

  // 808631123105-qt399aga53mske5kmea2k0t83doctuge.apps.googleusercontent.com
  // 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

  return (
    <>
      <section className="section">
        <NavigationBar />
        <div className="signup container">
          <div className="signup-form-wrap">
            <Form className="signup-form" onSubmit={handleSubmit}>
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
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-group-s"
                controlId="formBasicPassword"
              >
                <Form.Control
                  className="form-control-s"
                  type="password"
                  placeholder="Create password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
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
                  <div className="me-2">
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
                Already have an account yet?
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
                Or log in with your social network
              </p>
              <GoogleOAuthProvider>
                <Google />
              </GoogleOAuthProvider>
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

export default Signup;
