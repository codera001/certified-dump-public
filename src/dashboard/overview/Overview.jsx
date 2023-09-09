import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "./Overview.css";
import { books } from "../components/variables.js";
import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar.jsx/SearchBar";

const Overview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [book, setBook] = useState(books);
  return (
    <Layout>
      <div className="d-overview">
        <h2>Your Books</h2>
        <div className="d-overview-wrapper">
          <SearchBar title="Search Books" setSearchTerm={setSearchTerm} />
          <div className="d-overview-cards">
            {books
              .filter((book) => {
                if (searchTerm == "") return book;
                else if (
                  book.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return book;
                } else return null;
              })
              .map((book, index) => (
                <Card
                  key={index}
                  image={book.image}
                  title={book.title}
                  provider={book.provider}
                />
              ))}
          </div>
          {searchTerm !== "" &&
            books.filter((book) => {
              return book.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            }).length === 0 && (
              <div className="d-overview-no-books">No Books Found</div>
            )}
        </div>
        <h2>Admin Message</h2>
        <div className="d-overview-wrapper">
          <h3>Admin Message Title</h3>
          <div className="d-admin-msg">Welcome to your library fam</div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
//
