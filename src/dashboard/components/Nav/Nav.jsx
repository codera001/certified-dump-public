import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import windows from "../../images/windows.png";
import { BiLogOutCircle, BiUserCheck, BiUserCircle } from "react-icons/bi";
import { PiCaretDownLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import loader from "../../../static/loader.gif";
import { googleLogout } from "@react-oauth/google";

const Nav = () => {
  const email = sessionStorage.getItem("userEmail");
  const balance = sessionStorage.getItem("balance");
  const [loading, setLoading] = useState(true);
  let userid = sessionStorage.getItem("userId");
  const currency = sessionStorage.getItem("currency");
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
      // setBalance(response.data.result[0].balance);
      sessionStorage.setItem("balance", response.data.result[0].balance);
      // console.log(response);
    } catch (error) {
    } finally {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    getUserBalance();
  }, []);

  return (
    <>
      <nav className="d-user-nav">
        <div className="d-user-nav-items">
          <div className="d-nav-logo">
            <img loading="lazy" src={logo} alt="logo" />
          </div>
          <div className="d-nav-cta">
            <div className="d-windows-img">
              <img loading="lazy" src={windows} alt="windows" />
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
              {loading ? (
                <div className="d-gif-div">
                  <img
                    loading="lazy"
                    src={loader}
                    alt="loading-gif"
                    className="d-gif"
                  />
                </div>
              ) : (
                <p className="d-value">
                  {currency === "NGN" ? (
                    <s style={{ textDecorationStyle: "double" }}>N</s>
                  ) : (
                    "$"
                  )}
                  {Number(balance).toFixed(2)}
                </p>
              )}
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
                <Link to="/profile">
                  <BiUserCheck />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/login"
                  onClick={() => {
                    sessionStorage.clear();
                    googleLogout();
                  }}
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
