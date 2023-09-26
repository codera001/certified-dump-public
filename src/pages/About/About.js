import React from "react";
import signup from "../../static/signup.jpg";
import about2 from "../../static/about2.png";
import about3 from "../../static/about3.png";
import openbook from "../../static/openbook.png";
import writer from "../../static/writer.png";
import friends from "../../static/friends .png";
import support from "../../static/support.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./About.css";
import PublicLayout from "../../component/PublicLayout";
import { Link } from "react-router-dom";

function About() {
  return (
    <PublicLayout>
      <section className="section-one-about">
        <h1 className="text-white">ABOUT US</h1>
      </section>

      <section className="section-two-about container mt-5">
        <div className="text-image">
          <div className="text">
            <h5 style={{ fontWeight: "bolder" }}>Our Vision</h5>
            <p>
              "Our Vision is to empower students with the resources they need to
              excel in their educational journey. We envision a platform that
              offers a comprehensive collection of authentic past exam questions
              and answers, fosterind=g a culture of effective learning ,
              understanding and growth"
            </p>
            <br />
            <p>
              "Our goal is to provide a supportive environment where students
              can engage with challenging questions, learn from detailed
              explanations, and track their progress over time. Through our
              Platform, we aim to promote responsible practices, foster
              collaborative learning, and contribute to the academic success of
              students around the world."
            </p>
          </div>
          <div className="image">
            <img src={signup}></img>
          </div>
        </div>

        <div className="text-image index">
          <div className="image">
            <img src={about2}></img>
          </div>
          <div className="text">
            <h5 style={{ fontWeight: "bolder" }}>Our Process</h5>
            <p>
              "At Certified Dump, We define the target audience, including
              students, educators, and institutions, determine the subjects,
              exam boards and levels to be covered..
            </p>
            <br />
            <p>
              We also verify the Authenticity of the questions and seek
              permission to use them if necessary. Create content categorization
              system to organize questions by subject, topic and year.
            </p>
            <br />
            <p>
              Design an intuitive and user-friendly platform that facilitates
              easy navigation and interaction. We also implement features for
              user registratrion, profile creation and account management.
            </p>
            <p>
              Inbuilt search and filtering system have been applied to help
              users find relevant questions efficiently."
            </p>
          </div>
        </div>
        <div className="text-image">
          <div className="text">
            <h5 style={{ fontWeight: "bolder" }}>Our Approach</h5>
            <p>
              "Providing genuine past exam questions from reputable sources and
              ensurig accuracy and correctness of answers to build credibility
              and trust by compiling a wide range of past exam questions
              covering various subjects, levels and exam boards.
            </p>
            <p>
              Organizing questions by exam year, subject and topic for easy
              navigation. Keeping the platform up-to-date with the latest past
              questions and answers to align current curriculum or exam changes.
              Implementing robust security measures to protect user data and
              privacy.
            </p>
            <p>
              Offering acesss to a limited number of questions and charge a
              reasonable subscription fee or full access to questions and
              features."
            </p>
          </div>
          <div className="image">
            <img src={about3}></img>
          </div>
        </div>
      </section>

      <section className="section3 container mt-4 about">
        <h1 className="text-center">Our Services</h1>
        <Row xs={1} sm={1} md={2} lg={4} className="card-sections mb-3">
          <Col>
            <Card className="card-wrap">
              <Card.Body>
                <div className="image">
                  <img src={openbook}></img>
                </div>
                <Card.Text>
                  <span
                    style={{
                      fontWeight: "bold",
                      margin: "0.5rem 0 0.5rem",
                      display: "block",
                    }}
                  >
                    Extensive Exam Dumps
                  </span>
                  We cover an extensive wide range of subjects, ensuring you
                  have access to the latest notes, practice question
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrap">
              <Card.Body>
                <div className="image">
                  <img src={writer}></img>
                </div>
                <Card.Text>
                  <span
                    style={{
                      fontWeight: "bold",
                      margin: "0.5rem 0 0.5rem",
                      display: "block",
                    }}
                  >
                    Accurate/ Updated Contents
                  </span>
                  Discover a new level of exam preparation with our accurate and
                  updated contants
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrap">
              <Card.Body>
                <div className="image">
                  <img src={friends}></img>
                </div>
                <Card.Text>
                  <span
                    style={{
                      fontWeight: "bold",
                      margin: "0.5rem 0 0.5rem",
                      display: "block",
                    }}
                  >
                    User-Friendly Platform
                  </span>
                  Say goodbye to complexity and hello to simplicity.. Our site
                  is here to streamline yor exam readiness.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-wrap">
              <Card.Body>
                <div className="image">
                  <img src={support}></img>
                </div>
                <Card.Text>
                  <span
                    style={{
                      fontWeight: "bold",
                      margin: "0.5rem 0 0.5rem",
                      display: "block",
                    }}
                  >
                    Customer Support
                  </span>
                  Have questions and need guidiance in navigating the site? Our
                  Support team is availaible for your convenience
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </PublicLayout>
  );
}

export default About;
