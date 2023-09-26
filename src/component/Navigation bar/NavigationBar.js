import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill, RiMailSendLine } from "react-icons/ri";
import { TbBrandTwitterFilled } from "react-icons/tb";
import "./NavigationBar.css";
import logo from "../../static/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [authToken, setAuthToken] = useState(sessionStorage.getItem("token"));

   useEffect(() => {
     function handleScroll() {
       if (window.scrollY > 250) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     }
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <>
      {/*first nav  */}
      <div className="container-fluid first-nav">
        <div className="container d-flex justify-content-between  nav">
          <div className="d-flex my-0 item-head">
            <a href="#home" className=" text-white brand ">
              <AiFillHome color="orange" className="brand-icon  me-1" />
              Welcome to Certified Dump
            </a>
          </div>

          <div className="item-list">
            {!authToken && (
              <>
                <Link to="/login" className="nav-list">
                  Login
                </Link>
                <Link to="/" className="nav-list border-left"></Link>
                <Link to="/signup" className="nav-list">
                  Sign up
                </Link>
              </>
            )}
            {authToken && (
              <>
                <Link to="/dashboard" className="nav-list to-dash">
                  Logged in
                </Link>
                <p
                  className="nav-list"
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Balance: <span>{sessionStorage.getItem("balance")}</span>
                </p>
              </>
            )}
            <div className="icon">
              <a href="/" target="_blank">
                <RiFacebookFill color="white" />
              </a>
              <a href="/" target="_blank">
                <TbBrandTwitterFilled color="white" />
              </a>
              <a href="/" target="_blank">
                <BsInstagram color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* secon-nav */}
      <div className="container d-flex justify-content-between align-items-center mt-3 nav-logo">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <div className="d-flex ">
          <div className="mx-1">
            <RiMailSendLine
              color=" var(--tertiary-color)"
              className="mail-icon"
            />
          </div>
          <div className="d-block  mx-0">
            <h6
              className="mb-0 mt-0 text-start"
              style={{
                color: " black",
                fontWeight: "bolder",
              }}
            >
              MAIL US
            </h6>
            <span
              className="mt-0  mb-0 text-start"
              style={{ color: " var(--tertiary-color)" }}
            >
              hello@certifieddump.com
            </span>
          </div>
        </div>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        className={`second-nav mx-0 nav-toogle my-0 ${
          isScrolled ? "p-navbar-scroll" : ""
        }`}
      >
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center nav-items">
              <Link to="/" className="nav-links">
                HOME
              </Link>
              <Link to="/about" className="nav-links ">
                ABOUT US
              </Link>
              <Link to="/blog" className="nav-links ">
                BLOG AREA
              </Link>
              <Link to="/contact" className="nav-links ">
                CONTACT US
              </Link>
              {!authToken && (
                <>
                  <Link to="/login" className="button">
                    SIGN IN
                  </Link>
                  <Link to="/signup" className="button">
                    JOIN NOW
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
