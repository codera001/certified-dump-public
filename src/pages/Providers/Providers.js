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
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PageFooter from "../../component/PageFooter/PageFooter";

function Providers() {
    return (
        <>
        <NavigationBar/>
            <section className="container section-two">
                <div className="mt-5">
                    <a href="/"  style={{ fontWeight: "bolder" }}><TiArrowLeftThick style={{color: "black"}}></TiArrowLeftThick>Back</a>
                    <h5 className=" mb-5" style={{ fontWeight: "bolder", color: "black", textAlign: "center",fontSize:"2.5rem" }}>All Providers</h5>

                </div>
                <Row xs={2} sm={2} md={3} lg={4} className=" card-section">


          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={microsoft} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="microsoft" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={google} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="google" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={amazon} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="amazon" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={juniper} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="juniper" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={vmare} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="vmware" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={cisco} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="cisco" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={salesforce} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="salesforce" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>

          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={isaca} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="isaca" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={alibaba} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="alibaba" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={blockchain} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="blockchain" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={cloudera} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="cloudera" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={fortnet} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="fortinet" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={huawei} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="huawei" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={netapp} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="netapp" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={nokia} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="nokia" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>
          <Col className="">
            <Card className="card-wrap">
              <Card.Body >
                <img src={redhat} alt="" />
              </Card.Body>
              <Card.Footer className="card-footer py-0" >
                <a href="redhat" className="card-text" style={{ borderTop: "1px solid var(--tertiary-color) " }}>
                  View more
                </a>
              </Card.Footer>
            </Card>

          </Col>

          <div className="button">
                        <a href="/" className=" px-4  py-1 mt-5" style={{ color: "var(--tertiary-color)", borderColor: "var(--tertiary-color)", borderWidth: "1px", borderStyle: "solid", borderRadius: "1px" }}>VIEW ALL</a>
                    </div>
          </Row>
      
            </section>
            <PageFooter/>
        </>
    );
}

export default Providers;
