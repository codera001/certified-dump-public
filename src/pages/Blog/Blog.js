import React from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import image from "../../static/image.png";
import "./Blog.css";
import PublicLayout from "../../component/PublicLayout";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <PublicLayout>
      <section className="blog-area mt-5 mb-5">
        <div className="left-blog-area">
          <div className="blog-image-text mb-3">
            <div className="blog-image">
              <img src={image}></img>
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

          <hr />
          <div className="blog-image-text mb-2">
            <div className="blog-image">
              <img src={image}></img>
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

          <hr />
          <div className="blog-image-text">
            <div className="blog-image">
              <img src={image}></img>
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
        </div>

        <div className="side-post">
          <div className="side-post-wrap">
            <h6 className="side-post-head"> LATEST POSTS</h6>
            <hr />
            <div>
              <p className="side-post-date  mb-0"> Mon Sept 11 2023</p>
              <span className="side-post-span d-block ">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <hr />
            <div>
              <p className="side-post-date  mb-0"> Mon Sept 11 2023</p>
              <span className="side-post-span d-block ">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <hr />
            <div>
              <p className="side-post-date  mb-0"> Mon Sept 11 2023</p>
              <span className="side-post-span d-block ">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <hr />
            <div>
              <p className="side-post-date  mb-0"> Mon Sept 11 2023</p>
              <span className="side-post-span d-block ">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <hr />
            <div>
              <p className="side-post-date  mb-0"> Mon Sept 11 2023</p>
              <span className="side-post-span d-block ">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default Blog;
