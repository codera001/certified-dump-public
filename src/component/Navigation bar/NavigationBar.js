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
import axios from "axios";

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const authToken = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("username");
  const currency = sessionStorage.getItem("currency");

  const GetRate = async () => {
    try {
      const res = await axios.get(
        "https://api.certifieddump.com/api-wallet/currency/9",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // console.log(res);
      sessionStorage.setItem("fx", res.data[0].rate);
    } catch (error) {}
  };

  useEffect(() => {
    GetRate();
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
            <Link to="/" className="text-white brand ">
              <AiFillHome color="orange" className="brand-icon me-1" />
              Welcome to Certified Dump
            </Link>
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
                  {user}
                </Link>
                <p
                  className="nav-list"
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    margin: "0",
                  }}
                >
                  Balance:
                  <span
                    style={{
                      margin: "0 0 0 4px",
                    }}
                  >
                    {currency === "NGN" ? (
                      <s style={{ textDecorationStyle: "double" }}>N</s>
                    ) : (
                      "$"
                    )}
                    {sessionStorage.getItem("balance")}
                  </span>
                </p>
              </>
            )}
            <div
              className="icon"
              style={{
                margin: "0 0 0 4.5rem",
              }}
            >
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

      {/* second-nav */}
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

      {/*Third nav  */}
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
              {authToken && (
                <>
                  <NavLink to="/dashboard" className="nav-links">
                    DASHBOARD
                  </NavLink>
                  <NavLink to="/dashboard" className="button n-mobile-btn">
                    {user}:{" "}
                    {currency === "NGN" ? (
                      <s style={{ textDecorationStyle: "double" }}>N</s>
                    ) : (
                      "$"
                    )}
                    {sessionStorage.getItem("balance")}
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
