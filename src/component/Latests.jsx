import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LatestBlogs = () => {
  const navigate = useNavigate();
  const [latests, setLatests] = useState([]);
  const [blog, setBlog] = useState([]);

  const GetBlogs = async () => {
    try {
      const res = await axios.post(
        "https://api.certifieddump.com/api-blog/getAllBlogPosts"
      );
      // console.log(res.data.post);
      setLatests(
        res.data.post
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .slice(0, 4)
      );
    } catch (error) {
      // console.log(error);
    }
  };

  const GetBlog = async (blogId) => {
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

  useEffect(() => {
    GetBlogs();
  }, []);
  return (
    <>
      {latests &&
        latests.length > 0 &&
        latests.map((blog, i) => (
          <div className="recents" key={i}>
            <p className="side-post-date mb-0">
              {new Date(blog.date).toDateString()}
            </p>
            <span
              onClick={() => {
                navigate(`/blog/${blog.id}`);
                GetBlog(blog.id);
              }}
              className="side-post-span d-block"
            >
              {blog.title}
            </span>
          </div>
        ))}
    </>
  );
};

export default LatestBlogs;
