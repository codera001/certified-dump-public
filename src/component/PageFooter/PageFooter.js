import React from "react";
import './PageFooter.css'
// import footer from "../static/footer.png";
import logo from "../../static/logo.png";
import { RiHome4Fill } from "react-icons/ri";
import { HiOutlineArrowCircleRight, HiOutlineInformationCircle } from "react-icons/hi";
import { BiSolidMessageRoundedDetail, BiUserPin, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { TbEditCircle } from "react-icons/tb";
import { RxEnvelopeClosed} from "react-icons/rx";

function PageFooter() {
  return (
    <>
      <div className="footeer">
        <div className="pu-footer container bg-none">
          <div className="text">
            <h3>CONNECT WITH US</h3>
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
                < BiLogoTwitter className="icon me-2"></ BiLogoTwitter>
                <p>Twitter</p>
              </div>
              <div className="icon-text">
                <RxEnvelopeClosed className="icon me-2"></RxEnvelopeClosed>
                <p>Hello@certifieddump.com</p>
              </div>

            </div>
           
          </div>
          <div className="icons ">
            <h6 className="" style={{ fontWeight: "bolder" }}>SITEMAP</h6>
            <p className="line" />
            <div className="">
              <div className="mt-4">
                <RiHome4Fill></RiHome4Fill>
              </div>
              <div>
                <BiSolidMessageRoundedDetail></BiSolidMessageRoundedDetail>
              </div>
              <div>
                < HiOutlineArrowCircleRight></ HiOutlineArrowCircleRight>
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
      </div>
    </>
  );
}

export default PageFooter;