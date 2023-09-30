import "./Providers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Provider from "../../component/Provider";
import loader from "../../static/loader.gif";
import SearchBar from "../../component/SearchBar";
import PublicLayout from "../../component/PublicLayout";
import Back from "../../component/Back";
import cisco from "../../static/cisco.png";

function Providers() {
  const [allProviders, setAllProviders] = useState(null);
  const GetProviders = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getProviders"
      );
      // console.log(response);
      // console.log(response.data.providers.slice(0, 5));
      setAllProviders(response.data.providers);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    GetProviders();
  }, []);

  return (
    <PublicLayout>
      <section className="container section-providers">
        <div className="d-flex justify-content-between">
          <Back path="/" />
          <SearchBar text="Provider Name" />
        </div>
        <h5
          className="mb-5"
          style={{ fontWeight: "bolder", color: "black", textAlign: "center" }}
        >
          All Providers
        </h5>
        <div className="p-providers py-2 mb-5">
          {allProviders ? (
            <div className="card-section">
              {allProviders.map((item, i) => (
                <Provider
                  key={i}
                  image={cisco}
                  providerName={`/provider/${item.name}`}
                  i={i}
                  title={item.name}
                  text="View More"
                />
              ))}
            </div>
          ) : (
            <div className="d-gif-div">
              <img src={loader} alt="loading-gif" className="d-gif" />
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

export default Providers;
