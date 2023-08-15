import React from "react";
import './Signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavigationBar from "../Navigation bar/NavigationBar";
import Footer from "../Footer/Footer"
import profile from "../static/profile.png";
function Signup() {
    return (
        <>
            <section className="section">
                <NavigationBar />
                <div className="signup">
                        <Form className="signup-form">
                            <div className="form-wrap-s">
                            <Form.Group className="mb-3 form-group-s" >
                                <Form.Label className="my-2 form-title " style={{color:"black", fontSize:"18px"}}>Certified Dump Signup</Form.Label>
                               <br/> <img src={profile} alt="profile"></img>
                            </Form.Group>
                            <Form.Group className="mb-3 form-group-s" >
                                <Form.Label className="mb-0" style={{color:"black", fontSize:"14px"}}>Email or Phone number</Form.Label>
                                <Form.Control  style={{height:"4vh", border:"0.2px groove #fec700",    boxShadow: "0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23)"}}  classname="form-control-s" type="email" placeholder="email@domain.com" />
                            </Form.Group>

                            <Form.Group className="mb-3 form-group-s">
                                <Form.Label className="mb-0" style={{color:"black", fontSize:"14px"}}>Username  <span style={{fontStyle:"italic", fontSize:"12px"}}>  (for discussions)</span></Form.Label>
                                <Form.Control style={{height:"4vh", border:"0.2px groove #fec700",    boxShadow: "0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23)"}} classname="form-control-s" type="password" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group-s" controlId="formBasicPassword">
                                <Form.Label className="mb-0" style={{color:"black", fontSize:"14px"}}>Password</Form.Label>
                                <Form.Control  style={{height:"4vh", border:"0.2px groove #fec700",    boxShadow: "0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23)"}}classname="form-control-s" type="password" placeholder="6 characters minimum" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group-s">
                                <Form.Label className="mb-0" style={{color:"black", fontSize:"14px"}}> Confirm password</Form.Label>
                                <Form.Control style={{height:"4vh", border:"0.2px groove #fec700",    boxShadow: "0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23)"}} classname="form-control-s" type="password" placeholder="" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="form-button-s mx-md-5 mb-0">
                                SIGN UP
                            </Button>

                            <p className="" style={{ fontWeight:"bolder", color:"black",fontSize:"12px"}}> Already have an account yet?     <a href="/" style={{color:"var(--green-600", fontWeight:"light"}}>Sign in</a></p>
                            <button className="close-l my-3">close</button>

                            </div>
                        </Form>
                </div>
                <Footer />
            </section>


        </>
    );
}

export default Signup;