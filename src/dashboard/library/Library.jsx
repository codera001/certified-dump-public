import React, { useState } from "react";
import "./Library.css";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import { books } from "../components/variables.js";
import SearchBar from "../components/SearchBar.jsx/SearchBar";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <h2 className="d-lib-h2">All your books</h2>
      <div className="d-lib-books">
        <SearchBar title="Search Books" setSearchTerm={setSearchTerm} />
        <div className="d-lib-cards">
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
                cost={book.cost}
                date={book.date}
                provider={book.provider}
              />
            ))}
        </div>
        {searchTerm !== "" &&
          books.filter((book) => {
            return book.title.toLowerCase().includes(searchTerm.toLowerCase());
          }).length === 0 && (
            <div className="d-lib-no-books">No Books Found</div>
          )}
      </div>
    </Layout>
  );
};

export default Library;
