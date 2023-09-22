import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import Footer from "../../component/Footer/Footer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineSearch } from "react-icons/ai";
import { TiArrowLeftThick } from "react-icons/ti";
import "./Exams.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Provider from "../../component/Provider";
import loader from "../../static/loader.gif";


function Blockchain() {
  const [books, setBooks] = useState(null);
  const { providerName, examName } = useParams();
  const checkProvider = (name) => name.providerid == providerName;
  const GetBooks = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getBooks"
      );
      // console.log(response);
       console.log(response.data.books);
      //get all exams by the name of provider here
       setBooks(response.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetBooks();
  }, []);
  return (
    <>
      <NavigationBar />

      <div className="navigate container">
        <div className="d-flex justify-content-between arrow-text mt-3">
          <a href="/" className="back ms-2" style={{ fontWeight: "bolder" }}>
            <TiArrowLeftThick style={{ color: "black" }}></TiArrowLeftThick>Back
          </a>
          <h6 className="ms-2"> All {examName} books</h6>
        </div>
        <div className="search-container mb-5">
          <input placeholder="exam code or name" type="search" className="" />
          <AiOutlineSearch className="search-icon"></AiOutlineSearch>
        </div>
      </div>
      <div className="container-fluid py-2">
        <div className="d-flex flex-row flex-nowrap exam-card-section">
          {books ? (
            <>
            {providerName} {examName} Books
              {books.filter(checkProvider).map((item, i) => (
                <Provider
                  key={i}
                  title={item.title}
                  providerName={`/provider/${providerName}/${examName}/${item.id}`}
                  i={i}
                  text="Preview Book"
                  price={item.price}
                />
              ))}
            </>
          ) : (
            <img src={loader} alt="loading gif" />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Blockchain;
