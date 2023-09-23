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
                <BiLogoFacebook className="icon me-2"></BiLogoFacebook>
                <p>facebook</p>
              </div>
              <div className="icon-text">
                <BiLogoInstagram className="icon me-2"></BiLogoInstagram>
                <p>Instagram</p>
              </div>
              <div className="icon-text">
                <BiLogoTwitter className="icon me-2"></BiLogoTwitter>
                <p>Twitter</p>
              </div>
              <div className="icon-text">
                <RxEnvelopeClosed className="icon me-2"></RxEnvelopeClosed>
                <p>Hello@certifieddump.com</p>
              </div>
            </div>
          </div>
          <div className="icons ">
            <h6 className="" style={{ fontWeight: "bolder" }}>
              SITEMAP
            </h6>
            <p className="line" />
            <div className="icons-icon">
              <div className="">
                <RiHome4Fill></RiHome4Fill>
              </div>
              <div>
                <BiSolidMessageRoundedDetail></BiSolidMessageRoundedDetail>
              </div>
              <div>
                <HiOutlineArrowCircleRight></HiOutlineArrowCircleRight>
              </div>
              <div>
                <TbEditCircle></TbEditCircle>
              </div>
              <div>
                <BiUserPin></BiUserPin>
              </div>
              <div>
                <HiOutlineInformationCircle></HiOutlineInformationCircle>
              </div>
            </div>
          </div>
        </div>
        <small className="text-center text-white">{`Copyright © Certified dump ${year}`}</small>
      </div>
    </div>
  );
}

export default PageFooter;
