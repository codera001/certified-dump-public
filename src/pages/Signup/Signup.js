import React from "react";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import recaptcha from "../../static/recaptcha.png";
import facebook from "../../static/facebook.png";
import twitter from "../../static/twitter.png";
import insta from "../../static/insta.png";
import whatsapp from "../../static/whatsapp.png";
function Signup() {
  return (
    <>
      <section className="section">
        <NavigationBar />
        <div className="signup container">
          <div className="signup-form-wrap">
            <Form className="signup-form">
              <Form.Group className="mb-3 ">
                <Form.Label className="my-2 form-title"> Sign up</Form.Label>
              </Form.Group>
              <Form.Group
                className="mb-3 form-group-s"
                style={{ border: "1px solid var(--green-500)" }}
              >
                <Form.Control
                  classname="form-control-s"
                  type="email"
                  placeholder="Enter your username"
                />
              </Form.Group>

              <Form.Group className="mb-3 form-group-s">
                <Form.Control
                  className="form-control-s"
                  type="password"
                  placeholder="Enter your email"
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
                />
              </Form.Group>

              <Form.Group className="mb-3 form-group-s">
                <Form.Control
                  className="form-control-s"
                  type="password"
                  placeholder="Confitm password"
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
                {" "}
                Already have an account yet?{" "}
                <a
                  href="/"
                  style={{ color: "var(--green-600", fontWeight: "light" }}
                >
                  Sign in
                </a>
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

export default Signup;
