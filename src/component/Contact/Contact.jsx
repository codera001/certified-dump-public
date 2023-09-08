import React from "react";
import "./contact.css";
import logo from "../../static/logo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [show, setShow] = useState(false);
  const ShowMenu = () => {
    setShow(true);
  };
  const HideMenu = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="c-contact-top-section">
        <header>
          <div className="contact-logo-div">
            <img src={logo} alt="" />
          </div>
          {show && (
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Industry</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </nav>
          )}
          <BsThreeDotsVertical
            className={`${show ? "menu-close" : " "}`}
            onClick={ShowMenu}
          />
          {show && <MdOutlineCancelPresentation onClick={HideMenu} />}
        </header>

        <h1>CONTACT US</h1>
      </div>
      <div className="contact-desktop-header">
        <header>
          <div className="desktop-top-bar">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p>Want To Talk to Us ? +2345554433</p>
            </div>

            <div className="contact-social-icons">
              <AiFillFacebook className="social-icons" />
              <AiOutlineTwitter className="social-icons" />
              <AiOutlineInstagram className="social-icons" />
              <AiFillLinkedin className="social-icons" />
            </div>
          </div>
          <hr className="divider" />
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Industry</a>
              </li>
              <li className="contact-link">
                <a href="/">Contact Us</a>
              </li>
            </ul>
            <button>QUICK ENQUIRIES</button>
          </nav>
        </header>

        <h1>CONTACT US</h1>
      </div>

      <div className="contact-address">
        <form action="">
          <h1>Contact Details</h1>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="29" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2136699377807!2d7.469727974585522!3d9.044264488750699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b725f29ed31%3A0x91f228dad2b84eea!2s1473%20Inner%20Block%20St%2C%20Central%20Business%20Dis%20900103%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1693603549177!5m2!1sen!2sng"
          title="address"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <Footer/>
      
    </div>
  );
};

export default Contact;
