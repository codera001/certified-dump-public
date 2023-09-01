import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import windows from "../../images/windows.png";
import { Button } from "../Button/Button";
import { BiLogOutCircle, BiUserCheck, BiUserCircle } from "react-icons/bi";
import { PiCaretDownLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { GiAutogun } from "react-icons/gi";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="d-user-nav">
        <div className="d-user-nav-items">
          <div className="d-nav-logo">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="d-nav-cta">
            <div className="d-windows-img">
              <img src={windows} alt="windows" />
            </div>
            <div>
              <p>Use PC application</p>
              <p>Get your e-books at your finger tips</p>
            </div>
          </div>
          <div className="d-nav-balance">
            <div className="d-price">
              <p className="d-bal">Balance:</p>
              <p className="d-value">$5003.20</p>
            </div>
            <Button>
              <span className="d-icon">
                <MdOutlinePayment />
              </span>
              <span className="d-text">Top up</span>
            </Button>
          </div>
          <div className="d-user-dropdown">
            <BiUserCircle className="d-drop-icon" />
            <PiCaretDownLight className="d-drop-icon-2" />
            <div className="d-dropdown-inner">
              <div>
                <p>email address</p>
                <Link to="/"
                  onClick={() => sessionStorage.clear()}
                >
                  <BiUserCheck />
                  <span>Profile</span>
                </Link>
                <Link to="/"
                  onClick={() => sessionStorage.clear()}
                >
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
