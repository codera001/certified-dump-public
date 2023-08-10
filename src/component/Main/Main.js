import React from "react";
import NavigationBar from "../Navigation bar/NavigationBar";
import amazon from "../static/amazon.png";
import microsoft from "../static/microsoft.png";
import juniper from "../static/juniper.png";
import vmare from "../static/vmare.png";
import isaca from "../static/isaca.png";
import salesforce from "../static/salesforce.png";
import cisco from "../static/cisco.png";
import google from "../static/google.png";
import study from "../static/study.png";
import { FaAngleDown } from "react-icons/fa";
import './Main.css'
import Footer from "../Footer/Footer"
function Main() {
  return (
    <>
      <section className="w-full ">
        <NavigationBar/>
        {/* <DashboardPage></DashboardPage> */}
        <section className="section-one">
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
            <p className="text-align-center mx-auto p-text" style={{ fontSize: "16px" }}>
              You'll discover that none of the suppliers of real exam materials
              are genuinely free when you search for them.

              We made the decision to withhold all of that dreck and just
              provide you with the most recent, accurate, and confirmed genuine
              exam questions & answers. </p>
            <p style={{ fontSize: "16px", marginBottom: "2rem" }}>You are assured to pass your exam-for free</p>


            <div className=" container d-md-flex justify-content-around  w-50  text-align-center">
              <button className="py-1 px-3 mt-1 text-white" style={{ backgroundColor: "var(--green-500)", borderRadius: "10px", border: "none" }}>UNLIMITED ACCESS</button>
              <button className="py-1 px-1 mt-1 text-white" style={{ backgroundColor: "#ff5607", borderRadius: "10px", border: "none" }}>FIND YOUR EXAM NOW</button>
            </div>

          </div>
        </section>
      </section>




      {/* section-two */}
      <section className="container section-two">
        <div>
          <h5 className="mt-5" style={{ fontWeight: "bolder", color: "black" }}>Our Top Providers</h5>
          <p className="mb-5" style={{ fontSize: "16px" }}>
            Certified dump has one of the largest collection of professional
            certification and exam practice tests and online courses. Use <br />
            our study materials to pass your examinations on the first try! Our goal is to see you succeed.
          </p>
        </div>
        <div className="container mx-md-5">
          <div className=" row mb-5 " >
            <div className="col-sm-2 col-sm-offset-1 card-wrap" >
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img src={microsoft} style={{ borderBottom: "2px solid #ff5607" }} />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div className=" col-sm-2 card-wrap">
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img
                  src={google}
                  style={{ borderBottom: "2px solid #ff5607" }}
                />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div className=" col-sm-2 card-wrap">
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img
                  src={amazon}
                  style={{ borderBottom: "2px solid #ff5607" }}
                />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div className=" col-sm-2 card-wrap">
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img src={juniper} style={{ borderBottom: "2px solid #ff5607" }} />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className=" row"  >
            <div className=" col-2 col-sm-offset-1 card-wrap">
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img src={vmare} style={{ borderBottom: "2px solid #ff5607" }} />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div className=" col-2 card-wrap">
              <div className="card card-block text-xs-center align-items-center " style={{}}>
                <img src={cisco} style={{ borderBottom: "2px solid #ff5607" }} />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div className=" col-2 card-wrap">
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img src={salesforce} style={{ borderBottom: "2px solid #ff5607" }} />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div className=" col-2 card-wrap">
              <div className="card card-block text-xs-center align-items-center" style={{}}>
                <img src={isaca} style={{ borderBottom: "2px solid #ff5607" }} />

                <a href="#" className="card-text">
                  View more
                </a>
              </div>
            </div>
          </div>
          <div className="button">
            <button className=" px-5 text-white py-1 mt-5" style={{ border: "none", backgroundColor: "#ff5607", borderRadius: "10px" }}>VIEW ALL</button>
          </div>
        </div>
      </section>

      {/* section-three */}
      <section className="section-three">
        <div className="d-md-flex " style={{ height: "50vh" }}>
          <div className="image " style={{ height: "50vh" }}>
            <img width="100%" src={study} style={{ height: "inherit" }} />
          </div>

          <div className="text ">
            <h4
              className="text-start"

            >
              FREE AND REVISED ACTUAL EXAM SUPPLEMENTALS
            </h4>
            <hr className="section-three-line"></hr>
            <p
              className="text-start"

            >
              Certified dump gives you not only UNLIMITED but also FREE access
              to all actual exam questions and descripotive answers. While
              studying actual exam questions, you can also benefit from our
              user-friendly exam-like interface.
            </p>
          </div>
        </div>

        <div className="search">
          <h2 style={{ fontWeight: "bolder", color: "black" }}>
            FIND EXAMS NOW
          </h2>
          <div style={{ marginTop: "4rem" }}>
            <button
              className="px-3 text-dark mx-3 py-3"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                borderRadius: "10px",
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
              className="px-5 text-dark mx-3 py-3"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Exam Code or Keyword
            </button>
            <button
              className="px-2 py-3 text-white mx-md-3 mb-5"
              style={{
                fontSize: "16px",
                backgroundColor: "var(--green-500)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Search Exams
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Main;
