import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import windows from "../../images/windows.png";
import { BiLogOutCircle, BiUserCheck, BiUserCircle } from "react-icons/bi";
import { PiCaretDownLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
// import { Button } from "react-bootstrap";
import { Button } from "../Button/Button";

const Nav = () => {
  const email = sessionStorage.getItem("userEmail");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");
  let userid = sessionStorage.getItem("userId");

  const getUserBalance = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api-wallet/userbalance?userid=${userid}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      setBalance(response.data.result[0].balance);
      // console.log(response);
    } catch (error) {
      setError(error.response.data.msg);
      // setError(error.response.data.msg);
      // console.log(error);
    }
  };

  useEffect(() => {
    getUserBalance();
    sessionStorage.setItem("balance", balance);
  }, []);

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
          {/* <Button /> */}
          <div className="d-nav-balance">
            <div className="d-price">
              <p className="d-bal">Balance:</p>
              <p className="d-value">${Number(balance).toFixed(2)}</p>
            </div>
            <Link to="/payment">
              <span className="d-icon">
                <MdOutlinePayment />
              </span>
              <span className="d-text">Top up</span>
            </Link>
          </div>
          <div className="d-user-dropdown">
            <BiUserCircle className="d-drop-icon" />
            <PiCaretDownLight className="d-drop-icon-2" />
            <div className="d-dropdown-inner">
              <div>
                <p>{email}</p>
                <Link to="/profile" onClick={() => sessionStorage.clear()}>
                  <BiUserCheck />
                  <span>Profile</span>
                </Link>
                <Link to="/" onClick={() => sessionStorage.clear()}>
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
