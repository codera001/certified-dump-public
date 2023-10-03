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

const BlogComponent = () => {
  return (
    <div className="blog-image-text mb-3">
      <div className="blog-image">
        <img loading="lazy" width={216} src={image} />
      </div>
      <div className="blog-text">
        <h6 style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
          Lorem ipsum dolor sit amet, consecteteur adipiscing elit
        </h6>
        <div className="span-user">
          <div className="span-user-text">
            <FaUserCircle />
            <span>Author</span>
          </div>
          <div className="span-user-text">
            <AiOutlineClockCircle />
            <span>Date</span>
          </div>
          <div className="span-user-text">
            <AiOutlineComment />
            <span>3 Comments</span>
          </div>
        </div>
        <p className="blog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
          voluptas eos labore alias nostrum doloribus similique hic sit. Quo,
          debitis tempora non odio ab corporis labore ut ad consectetur. Quis
          deserunt repellendus perferendis. Libero sint sunt pariatur illo
          temporibus a! Fugiat totam pariatur laborum corrupti maxime
          voluptatum! Dignissimos, neque quisquam explicabo dolorum iusto
          sapiente ipsa obcaecati vel earum amet quasi consequatur voluptates.
          Consectetur placeat veniam velit officiis exercitationem dicta
          expedita laboriosam nam, doloribus quia corporis a error sed omnis
          nemo suscipit ad officia! Sint quas asperiores laborum nisi blanditiis
          esse, illum earum corporis architecto, dolorum et odio laudantium
          dolores!
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
        <Link to="/blog" className="read-more">
          <span className="me-2">Read More</span>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
