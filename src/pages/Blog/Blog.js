import React, { useEffect, useState } from "react";
import "./Blog.css";
import PublicLayout from "../../component/PublicLayout";
import BlogComponent from "../../component/Blog";
import LatestBlogs from "../../component/Latests";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState(null);
  const GetBlogs = async () => {
    try {
      const res = await axios.get(
        "https://api.certifieddump.com/api-blog/getAllBlogPosts"
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => GetBlogs(), []);

  return (
    <PublicLayout>
      <section className="mt-5 mb-5">
        <div className="blog-area">
          <div className="left-blog-area">
            <BlogComponent />
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
