import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import amazon from "../component/static/amazon.png";
import microsoft from "../component/static/microsoft.png";
import juniper from "../component/static/juniper.png";
import vmare from "../component/static/vmare.png";
import isaca from "../component/static/isaca.png";
import salesforce from "../component/static/salesforce.png";
import cisco from "../component/static/cisco.png";
import google from "../component/static/google.png";
import study from "../component/static/study.png";
import { FaAngleDown } from "react-icons/fa";

function Main() {
  return (
    <>
      <section className="w-full ">
        <NavigationBar></NavigationBar>
        {/* <DashboardPage></DashboardPage> */}
        <section className="section-one">
          <div className="text my-auto" style={{}}>
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "38px",
                marginBottom: "2rem",
              }}
            >
              WELCOME TO CERTIFIED DUMP
            </h1>
            <h6 style={{ fontWeight: "bolder", marginBottom: "2rem" }}>
              A COMMUNITY TO WHICH YOU CAN ASPIRE
            </h6>
            <p style={{ fontSize: "16px", marginBottom: "2rem" }}>
              You'll discover that none of the suppliers of real exam materials
              are genuinely free when you search for them.
              <br />
              We made the decision to withhold all of that dreck and just
              provide you with the most recent, accurate, and confirmed genuine
              exam questions & answers. <br />
              You are assured to pass your exam-for free{" "}
            </p>

            <div className="d-flex  w-50 mx-aut0">
              <button className="py-1 px-3 text-white" style={{backgroundColor:"#4b5320", borderRadius:"10px", border:"none"}}>UNLIMITED ACCESS</button>
              <button className="py-1 px-1 text-white"style={{backgroundColor:"#ff5607", borderRadius:"10px", border:"none"}}>FIND YOUR EXAM NOW</button>
            </div>
              
          </div>
        </section>
      </section>

      {/* section-two */}
      <section className="container section-two">
        <div>
          <h5 className="mt-5" style={{fontWeight:"bolder", color:"black"}}>Our Top Providers</h5>
          <p  className="mb-5" style={{fontSize:"16px"}}>
            Certified dump has one of the largest collection of professional
            certification and exam practice tests{" "}
          </p>
        </div>

        <div class="row mb-5 align-items-center " style={{margin:"auto", width:"80%"}}>
          <div class="col-sm-2 col-sm-offset-1 mx-4" >
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img width="190px" height="140px" src={microsoft}   style={{ borderBottom:"2px solid #ff5607"}}/>
           
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class=" col-sm-2 mx-4">
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img
                width="190px"
                height="140px"
                src={google}
                style={{ borderBottom:"2px solid #ff5607"}}
              />
              
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class=" col-sm-2 mx-4">
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img
                width="190px"
                height="140px"
                src={amazon}
                style={{ borderBottom:"2px solid #ff5607"}}
              />
           
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class=" col-sm-2 mx-4">
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img width="190px" height="140px" src={juniper} style={{ borderBottom:"2px solid #ff5607"}} />
          
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
        </div>

        <div class="row"  style={{margin:"auto", width:"80%"}}>
          <div class=" col-sm-2 col-sm-offset-1 mx-4">
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img width="200px" height="200px" src={vmare} style={{ borderBottom:"2px solid #ff5607"}} />
     
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class=" col-sm-2 mx-4">
            <div class="card card-block text-xs-center align-items-center " style={{width:"200px", height:"170px"}}>
              <img width="200px" height="200px" src={cisco} style={{ borderBottom:"2px solid #ff5607"}} />
             
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class=" col-sm-2 mx-4">
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img width="200px" height="200px" src={salesforce} style={{ borderBottom:"2px solid #ff5607"}}/>
             
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class=" col-sm-2 mx-4">
            <div class="card card-block text-xs-center align-items-center" style={{width:"200px", height:"170px"}}>
              <img width="200px" height="200px" src={isaca} style={{ borderBottom:"2px solid #ff5607"}} />
             
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
        </div>
        <div className="msx-5" style={{width:"40%"}}>
          <button className=" px-5 text-white py-1 mt-5" style={{border:"none", backgroundColor:"#ff5607", borderRadius:"10px"}}>VIEW ALL</button>
        </div>
      </section>

      {/* section-three */}
      <section className="section-three">
        <div className="d-flex " style={{ height: "50vh" }}>
          <div className="image w-50" style={{ height: "50vh" }}>
            <img width="100%" src={study} style={{ height: "inherit" }} />
          </div>

          <div className="text w-50">
            <h4
              className="text-start"
              style={{
                width: "50%",
                fontSize: "23px",
                fontWeight: "bolder",
                paddingTop: "5rem",
                paddingLeft: "4rem",
                color: "black",
              }}
            >
              FREE AND REVISED ACTUAL EXAM SUPPLEMENTALS
            </h4>
            <hr className="section-three-line"></hr>
            <p
              className="text-start"
              style={{
                width: "50%",
                paddingTop: "1rem",
                paddingLeft: "4rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Certified dump gives you not only UNLIMITED but also FREE access
              to all actual exam questions and descripotive answers. While
              studying actual exam questions, you can also benefit from our
              user-friendly exam-like interface.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "10rem" }}>
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
              className="px-2 py-3 text-white mx-3"
              style={{
                fontSize: "16px",
                backgroundColor: "#4b5320",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Search Exams
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
