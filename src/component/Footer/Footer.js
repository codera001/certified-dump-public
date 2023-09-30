import React from "react";
import "./footer.css";
import logo from "../../static/logow.png";
import { RiHome4Fill } from "react-icons/ri";
import {
  HiOutlineArrowCircleRight,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { BiSolidMessageRoundedDetail, BiUserPin } from "react-icons/bi";
import { TbEditCircle } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footeer">
      <div className="pu-footer d-md-flex justify-content-between container bg-none">
        <div className="text">
          <div className="logo">
            <img loading="lazy" src={logo} alt="logo" />
          </div>
          <div className="f-desc">
            <p className="text-start mt-3">
              We are the largest and most curent website offering IT
              certifications test materials.
            </p>
            <p className="text-start">
              Our mission is to enhance the IT professionals community for free
              by using our own resources
            </p>
          </div>
        </div>
        <div className="icons">
          <h6 style={{ fontWeight: "bolder" }}>SITEMAP</h6>
          <p className="line" />
          <div className="icons-icon">
            <Link to="/">
              <RiHome4Fill />
              <p>Home</p>
            </Link>
            <Link to="/about">
              <BiSolidMessageRoundedDetail />
              <p>About</p>
            </Link>
            <Link to="/blog">
              <BiUserPin />
              <p>Blogs</p>
            </Link>
            <Link to="/providers">
              <HiOutlineArrowCircleRight />
              <p>Providers</p>
            </Link>
            <Link to="/contact">
              <TbEditCircle />
              <p>Support</p>
            </Link>
            <Link to="/login">
              <HiOutlineInformationCircle />
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
      <small className="text-center text-white">{`Copyright © Certified dump ${year}`}</small>
    </div>
  );
}

export default Footer;
