import React from "react";
import NavigationBar from "../Navigation bar/NavigationBar";
import Footer from "../Footer/Footer";
import "./contact.css";
import PublicLayout from "../PublicLayout";

const Contact = () => {
  return (
    <PublicLayout>
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
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </PublicLayout>
  );
};

export default Contact;
