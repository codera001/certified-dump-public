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
      setBlogs(res.data.post);
    } catch (error) {}
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const blogsPerPage = 5;

  // Assuming 'blogs' is your array of blogs
  const totalBlogs = blogs.length;
  useEffect(() => {
    setTotalPages(Math.ceil(totalBlogs / blogsPerPage));
  }, [totalBlogs]);

  // Calculate the range of blogs to display on the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = Math.min(startIndex + blogsPerPage, totalBlogs);
  const displayedBlogs = blogs.slice(startIndex, endIndex);

  // Function to handle pagination click
  const handlePageClick = (page) => {
    setCurrentPage(page);
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
            ) : totalBlogs <= 0 ? (
              <div className="error">There are no blog posts yet</div>
            ) : (
              displayedBlogs.map((blog, i) => (
                <BlogComponent
                  blog={blog}
                  i={i}
                  key={i}
                  description="Take a look at this blog post"
                />
              ))
            )}

            {/* Pagination Buttons */}
            <div className="pagination">
              {/* Previous Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  if (page === currentPage) {
                    return <span key={page}>{page}</span>;
                  } else if (
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 2
                  ) {
                    return (
                      <button key={page} onClick={() => handlePageClick(page)}>
                        {page}
                      </button>
                    );
                  } else if (Math.abs(page - currentPage) === 3) {
                    return <span key={page}>...</span>;
                  }
                  return null;
                }
              )}

              {/* Next Button */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(currentPage + 1)}
              >
                Next
              </button>
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
}

export default Blog;
