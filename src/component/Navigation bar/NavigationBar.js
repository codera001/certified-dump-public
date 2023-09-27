import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill, RiMailSendLine } from "react-icons/ri";
import { TbBrandTwitterFilled } from "react-icons/tb";
import "./NavigationBar.css";
import logo from "../../static/logo.png";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { navlist } from "./Navlists";

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [authToken, setAuthToken] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
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
                <Link
                  to="/dashboard"
                  style={{
                    fontSize: "12px",
                  }}
                  className="nav-list to-dash"
                >
                  Logged in
                </Link>
                <p
                  className="nav-list"
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 4px 0 0",
                  }}
                >
                  Balance:{" "}
                  <span
                    style={{
                      margin: "0 0 0 4px",
                    }}
                  >
                    {sessionStorage.getItem("balance")}
                  </span>
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
      <div className="container d-flex justify-content-between align-items-center nav-logo">
        <div className="p-nav-logo">
          <img loading="lazy" alt="logo" src={logo} />
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
              {navlist.map((list, i) => (
                <NavLink
                  key={i}
                  to={list.path}
                  className={({ isActive }) =>
                    isActive ? "nav-change" : "nav-links"
                  }
                >
                  {list.title}
                </NavLink>
              ))}
              {!authToken && (
                <>
                  <NavLink to="/login" className="button">
                    SIGN IN
                  </NavLink>
                  <NavLink to="/signup" className="button">
                    JOIN NOW
                  </NavLink>
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
