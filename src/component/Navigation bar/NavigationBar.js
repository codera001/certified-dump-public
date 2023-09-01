import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill, RiMailSendLine } from "react-icons/ri";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import "./NavigationBar.css";
import logo from "../../static/logo.png";
import instagram from "../../static/instagram.png";

function NavigationBar() {
  return (
    <>
      {/*first nav  */}
      <div className="container-fluid first-nav">
        <div className="container d-flex justify-content-between  nav">
          <div className="d-flex my-0 item-head">
      
            <a href="#home" className=" text-white brand ">
            <AiFillHome color="orange" className="brand-icon  me-1" />
              Welcome to Certified Dump
            </a>
          </div>
        
         <a href="/login"> <FaUser className="user-auth"></FaUser></a>
          <div className=" item-list">
            <a
              href="login"
              className=" nav-list "
            >
              Login
            </a>
            <a
              eventKey={2}
              href="#memes"
              className=" nav-list  border-left"
            ></a>
            <a
              href="signup"
              className=" nav-list  "
            >
              Sign up
            </a>
            <div className="icon">
              <RiFacebookFill color="blue" className="me-2" />
              <TbBrandTwitterFilled color="blue" />
              <a >
                <img
                  src={instagram}
                  className="icon image"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          
        </div>
      </div>





      {/* secon-nav */}
      <div className="container d-flex justify-content-between align-items-center mt-3 nav-logo">
        <div>
          <img
            alt="logo"
            src={logo}
          
          />
        </div>
        <div className="d-flex ">
          <div className="mx-1">
            <RiMailSendLine
              color=" var(--tertiary-color)"
              className="mail-icon"
            style={{fontSize:"30px"}}
            />
          </div>
          <div className="d-block  mx-0">
            <h6
              className="mb-0 mt-0 text-start"
              style={{
                color: " black",
                fontWeight: "bolder",
              }}
            >
              MAIL US
            </h6>
            <span
              className="mt-0  mb-0 text-start"
              style={{ color: " var(--tertiary-color)"}}
            >
              hello@certifieddump.com
            </span>
          </div>
        </div>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        className="second-nav mx-0 nav-toogle  my-0 "
      >
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-auto text-center nav-items">
              <Nav.Link
                href="/"
                className="nav-links"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="about"
                className="nav-links "
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="nav-links "
              >
                BLOG AREA
              </Nav.Link>
              <Nav.Link
                href="providers"
                className="nav-links "
              >
                CONTACT US
              </Nav.Link>
              <Nav.Link href="login"  className="button">
                 SIGN IN
              </Nav.Link>
              <Nav.Link href="signup"  className="button">
                 JOIN NOW
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* {['md'].map((expand) => ( */}
      {/* <Navbar key={expand} expand={expand} className="second-nav">
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
      {/* </Offcanvas.Header>
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
        </Navbar> */}
      {/* ))} */}
    </>
  );
}

export default NavigationBar;
