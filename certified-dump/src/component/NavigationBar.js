import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { TbBrandTwitterFilled } from "react-icons/tb";

function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" first-nav text-white">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" className="second-nav">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
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
      </Navbar>

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid text-center">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
      <div class="navbar-nav me-auto">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav> */}
    </>
  );
}

export default NavigationBar;
