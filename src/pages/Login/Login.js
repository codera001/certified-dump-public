import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import recaptcha from "../../static/recaptcha.png";
import facebook from "../../static/facebook.png";
import twitter from "../../static/twitter.png";
import insta from "../../static/insta.png";
import whatsapp from "../../static/whatsapp.png";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Google from "../../ApiTesting/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/login",
        formData
      );
      toast.success("success message");
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userEmail", response.data.user.email);
      sessionStorage.setItem("userId", response.data.user.id);
        // console.log("login Successful:", response.data);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.msg);
      if (error.response.data.msg == "Unverified Email ") {
        navigate("/confirm-email");
      }
        // console.log("login error:", error.response.data.msg);
    }
  };

  return (
    <>
      <section className="section">
        <NavigationBar />
        <div className="signup container">
          <div className="signup-form-wrap">
            <Form className="signup-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3 ">
                <Form.Label className="my-2 form-title"> Log in</Form.Label>
              </Form.Group>
              <Form.Group
                className="mb-3 form-group-s"
                style={{ border: "1px solid var(--green-500)" }}
              >
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
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 d-flex justify-content-between form-group-s"
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

              <Button variant="primary" type="submit" className="form-button-s">
                SIGN IN
              </Button>
              <Link
                to="/reset-password"
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
              >Don&apos;t have an account yet?<Link
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
              <GoogleOAuthProvider clientId="808631123105-qt399aga53mske5kmea2k0t83doctuge.apps.googleusercontent.com">
                <Google />
              </GoogleOAuthProvider>
              <div className="social-images d-flex">
                <img src={facebook} alt="facebook" className="me-1"></img>
                <img src={twitter} alt="twitter" className="me-1"></img>
                <img src={whatsapp} alt="whatsapp" className="me-1"></img>
                <img src={insta} alt="instagram" className="me-1"></img>
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
