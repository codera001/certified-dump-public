import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import {TiArrowLeftThick } from "react-icons/ti";
import logo from "../static/logo.png";
import amazon from "../static/amazon.png";
import microsoft from "../static/microsoft.png";
import juniper from "../static/juniper.png";
import vmare from "../static/vmare.png";
import isaca from "../static/isaca.png";
import salesforce from "../static/salesforce.png";
import cisco from "../static/cisco.png";
import google from "../static/google.png";
import alibaba from "../static/alibaba.png";
import blockchain from "../static/blockchain.png";
import cloudera from "../static/cloudera.png";
import fortnet from "../static/fortnet.png";
import huawei from "../static/huawei.png";
import netapp from "../static/netapp.png";
import nokia from "../static/nokia.png";
import redhat from "../static/study.png";
import "./Providers.css";
import ProNavbar from "../ProNavbar/ProNavbar";

function Providers() {
    return (
        <>
        <ProNavbar/>
            <section className="container section-two">
                <div className="mt-5">
                    <a href="/"  style={{ fontWeight: "bolder" }}><TiArrowLeftThick style={{color: "black"}}></TiArrowLeftThick>Back</a>
                    <h5 className=" mb-5" style={{ fontWeight: "bolder", color: "black", textAlign: "center" }}>All Providers</h5>

                </div>
                <div className="container mx-md-5">
                    <div className=" row mb-5 " >
                        <div className="col-sm-2 col-sm-offset-1 card-wrap" >
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={microsoft} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-sm-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img
                                    src={google}
                                    style={{ borderBottom: "2px solid #ff5607" }}
                                />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-sm-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img
                                    src={amazon}
                                    style={{ borderBottom: "2px solid #ff5607" }}
                                />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-sm-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={juniper} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" row mb-5"  >
                        <div className=" col-2 col-sm-offset-1 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={vmare} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center " style={{}}>
                                <img src={cisco} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={salesforce} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={isaca} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" row mb-5"  >
                        <div className=" col-2 col-sm-offset-1 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={alibaba} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center " style={{}}>
                                <img src={blockchain} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={cloudera} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={fortnet} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" row"  >
                        <div className=" col-2 col-sm-offset-1 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={huawei} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center " style={{}}>
                                <img src={netapp} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={nokia} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={redhat} style={{ borderBottom: "2px solid #ff5607" }} />

                                <a href="#" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                 
                    <div className="button">
                        <button className=" px-5 text-white py-1 mt-5" style={{ border: "none", backgroundColor: "#ff5607", borderRadius: "10px" }}>VIEW ALL</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Providers;
