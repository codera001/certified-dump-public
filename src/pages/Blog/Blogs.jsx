import React from "react";
import "./Blog.css";
import PublicLayout from "../../component/PublicLayout";
import Blog from "./Blog";
import LatestBlogs from "./Latests";

function Blog() {
  return (
    <PublicLayout>
      <section className="mt-5 mb-5">
        <div className="blog-area">
          <div className="left-blog-area">
            <Blog />
          </div>

          <aside className="side-post">
            <div className="side-post-wrap">
              <h6 className="side-post-head"> LATEST POSTS</h6>
              <hr />
              <LatestBlogs />
            </div>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
}

export default Blog;
