import React from "react";
import "./PageFooter.css";
// import footer from "../static/footer.png";
import logo from "../../static/logo.png";
import { RiHome4Fill } from "react-icons/ri";
import {
  HiOutlineArrowCircleRight,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import {
  BiSolidMessageRoundedDetail,
  BiUserPin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { TbEditCircle } from "react-icons/tb";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link } from "react-router-dom";

function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="pa-footeer">
      <div>
        <div className="pa-footer d-md-flex justify-content-between container bg-none">
          <div className="text">
            <h6 style={{ fontWeight: "bolder" }}>CONNECT WITH US</h6>
            <div className="">
              <div className="icon-text">
                <a href="/" target="_blank" rel="noreferrer">
                  <BiLogoFacebook className="icon me-2" />
                  <p>Facebook</p>
                </a>
              </div>
              <div className="icon-text">
                <a href="/" target="_blank" rel="noreferrer">
                  <BiLogoInstagram className="icon me-2" />
                  <p>Instagram</p>
                </a>
              </div>
              <div className="icon-text">
                <a href="/" target="_blank" rel="noreferrer">
                  <BiLogoTwitter className="icon me-2" />
                  <p>Twitter</p>
                </a>
              </div>
              <div className="icon-text">
                <a href="/" target="_blank" rel="noreferrer">
                  <RxEnvelopeClosed className="icon me-2" />
                  <p>Hello@certifieddump.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="icons ">
            <h6 className="" style={{ fontWeight: "bolder" }}>
              SITEMAP
            </h6>
            <p className="line" />
            <div className="icons-icon">
              <Link to="/">
                <RiHome4Fill />
                <p>Home</p>
              </Link>
              <Link to="/">
                <BiSolidMessageRoundedDetail />
                <p>Exams</p>
              </Link>
              <Link to="/">
                <HiOutlineArrowCircleRight />
                <p>Providers</p>
              </Link>
              <Link to="/">
                <TbEditCircle />
                <p>Support</p>
              </Link>
              <Link to="/">
                <BiUserPin />
                <p>Call us</p>
              </Link>
              <Link to="/">
                <HiOutlineInformationCircle />
                <p>More info</p>
              </Link>
            </div>
          </div>
        </div>
        <small className="text-center text-white">{`Copyright © Certified dump ${year}`}</small>
      </div>
    </div>
  );
}

export default PageFooter;
