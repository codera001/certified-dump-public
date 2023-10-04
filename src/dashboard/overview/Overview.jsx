import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import "./Overview.css";
import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar.jsx/SearchBar";
import loader from "../../static/loader.gif";
import axios from "axios";
import Announcement from "../components/Card/Announcement";
import ModalLayout from "../../component/ModalLayout";

const Overview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [boughtBooks, setBoughtBooks] = useState([]);
  const [adminMessage, setAdminMessage] = useState([]);
  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  let userid = sessionStorage.getItem("userId");
  const [show, setHide] = useState(false);
  const [modalIndex, setModalIndex] = useState(-1);
  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(-1);
  };

  let modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        response.data.result
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .slice(0, 4)
      );
      // console.log(response);
    } catch (error) {
      //  setError(error.response.data.msg);
      // console.log(error);
    }
  };

  const GetAdminMessages = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getAnnouncement",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data.Announcement);
      setAdminMessage(
        response.data.Announcement.sort(function (a, b) {
          return b.id - a.id;
        })
      );
    } catch (error) {
      //  setError(error.response.data.msg);
      // console.log(error);
    }
  };

  useEffect(() => {
    GetBoughtBooks();
    GetAdminMessages();
    setLoading(!loading);
  }, []);

  return (
    <Layout>
      <div className="d-overview">
        <h2>Your Books</h2>
        <div className="d-overview-wrapper">
          {loading ? (
            <div className="d-gif-div">
              <img
                loading="lazy"
                src={loader}
                alt="loading-gif"
                className="d-gif"
              />
            </div>
          ) : boughtBooks.length === 0 ? (
            <div className="d-overview-no-books">You have no Exams yet</div>
          ) : (
            <>
              <SearchBar title="Search Books" setSearchTerm={setSearchTerm} />
              <div className="d-overview-cards">
                {boughtBooks
                  .filter((book) => {
                    if (searchTerm == "") return book;
                    else if (
                      book.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return book;
                    } else return null;
                  })
                  .map((book, index) => (
                    <Card
                      key={index}
                      image={book.image}
                      title={book.title}
                      provider={book.providerid}
                    />
                  ))}
              </div>
            </>
          )}
          {searchTerm !== "" &&
            boughtBooks.filter((book) => {
              return book.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            }).length === 0 && (
              <div className="d-overview-no-books">No Books Found</div>
            )}
        </div>
        <h2>Admin Message</h2>
        <div className="d-overview-wrapper">
          {/* <h3>Admin Message Title</h3> */}
          {loading ? (
            <div className="d-gif-div">
              <img
                loading="lazy"
                src={loader}
                alt="loading-gif"
                className="d-gif"
              />
            </div>
          ) : adminMessage.length === 0 ? (
            <div className="d-overview-no-books">No announcement</div>
          ) : (
            <div className="d-overview-cards d-admin-cards">
              {adminMessage.map((message, i) => (
                <div
                  key={i}
                  onClick={() => {
                    openModal(i);
                  }}
                  className="d-card"
                >
                  <Announcement
                    title={message.title}
                    body={message.body}
                    date={new Date(message.send_date).toDateString()}
                    image={message.image_url}
                  />
                  {modalIndex === i && (
                    <div onClick={closeModal} className="change-pass-page">
                      <div
                        ref={modalRef}
                        className="change-password book-modal"
                      >
                        <h3 style={{ textAlign: "center" }}>{message.title}</h3>
                        <div className="container preview-text mt-3 mb-3">
                          <div className="p-book-img">
                            <img src={message.image_url} alt={message.title} />
                          </div>
                          <div className="p-book-deet">
                            <p>{message.body}</p>
                          </div>
                        </div>
                        {/* <div className="submit-cancel-Btn">
                          <button onClick={() => {
                            closeModal()
                          console.log("please close");}}>OK</button>
                        </div> */}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
