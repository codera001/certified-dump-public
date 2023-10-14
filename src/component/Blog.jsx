import React from "react";
import { BsArrowRight, BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineClockCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogComponent = ({ blog, i, description }) => {
  const url = window.location.href;
  return (
    <div key={i} className="blog-image-text mb-4 pb-3">
      <div className="blog-image">
        <img loading="lazy" width={216} src={blog.image} />
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
            <span>{new Date(blog.date_created).toLocaleDateString()}</span>
          </div>
          {/* <div className="span-user-text">
            <AiOutlineComment />
            <span>3 Comments</span>
          </div> */}
        </div>
          <div
            className="blog-description"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        <div className="blog-social-icons">
          <a
            href={`https://www.linkedin.com/shareArticle?url=${url}/${blog.id}`}
            target="_blank"
            rel="noreferrer"
            className="blog-social-icon"
          >
            <BsLinkedin />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}/${blog.id}`}
            target="_blank"
            rel="noreferrer"
            className="blog-social-icon"
          >
            <BsFacebook />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${url}/${
              blog.id
            }&text=${encodeURI(description)}`}
            target="_blank"
            rel="noreferrer"
            className="blog-social-icon"
          >
            <AiFillTwitterCircle />
          </a>
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
