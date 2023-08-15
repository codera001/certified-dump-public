import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill, RiMailSendLine } from "react-icons/ri";
import { TbBrandTwitterFilled } from "react-icons/tb";
import "./NavigationBar.css";
import logo from "../static/logo.png";
import instagram from "../static/instagram.png";

function NavigationBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className=" first-nav text-white "
        fixed="top"
      >
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
            <Nav className="nav">
              <Nav.Link
                href="login"
                className=" nav-lists a"
              >
                Login
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="   border-left a"
              ></Nav.Link>
              <Nav.Link
                href="signup"
                className=" nav-lists ms-3 a"
              >
                Sign up
              </Nav.Link>
              <RiFacebookFill color="blue" className="icon" />
              <TbBrandTwitterFilled color="blue" className="icon" />
              <Nav.Link  >
                <img
                src={instagram}
                className="icon image"
                alt="instagram"
              />
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container d-flex justify-content-between align-items-center mt-5">
        <div>
          <img
            width="190px"
            height="140px"
            src={logo}
            style={{ float: "left" }}
            alt="logo"
          />
        </div>
        <div className="d-flex ">
          <div className="mx-1">
            <RiMailSendLine
              color=" var(--tertiary-color)"
              style={{ fontSize: "30px" }}
            />
          </div>
          <div className="d-block ">
            <h6
              className="mb-0 mt-0 text-start"
              style={{
                color: " black",
                fontSize: "16px",
                fontWeight: "bolder",
              }}
            >
              MAIL US
            </h6>
            <span
              className="mt-0  nb-0 text-start"
              style={{ color: " var(--tertiary-color)", fontSize: "16px" }}
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
                href="#pricing"
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
              <Nav.Link href="login">
                <button className="button-one a">SIGN IN</button>
              </Nav.Link>
              <Nav.Link href="signup">
                <button className="button-two a">JOIN NOW</button>
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
