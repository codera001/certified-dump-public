import React from "react";
import { BsArrowRight, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import image from "../../static/image.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-image-text mb-3">
      <div className="blog-image">
        <img loading="lazy" width={216} src={image} />
      </div>
      <div className="blog-text">
        <p className="blog-text-head">Category</p>
        <h6 style={{ fontWeight: "bolder" }}>
          Lorem ipsum dolor sit amet, consecteteur adipiscing elit
        </h6>
        <p className="blog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex voluptas eos labore alias nostrum doloribus similique hic sit. Quo, debitis tempora non odio ab corporis labore ut ad consectetur. Quis deserunt repellendus perferendis. Libero sint sunt pariatur illo temporibus a! Fugiat totam pariatur laborum corrupti maxime voluptatum! Dignissimos, neque quisquam explicabo dolorum iusto sapiente ipsa obcaecati vel earum amet quasi consequatur voluptates. Consectetur placeat veniam velit officiis exercitationem dicta expedita laboriosam nam, doloribus quia corporis a error sed omnis nemo suscipit ad officia! Sint quas asperiores laborum nisi blanditiis esse, illum earum corporis architecto, dolorum et odio laudantium dolores!
        </p>
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
        <Link to="/blog" style={{ color: "var(--tertiary-color)" }}>
          <span className="me-2">Read More</span>
          <BsArrowRight />
        </Link>
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
};

export default Blog;
