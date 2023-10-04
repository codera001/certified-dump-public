import React, { useEffect, useState } from "react";
import "./Blog.css";
import PublicLayout from "../../component/PublicLayout";
import BlogComponent from "../../component/Blog";
import LatestBlogs from "../../component/Latests";
import axios from "axios";
import loader from "../../static/loader.gif";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetBlogs = async () => {
    try {
      const res = await axios.post(
        "https://api.certifieddump.com/api-blog/getAllBlogPosts"
      );
      console.log(res.data.post);
      setBlogs(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetBlogs();
    setLoading(!loading);
  }, []);

  return (
    <PublicLayout>
      <section className="mt-5 mb-5">
        <div className="blog-area">
          <div className="left-blog-area">
            {loading ? (
              <div className="d-gif-div">
                <img
                  loading="lazy"
                  src={loader}
                  alt="loading-gif"
                  className="d-gif"
                />
              </div>
            ) : blogs.length <= 0 ? (
              <div className="error">There are no blog posts yet</div>
            ) : (
              blogs.map((blog, i) => 
              (  <BlogComponent blog={blog} i={i} key={i} />)
              )
            )}
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
}

export default Blog;
