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
import { useEffect, useState } from "react";
import axios from "axios";
import Provider from "../../component/Provider";
import loader from "../../static/loader.gif";

function Providers() {
  const [allProviders, setAllProviders] = useState(null);
  const GetProviders = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getProviders"
      );
      // console.log(response);
      console.log(response.data.providers.slice(0, 5));
      setAllProviders(response.data.providers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProviders();
  }, []);

  return (
    <>
      <NavigationBar />
      <section className="container section-providers">
        <div className="d-flex justify-content-between">
          <div className="mt-5">
            <a href="/" className="back" style={{ fontWeight: "bolder" }}>
              <TiArrowLeftThick
                style={{ color: "black", marginRight: "0.5rem" }}
              ></TiArrowLeftThick>
              Back
            </a>
          </div>
          <div className="search-container ">
            <input
              placeholder="exam code or name"
              type="search"
            />
            <AiOutlineSearch className="search-icon"></AiOutlineSearch>
          </div>
        </div>
        <h5
          className=" mt-5 mb-5"
          style={{ fontWeight: "bolder", color: "black", textAlign: "center" }}
        >
          All Providers
        </h5>
        <div class="container-fluid py-2 mb-5">
          <div class="d-flex flex-row flex-nowrap card-section">
            {allProviders ? (
              <>
                {allProviders.map((item, i) => (
                  <Provider key={i} name={item.name} i={i} text="View More" />
                ))}
              </>
            ) : (
              <img src={loader} alt="loading gif" />
            )}
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default Providers;
