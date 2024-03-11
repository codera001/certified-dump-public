import axios from "axios";
import React, { useEffect, useState } from "react";

const LatestBlogs = () => {
  const [latests, setLatests] = useState([]);
  const GetBlogs = async () => {
    try {
      const res = await axios.post(
        "https://api.certifieddump.com/api-blog/getAllBlogPosts"
      );
      setLatests(
        res.data.post
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .slice(0, 4)
      );
    } catch (error) {}
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
            <a href={`/blog/${blog.id}`} className="side-post-span d-block">
              {blog.title}
            </a>
          </div>
        ))}
    </>
  );
};

export default LatestBlogs;
