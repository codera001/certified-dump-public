import React from "react";
import './Login.css'
import Form from 'react-bootstrap/Form';
import { MdVpnKey } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { GrFormClose } from "react-icons/gr"
import Button from 'react-bootstrap/Button';
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import Footer from "../../component/Footer/Footer"
function Login() {
    return (
        <>
            <section className="section">
                <NavigationBar/>
                <div className=" login">
                    <div className="form-wrap-l">
                        <Form className="form-l">
                            <Form.Group className="mb-3  d-flex justify-content-between">
                                <Form.Label style={{fontWeight:"bolder"}}>Login into  Certified Dump</Form.Label>
                                <Form.Label><GrFormClose /></Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 form-group-l">
                                < FaUserCircle className="fa fa-icons"></FaUserCircle>
                                <Form.Control className="form-control-l" placeholder="Email or Phone number or Username" disabled />
                            </Form.Group>

                            <Form.Group className="mb-3 form-group-l">
                                <MdVpnKey className="fa fa-icons"></MdVpnKey>
                                <Form.Control className="form-control-l" placeholder="Password" disabled />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" style={{fontWeight:"bolder"}}/>
                                <Form.Label style={{color:"red", fontWeight:"bolder"}}>Forgot password</Form.Label>
                            </Form.Group>
                            <Button className="form-button-l pb-md-3" type="submit">
                                Login
                            </Button>


                            <p className="pt-md-5" style={{ fontWeight:"bolder"}}> Dont have an account yet?     <a href="signup" style={{color:"var(--green-600", fontWeight:"light"}}>Create one</a></p>
                            <button className="close">close</button>
                        </Form>
                    </div>
                </div>
<Footer/>
            </section>


        </>
    );
}

export default Login;