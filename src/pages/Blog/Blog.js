import React from "react";
import "./Blog.css";
import PublicLayout from "../../component/PublicLayout";
import BlogComponent from "../../component/Blog";
import LatestBlogs from "../../component/Latests";

function Blog() {
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
