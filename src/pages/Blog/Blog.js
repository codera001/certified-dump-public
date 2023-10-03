import React from "react";
import "./Blog.css";
import PublicLayout from "../../component/PublicLayout";

import BlogComponent from "../../component/Blog";
import LatestBlogs from "../../component/Latests";
function Blog() {
  return (
    <PublicLayout>
      <section className="blog-area mt-5 mb-5">
        <div className="left-blog-area">
          <BlogComponent />
        </div>

        <div className="side-post">
          <div className="side-post-wrap">
            <h6 className="side-post-head"> LATEST POSTS</h6>
            <hr />
            <LatestBlogs />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default Blog;
