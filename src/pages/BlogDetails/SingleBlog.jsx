import React from "react";
import PublicLayout from "../../component/PublicLayout";
import "./Single.css";
import "../Blog/Blog.css";
import LatestBlogs from "../../component/Latests";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineClockCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import image from "../../static/image.png";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <PublicLayout>
      <section className="mt-5 mb-5">
        <div className="blog-area">
          <div className="left-blog-area">
            <div className="blog-body-text mb-3">
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
              <div className="blog-image">
                <img loading="lazy" width={216} src={image} />
              </div>
              <div className="blog-text">
                <p className="blog-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  ex voluptas eos labore alias nostrum doloribus similique hic
                  sit. Quo, debitis tempora non odio ab corporis labore ut ad
                  consectetur. Quis deserunt repellendus perferendis. Libero
                  sint sunt pariatur illo temporibus a! Fugiat totam pariatur
                  laborum corrupti maxime voluptatum! Dignissimos, neque
                  quisquam explicabo dolorum iusto sapiente ipsa obcaecati vel
                  earum amet quasi consequatur voluptates. Consectetur placeat
                  veniam velit officiis exercitationem dicta expedita laboriosam
                  nam, doloribus quia corporis a error sed omnis nemo suscipit
                  ad officia! Sint quas asperiores laborum nisi blanditiis esse,
                  illum earum corporis architecto, dolorum et odio laudantium
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
              </div>
            </div>
            {/* Impleent pagination here */}
            <div className="b-comment-section">
              <h3>1 comment</h3>
              <h3>Leave a Reply</h3>
              <p>
                You must be <Link to="/login">logged in</Link> to post a comment.
              </p>
            </div>
          </div>

          <aside className="side-post">
            <div className="side-post-wrap">
              <h6 className="side-post-head mb-4"> LATEST POSTS</h6>
              <LatestBlogs />
            </div>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
};

export default SingleBlog;
