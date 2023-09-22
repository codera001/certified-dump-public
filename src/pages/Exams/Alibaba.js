import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import Footer from "../../component/Footer/Footer";
import { TiArrowLeftThick } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import "./Exams.css";
import Provider from "../../component/Provider";
import axios from "axios";
import loader from "../../static/loader.gif";
import { Link, useParams } from "react-router-dom";

function Alibaba() {
  const [exams, setExams] = useState(null);
  const { providerName } = useParams();
  // console.log(providerName);
  const checkProvider = (name) => name.providerid == providerName;

  const GetExams = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getExams"
      );
      // console.log(response);
      console.log(response.data.exams);
      //get all exams by the name of provider here
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
          <Link
            to="/providers"
            className="back ms-2"
            style={{ fontWeight: "bolder" }}
          >
            <TiArrowLeftThick style={{ color: "black" }}></TiArrowLeftThick>Back
          </Link>
          <h6 className="ms-2"> All {providerName} Exams</h6>
        </div>
        <div className="search-container mb-5">
          <input placeholder="exam code or name" type="search" />
          <AiOutlineSearch className="search-icon"></AiOutlineSearch>
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="container-fluid py-2">
        {exams ? (
          <>
            <h3 style={{ textAlign: "center" }}>{providerName} Exams</h3>
            <div className="d-flex flex-row flex-nowrap exam-card-section">
              {exams.filter(checkProvider).map((item, i) => (
                <Provider
                  key={i}
                  title={item.title}
                  providerName={`/provider/${providerName}/${item.title}`}
                  i={i}
                  text="View Books"
                />
              ))}
            </div>
            {exams.filter(checkProvider).length === 0 ? (
              <div style={{ textAlign: "center" }}>No exams found</div>
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={loader} alt="loading gif" />
        )}
      </div>
      <Footer />
    </>
  );
}
export default Alibaba;
