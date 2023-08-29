import React from "react";
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
import './Main.css'
import Footer from "../../component/Footer/Footer"
function Main() {
  return (
    <>
      <section className="w-full ">
        <NavigationBar />
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
              <a href="" className="py-1 px-3 mt-1  button" style={{ borderColor: "var(--green-500)", borderWidth: "1px", borderStyle: "solid", borderRadius: "1px" }}>UNLIMITED ACCESS</a>
              <a href="" className="py-1 px-3 mt-1  button" style={{ borderColor: "var(--green-500)", borderWidth: "1px", borderStyle: "solid", borderRadius: "1px" }}>FIND YOUR EXAM NOW</a>
            </div>

          </div>
        </section>
      </section>




      {/* section-two */}
      <section className="container section-two">
        <div>
          <h5 className="mt-5" style={{ fontWeight: "bolder", color: "black", fontSize: "3rem" }}>Our Top Providers</h5>
          <p className="mb-5" style={{ fontSize: "16px" }}>
            Certified dump has one of the largest collection of professional
            certification and exam practice tests and online courses. Use <br />
            our study materials to pass your examinations on the first try! Our goal is to see you succeed.
          </p>
        </div>
        <Row xs={2} sm={2} md={3} lg={4} className=" card-section">


          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={microsoft} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={google} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={amazon} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={juniper} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={vmare} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={cisco} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={salesforce} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>

          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={isaca} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="/" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
        </Row>



        <div className="button">
          <a href="providers" className=" px-5 py-1" style={{ color: "var(--tertiary-color)", borderColor: "var(--tertiary-color)", borderWidth: "1px", borderStyle: "solid", borderRadius: "1px" }}>VIEW ALL</a>
        </div>
      
    </section >

      {/* section-three */ }
      < section className = "section-three" >
        <div className="d-md-flex justify-content-between" style={{ height: "50vh" }}>
          <div className="image " style={{ height: "50vh" }}>
            <img alt="" width="100%" src={study} style={{ height: "inherit" }} />
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

        <div className="search pb-0 mb-4">
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
              className=" text-dark mx-3 py-2"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                borderRadius: "10px",
                border: "none",
                paddingLeft:"4rem",
                paddingRight:"4rem"
              }}
            >
              Exam Code or Keyword
            </button>
            <a
            href="/"
              className="mx-md-3 mb-5 button"
              style={{
                fontSize: "16px",
                borderColor: "var(--green-500)",
                borderStyle: "solid",
                borderWidth:"1px",
                borderRadius: "10px",
                color:"var(--green-500)",
                paddingLeft:"2rem",
                paddingRight:"2rem"
              }}
            >
              Search Exams
            </a>
          </div>
        </div>
      </section >

    <Footer />




      


    </>
  );
}

export default Main;
