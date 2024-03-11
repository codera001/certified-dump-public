import React from "react";
import "./contact.css";
import PublicLayout from "../../component/PublicLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SendMessage = async ({ name, email, description }) => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/contactUs",
        {
          name: name,
          email: email,
          description: description,
        }
      );
      reset();
      toast.success("Message Sent" || response.data.msg);
    } catch (error) {}
  };

  return (
    <PublicLayout>
      <div className="contact-address">
        <form onSubmit={handleSubmit(SendMessage)}>
          <h1>Contact Details</h1>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          {/* <input type="text" placeholder="Subject" /> */}
          <textarea
            type="text"
            {...register("description", { required: true })}
            placeholder="Type your message"
            cols="29"
            rows="10"
          ></textarea>
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
