import React from "react";
import Layout from "../components/Layout/Layout";
import "./Overview.css";
import { books } from "../components/variables.js";

const Overview = () => {
  return (
    <Layout>
      <div className="overview">
        <h2>Your Books</h2>
        <div className="overview-wrapper">
          <div className="cards">
            {books.map((book, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="card-details">
                  <p>{book.title}</p>
                  <p>{book.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2>Admin Message</h2>
        <div className="overview-wrapper">
          <h3>Admin Message Title</h3>
          <div>Welcome to your library fam</div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
