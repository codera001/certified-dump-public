import React from 'react'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import image from "../static/image.png";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  return (
    <div className="blog-image-text mb-3">
      <div className="blog-image">
        <img loading="lazy" src={image} />
      </div>
      <div className="blog-text">
        <p className="blog-text-head">Category</p>
        <h6 style={{ fontWeight: "bolder" }}>
          Lorem ipsum dolor sit amet, consecteteur adipiscing elit
        </h6>
        <p style={{ fontSize: "14px" }}>
          Aenan massa, Cum solicis natoquo <br /> mus....
          <Link to="/blog" style={{ color: "var(--tertiary-color)" }}>
            Read More
          </Link>
        </p>
        <div className="blog-social-icons">
          <div className="blog-social-icon me-2">
            <BsInstagram />
          </div>
          <div className="blog-social-icon me-2">
            <BsFacebook />
          </div>
          <div className="blog-social-icon">
            <AiFillTwitterCircle />
          </div>
        </div>
        <div className="span-user">
          <div className="">
            <FaUserCircle className="span-user-image" />
          </div>

          <div className="span-user-text">
            <span className="" style={{ fontSize: "14px" }}>
              Author
            </span>
            <span className="d-block">Mon Sept 11 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent