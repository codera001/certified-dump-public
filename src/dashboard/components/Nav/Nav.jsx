import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import windows from "../../images/windows.png";
import { Button } from "../Button/Button";

const Nav = () => {
  return (
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
          <div>
            <p>Balance:</p>
            <p>6.14$</p>
          </div>
          <Button>
            <span>texts</span>
            <span></span>
          </Button>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
