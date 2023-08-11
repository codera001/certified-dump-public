import React from "react";
import './footer.css'
// import footer from "../static/footer.png";
import logo from "../static/logo.png";
import { RiHome4Fill } from "react-icons/ri";
import { HiOutlineArrowCircleRight, HiOutlineInformationCircle } from "react-icons/hi";
import { BiSolidMessageRoundedDetail, BiUserPin } from "react-icons/bi";
import {TbEditCircle } from "react-icons/tb";


function Footer() {
  return (
    <>
      <div className="footeer">
        <div className="footer container ">
        <div className="text">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />

          <div>
            <p className="text-start mt-5">
              We are the largest and most curent website offering IT certifications test materials.
            </p>
            <p className="text-start">
              Our mission is to enhance the IT professionals community for free by using our own resources
            </p>
          </div>
        </div>
        <div className="icons ">
          <h6 className="" style={{fontWeight:"bolder"}}>SITEMAP</h6>
          <p className="line"/>
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

export default Footer;