import React, { useEffect, useState } from "react";
import PublicLayout from "../../component/PublicLayout";
import "./Single.css";
import "../Blog/Blog.css";
import LatestBlogs from "../../component/Latests";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineClockCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SingleBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComment] = useState([]);
  const [totalComments, setTotalComments] = useState("");
  const authToken = sessionStorage.getItem("token");
  const [userComment, setUserComment] = useState("");
  const userId = sessionStorage.getItem("userId");
  const url = window.location.href;

  const GetBlog = async () => {
    try {
      const res = await axios.post(
        `https://api.certifieddump.com/api-blog/getSingleBlogPost?post_id=${blogId}`
      );
      // console.log(res.data);
      setBlog(res.data.post[0]);
    } catch (error) {
      // console.log(error);
    }
  };

  const GetComments = async () => {
    try {
      const res = await axios.post(
        `https://api.certifieddump.com/api-blog/getSingleBlogPost?post_id=${blogId}`
      );
      // console.log(res.data);
      setComment(res.data.comments);
      setTotalComments(res.data.total_comments);
    } catch (error) {
      // console.log(error);
    }
  };

  const SendComment = async () => {
    try {
      const response = await axios.post(
        `https://api.certifieddump.com/api-blog/sendComment?postid=${blogId}&userid=${userId}`,
        {
          comment: userComment,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      GetComments();
      setUserComment("");
      toast.success("comment posted");
    } catch (error) {}
  };

  useEffect(() => {
    GetBlog();
    GetComments();
    setLoading(!loading);
  }, []);

  return (
    <PublicLayout>
      <section className="mt-5 mb-5">
        <div className="blog-area">
          <div className="left-blog-area">
            <div className="blog-body-text mb-3">
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
                  <span>
                    {new Date(blog.date_created).toLocaleDateString()}
                  </span>
                </div>
                <div className="span-user-text">
                  <AiOutlineComment />
                  <span>{totalComments} Comments</span>
                </div>
              </div>
              <div className="blog-image">
                <img loading="lazy" width={216} src={blog.image} />
              </div>
              <div className="blog-text">
                <div
                  className="blog-body"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                <div className="blog-social-icons">
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=${url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-social-icon"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-social-icon"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
                      "Look at this blog post"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-social-icon"
                  >
                    <AiFillTwitterCircle />
                  </a>
                </div>
              </div>
            </div>
            {/* Implement pagination here */}
            <div className="b-comment-section">
              {totalComments !== 0 && <h3>{totalComments} comments</h3>}
              <h3>Leave a Reply</h3>
              {!authToken && (
                <p>
                  You must be <Link to="/login">logged in</Link> to post a
                  comment.
                </p>
              )}

              {authToken && (
                <div className="blog">
                  <div className="blog-text-container">
                    <textarea
                      value={userComment}
                      rows={2}
                      cols={40}
                      onChange={(e) => {
                        setUserComment(e.currentTarget.value);
                      }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (userComment.trim() !== "") SendComment();
                    }}
                  >
                    Send
                  </button>
                </div>
              )}
              <ol style={{ marginTop: "1.5rem" }}>
                {comments.length !== 0 &&
                  comments
                    .sort(function (a, b) {
                      return b.id - a.id;
                    })
                    .map((comment, index) => {
                      return (
                        <li key={index} style={{ marginBottom: ".5rem" }}>
                          <strong style={{ marginRight: ".5rem" }}>
                            {sessionStorage.getItem("username")}:
                          </strong>
                          {comment.comment}
                          <small style={{ marginLeft: "4px" }}>
                            {new Date(
                              comment.date_commented
                            ).toLocaleDateString()}
                          </small>
                        </li>
                      );
                    })}
              </ol>
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
