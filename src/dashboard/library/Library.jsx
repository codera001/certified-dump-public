import React from "react";
import "./Library.css";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import { books } from "../components/variables.js";

const Library = () => {
  return (
    <Layout>
      <div className="lib-cards">
        {books.map((book, index) => (
          <Card
            key={index}
            image={book.image}
            title={book.title}
            cost={book.cost}
            date={book.date}
            provider={book.provider}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Library;
