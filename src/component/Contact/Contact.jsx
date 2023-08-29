import React from "react";
import "./contact.css";
import NavigationBar from "../Navigation bar/NavigationBar";
import Footer from "../Footer/Footer";
import { AiOutlineDown } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <NavigationBar />
      <section className="c-contact-page">
        <div className="c-contact-top-section ">
          <h1>CONTACT US </h1>
        </div>
        <div className="c-contact-body">
          <form action="">
            {/* <h1>CONTACT US</h1> */}
            <p> Let Us Know How We Can Help</p>
            <div>
              <label htmlFor="Name">
                Name<span>*</span>
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="Email">
                Email<span>*</span>
              </label>
              <input type="text" />
            </div>
            <div className="c-contact-textarea">
              <label htmlFor="">
                Tell Us About it<span>*</span>
              </label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
          </form>
          <div className="c-contact-body-inquiries">
            <div>
              <h1>FOR MORE INQUIRIES</h1>
              <p>
                Our dedicated suport team is always ready to assist you. we are
                Available Monday through Friday, from 8AM to 8PM
              </p>
            </div>
            <div>
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
              <div className="c-contact-body-questions">
                <p>Are the questions on the site authentic and relevant?</p>
                <AiOutlineDown className="c-arrow" />
              </div>
              <div className="c-contact-body-questions">
                <p>Can I trust the accuracy of the provided answers?</p>
                <AiOutlineDown className="c-arrow" />
              </div>
              <div className="c-contact-body-questions">
                <p>Can I access thw site on mobile devices?</p>
                <AiOutlineDown className="c-arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
