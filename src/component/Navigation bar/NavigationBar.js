import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill, RiMailSendLine } from "react-icons/ri";
import { TbBrandTwitterFilled } from "react-icons/tb";
// import { FaInstagramSquare } from "react-icons/fa";
// import {BiMailSend  } from "react-icons/bi";
import './NavigationBar.css';
import logo from "../static/logo.png";
import instagram from "../static/instagram.png";

function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" className=" first-nav text-white " fixed="top">
        <Container>
          <AiFillHome color="orange" />
          <Navbar.Brand href="#home" className=" first-nav text-white brand">
            {" "}
            Welcome to Certified Dump{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link
                href="dashboard"
                className=" first-nav text-white nav-list"
              >
                Login
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className=" first-nav text-white border-left"
              ></Nav.Link>
              <Nav.Link
                href="#deets"
                className=" first-nav text-white nav-list ms-3"
              >
                Sign up
              </Nav.Link>
              <RiFacebookFill color="blue" className="icon" />
              <TbBrandTwitterFilled color="blue" className="icon" />
              <img
                alt=""
                width="20px"
                height="20px"
                src={instagram}
                className="icon"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container d-flex justify-content-between align-items-center mt-5">
        <div>
          <img
            alt=""
            width="190px"
            height="140px"
            src={logo}
            style={{ float: "left" }}
          />
        </div>
        <div className="d-flex ">
          <div className="mx-1">
            <RiMailSendLine color=" var(--tertiary-color)" style={{ fontSize: "30px" }} />
          </div>
          <div className="d-block ">
            <h6 className="mb-0 mt-0 text-start" style={{ color: " black", fontSize: "16px", fontWeight: "bolder" }}>MAIL US</h6>
            <span className="mt-0  nb-0 text-start" style={{ color: " var(--tertiary-color)", fontSize: "16px" }}>hello@ceertifieddump.com</span>
          </div>
        </div>
      </div>

      {/* <Navbar collapseOnSelect expand="lg" className="second-nav">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
          
            </Nav>
            <Nav className="me-auto text-center">
              <Nav.Link
                href="#features"
                style={{
                  fontWeight: "bolder",
                  fontSize: "18px",
                  color: "black",
                  marginRight: "2rem",
                }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{
                  fontWeight: "bolder",
                  fontSize: "18px",
                  color: "black",
                  marginRight: "2rem",
                }}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{
                  fontWeight: "bolder",
                  fontSize: "18px",
                  color: "black",
                  marginRight: "2rem",
                }}
              >
                BLOG AREA
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{
                  fontWeight: "bolder",
                  fontSize: "18px",
                  color: "black",
                  marginRight: "2rem",
                }}
              >
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#pricing">
                <button className="button-one">SIGN IN</button>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <button className="button-two">JOIN NOW</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="second-nav">
           <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className="nav-toogle"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav className="me-auto">
          
          </Nav>
          <Nav className="me-auto text-center">
            <Nav.Link
              href="#features"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                color: "black",
                marginRight: "2rem",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                color: "black",
                marginRight: "2rem",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                color: "black",
                marginRight: "2rem",
              }}
            >
              BLOG AREA
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                color: "black",
                marginRight: "2rem",
              }}
            >
              CONTACT US
            </Nav.Link>
            <Nav.Link href="#pricing">
              <button className="button-one">SIGN IN</button>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <button className="button-two">JOIN NOW</button>
            </Nav.Link>
          </Nav>    
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;
