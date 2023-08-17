import React from "react";
import "./Library.css";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import { books } from "../components/variables.js";

const Library = () => {
  return (
    <Layout>
      <h2 className="lib-h2">All your books</h2>
      <div className="lib-books">
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
      </div>
    </Layout>
  );
};

export default Library;
