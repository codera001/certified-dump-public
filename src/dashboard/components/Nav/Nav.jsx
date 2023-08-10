import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import windows from "../../images/windows.png";
import { Button } from "../Button/Button";
import { BiLogOutCircle, BiUserCheck, BiUserCircle } from "react-icons/bi";
import { PiCaretDownLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="user-nav">
        <div className="user-nav-items">
          <div className="nav-logo">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="nav-cta">
            <div className="windows-img">
              <img src={windows} alt="windows" />
            </div>
            <div>
              <p>Use PC application</p>
              <p>Get your e-books at your finger tips</p>
            </div>
          </div>
          <div className="nav-balance">
            <div className="price">
              <p>Balance:</p>
              <p>6.14$</p>
            </div>
            <Button>
              <span>
                <MdOutlinePayment />
              </span>
              <span>Top up</span>
            </Button>
          </div>
          <div className="user-dropdown">
            <BiUserCircle style={{ fontSize: "50px" }} />
            <PiCaretDownLight style={{ fontSize: "20px" }} />
            <div className="dropdown-inner">
              <div>
                <p>email address</p>
                <Link to="/">
                  <BiUserCheck />
                  <span>Profile</span>
                </Link>
                <Link to="/">
                  <BiLogOutCircle /> <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
