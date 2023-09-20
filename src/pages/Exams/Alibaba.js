import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import Footer from "../../component/Footer/Footer";
import { TiArrowLeftThick } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import "./Exams.css";
import Provider from "../../component/Provider";
import axios from "axios";
import loader from "../../static/loader.gif";

function Alibaba() {
  const [exams, setExams] = useState(null);
  const GetExams = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getExams"
      );
      // console.log(response);
      console.log(response.data.exams);
      setExams(response.data.exams);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetExams();
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="navigate container">
        <div className="d-flex justify-content-between arrow-text mt-3">
          <a href="/" className="back ms-2" style={{ fontWeight: "bolder" }}>
            <TiArrowLeftThick style={{ color: "black" }}></TiArrowLeftThick>Back
          </a>
          <h6 className="ms-2"> All Alibaba Exams</h6>
        </div>
        <div className="search-container mb-5">
          <input placeholder="exam code or name" type="search" />
          <AiOutlineSearch className="search-icon"></AiOutlineSearch>
        </div>
      </div>
      <div className="container-fluid py-2">
        <div className="d-flex flex-row flex-nowrap exam-card-section">
          {exams ? (
            <>
              {exams.map((item, i) => (
                <Provider key={i} title={item.title} i={i} text="Preview" />
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
export default Alibaba;
