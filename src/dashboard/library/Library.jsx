import React, { useEffect, useState } from "react";
import "./Library.css";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar.jsx/SearchBar";
import loader from "../../static/loader.gif";
import axios from "axios";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [boughtBooks, setBoughtBooks] = useState([]);
  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  let userid = sessionStorage.getItem("userId");

  const GetBoughtBooks = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api-wallet/user-bought-books?userid=${userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBoughtBooks(
        response.data.result.sort(function (a, b) {
          return b.id - a.id;
        })
      );
      // console.log(response);
    } catch (error) {
      //  setError(error.response.data.msg);
      console.log(error);
    }
  };

  useEffect(() => {
    GetBoughtBooks();
    setLoading(!loading);
  }, []);
  return (
    <Layout>
      <h2 className="d-lib-h2">All your books</h2>
      <div className="d-lib-books">
        {loading ? (
          <div className="d-gif-div">
            <img src={loader} alt="loading-gif" className="d-gif" />
          </div>
        ) : boughtBooks.length === 0 ? (
          <div className="d-lib-no-books">You have no Exams yet</div>
        ) : (
          <>
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
          </>
        )}
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
