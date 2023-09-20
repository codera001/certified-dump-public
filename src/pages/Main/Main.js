import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import amazon from "../../static/amazon.png";
import microsoft from "../../static/microsoft.png";
import juniper from "../../static/juniper.png";
import vmare from "../../static/vmare.png";
import isaca from "../../static/isaca.png";
import salesforce from "../../static/salesforce.png";
import cisco from "../../static/cisco.png";
import google from "../../static/google.png";
import study from "../../static/study.png";
import { FaAngleDown } from "react-icons/fa";
import "./Main.css";
import Footer from "../../component/Footer/Footer";
import Provider from "../../component/Provider";
import axios from "axios";
import loader from "../../static/loader.gif";

function Main() {
  const [providers, setProviders] = useState(null);
  const GetProviders = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getProviders"
      );
      // console.log(response);
      // console.log(response.data.providers.slice(0, 5));
      setProviders(response.data.providers.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProviders();
  }, []);

  return (
    <>
      <NavigationBar />
      <section className="section-one-main">
        <div className="text my-auto" style={{}}>
          <h1
            style={{
              fontWeight: "bolder",
              marginBottom: "2rem",
            }}
          >
            WELCOME TO CERTIFIED DUMP
          </h1>
          <h6 style={{ fontWeight: "bolder", marginBottom: "2rem" }}>
            A COMMUNITY TO WHICH YOU CAN ASPIRE
          </h6>
          <p
            className="text-align-center mx-auto p-text"
            style={{ fontSize: "16px" }}
          >
            You'll discover that none of the suppliers of real exam materials
            are genuinely free when you search for them. We made the decision to
            withhold all of that dreck and just provide you with the most
            recent, accurate, and confirmed genuine exam questions & answers.{" "}
          </p>
          <p style={{ fontSize: "16px", marginBottom: "2rem" }}>
            You are assured to pass your exam-for free
          </p>

          <div className=" container  justify-content-around  text-align-center">
            <a
              href=""
              className=" mt-1 button"
              style={{
                borderColor: "var(--white)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "1px",
              }}
            >
              FIND YOUR EXAM NOW
            </a>
          </div>
        </div>
      </section>

      {/* section-two */}
      <section className="container section-two-main">
        <div>
          <h5 className="mt-5" style={{ fontWeight: "bolder", color: "black" }}>
            Our Top Providers
          </h5>
          <p className="mb-5" style={{ fontSize: "16px" }}>
            Certified dump has one of the largest collection of professional
            certification and exam practice tests and online courses. Use <br />
            our study materials to pass your examinations on the first try! Our
            goal is to see you succeed.
          </p>
        </div>
        <div className="container-fluid py-2">
          <div className="d-flex flex-row flex-nowrap card-section">
            {providers ? (
              <>
                {providers.map((item, i) => (
                  <Provider key={i} item={item} i={i} />
                ))}
              </>
            ) : (
              <img src={loader} alt="loading gif" />
            )}
          </div>
          <div className="button">
            <a
              href="providers"
              className=" px-4 py-1"
              style={{
                color: "var(--tertiary-color)",
                borderColor: "var(--tertiary-color)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "1px",
              }}
            >
              VIEW ALL
            </a>
          </div>
        </div>
      </section>

      {/* section-three */}
      <section className="section-three-main">
        <div className="d-md-flex justify-content-between">
          <div className="image ">
            <img alt="" width="100%" src={study} />
          </div>

          <div className="text ">
            <h4 className="text-start">
              FREE AND REVISED ACTUAL EXAM SUPPLEMENTALS
            </h4>
            <hr className="section-three-main-line"></hr>
            <p className="text-start">
              Certified dump gives you not only UNLIMITED but also FREE access
              to all actual exam questions and descripotive answers. While
              studying actual exam questions, you can also benefit from our
              user-friendly exam-like interface.
            </p>
          </div>
        </div>

        <div className="search-main pt-5">
          <h2 style={{ fontWeight: "bolder", color: "black" }}>
            FIND EXAMS NOW
          </h2>
          <div className="exam-search-buttons">
            <button
              className="px-3 py-1 text-dark mx-3 "
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Select Provider
              <FaAngleDown
                className="ms-5 "
                style={{ fontSize: "25px", color: "black" }}
              ></FaAngleDown>
            </button>
            <button
              className=" text-dark mx-3 py-2 keyword"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Exam Code or Keyword
            </button>
            <a
              href="/"
              className="mx-md-3 button py-1"
              style={{
                fontSize: "16px",
                borderColor: "var(--green-500)",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
                color: "var(--green-500)",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Search Exams
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Main;
