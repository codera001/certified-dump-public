import Container from "react-bootstrap/Container";
import { AiOutlineSearch } from "react-icons/ai";
import { TiArrowLeftThick } from "react-icons/ti";
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
import PageFooter from "../../component/PageFooter/PageFooter";

function Providers() {
  return (
    <>
      <NavigationBar />
      <section className="container section-providers">
        <div className="d-flex justify-content-between">
          <div className="mt-5">
            <a href="/" className="back" style={{ fontWeight: "bolder" }}><TiArrowLeftThick style={{ color: "black", marginRight: "0.5rem" }}></TiArrowLeftThick>Back</a>

          </div>
          <div className="search-container mt-5">

            <input
              placeholder="exam code or name"
              type="search"
              className="
                  "
            />
            <AiOutlineSearch className="search-icon"></AiOutlineSearch>
          </div>
         

        </div>
        <h5 className=" mb-5" style={{ fontWeight: "bolder", color: "black", textAlign: "center" }}>All Providers</h5>


        <div class="container-fluid py-2">


          <div class="d-flex flex-row flex-nowrap card-section">
            <div class="card card-body">
              <div className="card-image" >
                <img src={cisco} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="cisco" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={salesforce} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="salesforce" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={isaca} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="isaca" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={vmare} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="vmare" className="card-text">
                  View more
                </a>
              </div>
            </div>




          </div>
          <div class="d-flex flex-row flex-nowrap card-section">
            <div class="card card-body">
              <div className="card-image" >
                <img src={microsoft} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="microsoft" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={salesforce} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="salesforce" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={google} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="google" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={juniper} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="juniper" className="card-text">
                  View more
                </a>
              </div>
            </div>




          </div>
          <div class="d-flex flex-row flex-nowrap card-section">
            <div class="card card-body">
              <div className="card-image" >
                <img src={alibaba} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="alibaba" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={blockchain} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="blockchain" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={cloudera} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="cloudera" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={fortnet} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="fortinet" className="card-text">
                  View more
                </a>
              </div>
            </div>




          </div>
          <div class="d-flex flex-row flex-nowrap card-section">
            <div class="card card-body">
              <div className="card-image" >
                <img src={huawei} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="huawei" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={netapp} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="netapp" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={redhat} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="redhat" className="card-text">
                  View more
                </a>
              </div>
            </div>
            <div class="card card-body">
              <div className="card-image" >
                <img src={nokia} alt="" />
              </div>
              <div className="card-footer py-0" >
                <a href="nokia" className="card-text">
                  View more
                </a>
              </div>
            </div>




          </div>


        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default Providers;
