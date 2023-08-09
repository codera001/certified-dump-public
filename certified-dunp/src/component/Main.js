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
          </div>
        </section>
      </section>


      {/* section-two */}
      <section className="container section-two">
        <div>
          <h5 className="mt-5">Our Top Providers</h5>
          <p>Certified dump has one of the largest collection of professional certification and exam practice tests </p>
        </div>

        <div class="row">
          <div class="kontribusi col-sm-2 col-sm-offset-1">
            <div class="card card-block text-xs-center align-items-center">
              <img width="150px" height="150px" src={microsoft} style={{}} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class="kontribusi col-sm-2">
            <div class="card card-block text-xs-center">
              <img width="150px" height="150px" src={google} style={{ backgroundColor: "gray" }} />
              <hr></hr>
              <a href="#" class="card-text"  >
                View more
              </a>
            </div>
          </div>
          <div class="kontribusi col-sm-2 mt-0 mb-0">
            <div class="card card-block text-xs-center mt-0 mb-0 ">
              <img width="250px" height="200px" src={amazon} style={{ backgroundColor: "gray" }} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class="kontribusi col-sm-2">
            <div class="card card-block text-xs-center">
              <img width="200px" height="200px" src={juniper} style={{}} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
        </div>



        <div class="row">
          <div class="kontribusi col-sm-2 col-sm-offset-1">
            <div class="card card-block text-xs-center">
              <img width="200px" height="200px" src={vmare} style={{}} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class="kontribusi col-sm-2">
            <div class="card card-block text-xs-center">
              <img width="200px" height="200px" src={cisco} style={{}} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class="kontribusi col-sm-2">
            <div class="card card-block text-xs-center">
              <img width="200px" height="200px" src={salesforce} style={{}} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>
          <div class="kontribusi col-sm-2">
            <div class="card card-block text-xs-center">
              <img width="200px" height="200px" src={isaca} style={{}} />
              <hr></hr>
              <a href="#" class="card-text">
                View more
              </a>
            </div>
          </div>

        </div>
        <div>
          <button>VIEW ALL</button>
        </div>
      </section>



      {/* section-three */}
      <section className="section-three">
        <div className="d-flex " style={{height:"50vh"}} >
          <div className="image w-50" style={{height:"50vh"}}>
          <img width= "100%" src={study}  style={{height:"inherit"}} />
          </div>

          <div className="text w-50">
            <h4 className="text-start" style={{width:"50%", fontSize:"23px", fontWeight:"bolder", paddingTop:"5rem", paddingLeft:"4rem", color:"black"}}>
              FREE AND REVISED ACTUAL EXAM SUPPLEMENTALS
            </h4>
            <hr className="section-three-line"></hr>
            <p className="text-start"  style={{width:"50%", paddingTop:"1rem", paddingLeft:"4rem", fontWeight:"bold",  color:"black"}}>Certified dump gives you not only UNLIMITED  but also FREE access to all actual exam questions and descripotive answers. While studying actual exam questions, you can also benefit from our user-friendly exam-like interface.
            </p>
          </div>
        </div>

<div style={{marginTop:"10rem"}}>
  <h2 style={{fontWeight:"bolder", color:"black"}}>FIND EXAMS NOW</h2>
  <div style={{marginTop:"4rem"}}>
    <button className="px-5 text-dark mx-3 py-3" style={{backgroundColor:"white", fontSize:"14px", borderRadius:"10px", border:"none"}}>Select Provider</button>
    <button  className="px-5 text-dark mx-3 py-3" style={{backgroundColor:"white", fontSize:"14px", borderRadius:"10px", border:"none"}}>Exam Code or Keyword</button>
    <button className="px-1 py-2" style={{fontSize:""}}>Search Exams</button>
  </div>
</div>


      </section>
    </>
  );
}

export default Main;
