import React, { useEffect, useRef, useState } from "react";
import "./Preview.css";
import { AiOutlineLogin, AiOutlineSearch } from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import loader from "../../static/loader.gif";
import SearchBar from "../../component/SearchBar";
import PublicLayout from "../../component/PublicLayout";
import Back from "../../component/Back";

function Preview() {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem("token"));
  const navigate = useNavigate();
  const { providerName, examName, bookId } = useParams();
  const [book, setBook] = useState(null);
  const [show, setHide] = useState(false);

  let modalRef = useRef();
  const closeModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setHide(false);
    }
  };

  const GetBook = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api-admin/getBook/${bookId}`
      );
      // console.log(response.data.book);
      setBook(response.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  const BuyBook = async (bookId, price, title) => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api-wallet/buyBook",
        {
          userid: sessionStorage.getItem("userId"),
          bookid: bookId,
          price: price,
          title: title,
          type: "book",
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response);
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    GetBook();
  }, []);

  return (
    <PublicLayout>
      <div className="d-flex justify-content-between">
        <div className="navigate container mb-4">
          <Back path={`/provider/${providerName}/${examName}`} />
          <SearchBar text="Keyword" />
        </div>
      </div>
      {book ? (
        <>
          <div className="preview-header container-fluid">
            <div className="container">
              <h1>
                <strong>
                  {book.exam || ""}
                  ACA-Cloud1:
                </strong>
                {book.title}
              </h1>
              <p style={{ fontWeight: "bolder" }}>{/* {book.author} */}</p>
              <small style={{ fontWeight: "bolder" }}>
                {book.page_count || ""}
                Pages 1, Published online:
                {book.published_date || ""}
                September 1, 2023
              </small>
            </div>
          </div>

          <div className="container preview-text mt-5 mb-3">
            <div className="p-book-img">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="p-book-deet">
              <h5>Abstract</h5>
              <p>{book.description}</p>
            </div>
          </div>
          <div className="preview-keyword">
            <div className="d-flex align-items-center mb-2">
              <AiOutlineSearch
                className="me-2"
                style={{ fontWeight: "bolder", fontSize: "18px" }}
              ></AiOutlineSearch>
              <p style={{ fontWeight: "bolder" }}>Keywords: </p>
            </div>
            <div className="keyword ms-2">
              <p>Keyword</p>
              <p>Keyword</p>
              <p>Keyword</p>
              <p>Keyword</p>
            </div>
          </div>

          <div className="preview-auth-buy">
            {!authToken && (
              <div className="preview-auth">
                <Link to="/login" className="d-flex py-3">
                  <AiOutlineLogin
                    style={{ fontSize: "25px", marginRight: "1rem" }}
                  ></AiOutlineLogin>
                  <h6 className="mt-2"> Login</h6>
                </Link>
                <hr className="preview-line" />
                <Link to="/signup" className="d-flex py-3">
                  <TbEditCircle
                    style={{ fontSize: "25px", marginRight: "1rem" }}
                  ></TbEditCircle>
                  <h6 className="mt-2">Sign Up</h6>
                </Link>
              </div>
            )}
            <div className="preview-purchase">
              <h5 className="ps-2 mt-2">Buy Exam</h5>
              <div className="preview-purchase-text mx-2 my-2 px-2">
                <h6 className="mt-2 mb-0" style={{ fontSize: "14px" }}>
                  PDF download + Online access
                </h6>
                <p>
                  <BsDot style={{ fontSize: "25px" }} />
                  Lifetime access to exam PDF & online version
                </p>
                <p>
                  <BsDot style={{ fontSize: "25px" }} />
                  Exam PDF can be downloaded
                </p>
                <p>
                  <BsDot style={{ fontSize: "25px" }} />
                  Exam PDF can be printed
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 style={{ fontSize: "14px" }}>
                    USD
                    {book.price}
                  </h6>
                  <button
                    onClick={() => {
                      if (authToken) {
                        setHide(!show);
                      } else {
                        sessionStorage.setItem(
                          "bookRoute",
                          `/provider/${providerName}/${examName}/${bookId}`
                        );
                        navigate("/login");
                        toast.error("Please login to buy a book");
                      }
                    }}
                    className="px-2 mb-1"
                    style={{
                      border: "1px solid var(--tertiary-color)",
                      background: "none",
                    }}
                  >
                    <HiShoppingCart
                      style={{
                        color: "var(--tertiary-color)",
                        fontSize: "15px",
                      }}
                    ></HiShoppingCart>
                    <small
                      className="ms-2"
                      style={{
                        color: "var(--black)",
                      }}
                    >
                      Buy Exam
                    </small>
                  </button>
                </div>
              </div>
            </div>
            {show && (
              <div onClick={closeModal} className="change-pass-page">
                <div ref={modalRef} className="change-password book-modal">
                  <h3 style={{ textAlign: "center" }}>
                    Do you want to buy this book?
                  </h3>
                  <div className="container preview-text mt-5 mb-3">
                    <div className="p-book-img">
                      <img src={book.image} alt={book.title} />
                    </div>
                    <div className="p-book-deet">
                      <h5>Abstract</h5>
                      <p>{book.description}</p>
                    </div>
                  </div>
                  <div className="submit-cancel-Btn">
                    <button
                      onClick={() => {
                        BuyBook(book.id, Number(book.price), book.title);
                        setTimeout(() => {
                          setHide(false);
                        }, 3000);
                      }}
                    >
                      YES
                    </button>
                    <button onClick={() => setHide(false)}>NO</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="d-gif-div">
          <img
            loading="lazy"
            src={loader}
            alt="loading-gif"
            className="d-gif"
          />
        </div>
      )}
    </PublicLayout>
  );
}

export default Preview;
