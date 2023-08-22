import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import {TiArrowLeftThick } from "react-icons/ti";
import logo from "../static/logo.png";
import "./ProNavbar.css";

function ProNavbar() {
    return (
        <>
            <Navbar className="pro-navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top bg-white"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 bg-white"
                            aria-label="Search"
                        />
                        <Button
                            className="text-dark py-0 mx-4"
                            style={{
                                backgroundColor: "white",
                                border: "none",
                                fontSize: "14px",
                                borderRadius: "5px",
                            }}
                        >
                            Find Provider <AiOutlineSearch className="ms-4"></AiOutlineSearch>
                        </Button>
                    </Form>

                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="pro-nav-links mx-2">
                            EXAM LIST
                        </Nav.Link>
                        <Nav.Link href="#features" className="pro-nav-links mx-2 ">
                            UNLIMITED ACCESS
                        </Nav.Link>
                        <Nav.Link href="/" className="pro-nav-links  mx-2">
                            HOME
                        </Nav.Link>
                        <Nav.Link href="login">
                            <button className="button-one a" style={{ backgroundColor: "transparent" }}>SIGN IN</button>
                        </Nav.Link>
                        <Nav.Link href="signup">
                            <button className="button-two a">JOIN NOW</button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ProNavbar;
