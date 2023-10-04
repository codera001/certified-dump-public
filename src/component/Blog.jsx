import React from "react";
import { BsArrowRight, BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineClockCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import image from "../static/image.png";
import { Link } from "react-router-dom";

const BlogComponent = ({ blog, i }) => {
  return (
    <div key={i} className="blog-image-text mb-4 pb-3">
      <div className="blog-image">
        <img loading="lazy" width={216} src={image} />
      </div>
      <div className="blog-text">
        <h6 style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
          {blog.title}
        </h6>
        <div className="span-user">
          <div className="span-user-text">
            <FaUserCircle />
            <span>{blog.author}</span>
          </div>
          <div className="span-user-text">
            <AiOutlineClockCircle />
            <span>{blog.date_created}</span>
          </div>
          <div className="span-user-text">
            <AiOutlineComment />
            <span>3 Comments</span>
          </div>
        </div>
        <p className="blog-description">{blog.content}</p>
        <div className="blog-social-icons">
          <div className="blog-social-icon">
            <BsInstagram />
          </div>
          <div className="blog-social-icon">
            <BsFacebook />
          </div>
          <div className="blog-social-icon">
            <AiFillTwitterCircle />
          </div>
        </div>
        <Link to={`/blog/${blog.id}`} className="read-more">
          <span className="me-2">Read More</span>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
