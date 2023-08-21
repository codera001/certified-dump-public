import React from "react";
import Layout from "../components/Layout/Layout";
import "./Overview.css";
import { books } from "../components/variables.js";
import Card from "../components/Card/Card";

const Overview = () => {
  return (
    <Layout>
      <div className="d-overview">
        <h2>Your Books</h2>
        <div className="d-overview-wrapper">
          <div className="d-overview-cards">
            {books.map((book, index) => (
              <Card
                key={index}
                image={book.image}
                title={book.title}
                provider={book.provider}
              />
            ))}
          </div>
        </div>
        <h2>Admin Message</h2>
        <div className="d-overview-wrapper">
          <h3>Admin Message Title</h3>
          <div>Welcome to your library fam</div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
// 