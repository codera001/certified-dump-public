import Container from "react-bootstrap/Container";
import { AiOutlineSearch } from "react-icons/ai";
import {TiArrowLeftThick } from "react-icons/ti";
import amazon from "../../static/amazon.png";
import microsoft from "../../static/microsoft.png";
import juniper from "../../static/juniper.png";
import vmare from "../../static/vmare.png";
import isaca from "../../static/isaca.png";
import salesforce from "../../static/salesforce.png";
import cisco from "../../static/cisco.png";
import google from "../../static/google.png";
import alibaba from "../../static/alibaba.png";
import blockchain from "../../static/blockchain.png";
import cloudera from "../../static/cloudera.png";
import fortnet from "../../static/fortnet.png";
import huawei from "../../static/huawei.png";
import netapp from "../../static/netapp.png";
import nokia from "../../static/nokia.png";
import redhat from "../../static/study.png";
import "./Providers.css";
import NavigationBar from "../../component/Navigation bar/NavigationBar";


function Providers() {
    return (
        <>
        <NavigationBar/>
            <section className="container section-two">
                <div className="mt-5">
                    <a href="/"  style={{ fontWeight: "bolder" }}><TiArrowLeftThick style={{color: "black"}}></TiArrowLeftThick>Back</a>
                    <h5 className=" mb-5" style={{ fontWeight: "bolder", color: "black", textAlign: "center",fontSize:"2.5rem" }}>All Providers</h5>

                </div>
                <div className="container">
                    <div className=" row mb-5 " >
                        <div className="col-sm-2 col-sm-offset-1 card-wrap" >
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={microsoft} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics" />

                                <a href="microsoft" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-sm-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img
                                    src={google}
                                    style={{ borderBottom: "2px solid #ff5607" }}
                                    alt="card-pics"
                                />

                                <a href="google" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-sm-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img
                                    src={amazon}
                                    style={{ borderBottom: "2px solid #ff5607" }}
                                    alt="card-pics"
                                />

                                <a href="amazon" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-sm-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={juniper} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics" />

                                <a href="juniper" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" row mb-5"  >
                        <div className=" col-2 col-sm-offset-1 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={vmare} style={{ borderBottom: "2px solid #ff5607" }}  alt="card-pics" />

                                <a href="vmware" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center " style={{}}>
                                <img src={cisco} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="cisco" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={salesforce} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="salesforce" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={isaca} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="isaca" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" row mb-5"  >
                        <div className=" col-2 col-sm-offset-1 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={alibaba} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="alibaba" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center " style={{}}>
                                <img src={blockchain} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="blockchain" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={cloudera} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="cloudera" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={fortnet} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="fortinet" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" row"  >
                        <div className=" col-2 col-sm-offset-1 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={huawei} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="huawei" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center " style={{}}>
                                <img src={netapp} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="netapp" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={nokia} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="nokia" className="card-text">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className=" col-2 card-wrap">
                            <div className="card card-block text-xs-center align-items-center" style={{}}>
                                <img src={redhat} style={{ borderBottom: "2px solid #ff5607" }} alt="card-pics"/>

                                <a href="redhat" className="card-text">
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
