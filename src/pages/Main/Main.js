import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import study from "../../static/study.png";
import "./Main.css";
import Footer from "../../component/Footer/Footer";
import Provider from "../../component/Provider";
import axios from "axios";
import loader from "../../static/loader.gif";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../component/ScrollToTop";

function Main() {
  const navigate = useNavigate();
  const [providers, setProviders] = useState(null);
  const [exams, setExams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExams, setFilteredExams] = useState([]);
  const [images, setImages] = useState([]);
  const [curImg, setCurImg] = useState(0);
  const GetImages = async () => {
    try {
      const res = await axios.get(
        "https://api.certifieddump.com/api-admin/getImageHeader"
      );
      setImages(res.data.ImageHeader.map((item) => item.image_url));
    } catch (error) {}
  };

  const GetExams = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getExams"
      );
      setExams(response.data.exams);
    } catch (error) {}
  };

  const GetProviders = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getProviders"
      );
      setProviders(response.data.providers);
    } catch (error) {}
  };

  const handleSearch = () => {
    const examMatch = exams.filter((exam) => {
      if (searchTerm === "") {
        return false;
      } else {
        return exam.title.toLowerCase().includes(searchTerm);
      }
    });
    setFilteredExams(examMatch);
  };

  const handleSelect = (exam) => {
    if (exam) {
      navigate(`/provider/${exam.providerid}/${exam.title}`);
    }
  };

  const providerChange = (e) => {
    const selectedProvider = e.target.value;
    if (selectedProvider) {
      navigate(`/provider/${selectedProvider}`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImg((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    GetImages();
    GetProviders();
    GetExams();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <NavigationBar />
      <section
        className="section-one-main"
        style={{
          backgroundImage: `url(${images[curImg]})`,
        }}
      >
        <div className="text my-auto">
          <h1>
            WELCOME TO <br className="break" /> CERTIFIED DUMP
          </h1>
          <p className="text-align-center mx-auto p-text">
            You'll discover that none of the suppliers of real exam materials
            are genuinely free when you search for them. We made the decision to
            withhold all of that dreck and just provide you with the most
            recent, accurate, and confirmed genuine exam questions & answers.
          </p>
          <p style={{ fontSize: "16px", marginBottom: "2rem" }}>
            You are assured to pass your exams for free.
          </p>

          <div className=" container  justify-content-around  text-align-center">
            <Link
              to="/providers"
              className=" mt-1 button"
              style={{
                borderColor: "var(--white)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "1px",
              }}
            >
              FIND YOUR EXAM NOW
            </Link>
          </div>
        </div>
      </section>

      {/* section-two */}
      <section className="section-two-main">
        <div className="section-two-main-text">
          <h4
            className="mt-5 mb-4"
            style={{ fontWeight: "bolder", color: "black" }}
          >
            Our Top Providers
          </h4>
          <p className="mb-5">
            Certified dump has one of the largest collection of professional
            certification and exam practice tests and online courses. Use our
            study materials to pass your examinations on the first try! Our goal
            is to see you succeed.
          </p>
        </div>
        <div className="p-providers py-2">
          {providers ? (
            <div className="card-section">
              {providers.slice(0, 10).map((item, i) => (
                <Provider
                  key={i}
                  providerName={`/provider/${item.name}`}
                  i={i}
                  title={item.name}
                  image={item.url}
                  text="View More"
                />
              ))}
            </div>
          ) : (
            <img loading="lazy" src={loader} alt="loading gif" />
          )}
          <div className="button">
            <Link
              to="providers"
              className=" px-4 py-1"
              style={{
                color: "var(--tertiary-color)",
                borderColor: "var(--tertiary-color)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "1px",
              }}
            >
              VIEW PROVIDERS
            </Link>
          </div>
        </div>
      </section>

      {/* section-three */}
      <section className="section-three-main">
        <div className="p-study">
          <div className="image">
            <img loading="lazy" alt="study" width="100%" src={study} />
          </div>

          <div className="text">
            <h4 className="text-start">
              FREE AND REVISED ACTUAL EXAM SUPPLEMENTALS
            </h4>
            <hr className="section-three-main-line"></hr>
            <p className="text-start">
              Certified dump gives you not only UNLIMITED but also FREE access
              to all actual exam questions and descripotive answers. While
              studying actual exam questions, you can also benefit from our
              user-friendly exam-like interface.
            </p>
          </div>
        </div>

        <div className="search-main pt-5">
          <h2 style={{ fontWeight: "bolder", color: "black" }}>
            FIND EXAMS NOW
          </h2>
          <div className="exam-search-buttons">
            <select
              className="px-4 py-1 p-custom-select"
              onChange={providerChange}
            >
              <option value="">Select Provider</option>
              {providers &&
                providers.map((provider, i) => (
                  <option key={i} value={provider.name}>
                    {provider.name}
                  </option>
                ))}
            </select>
            <p className="mb-0">OR</p>
            <div className="filter-drop">
              <input
                className="py-2 keyword"
                type="text"
                placeholder="Exam Name or Code"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value.toLowerCase());
                  if (e.target.value === "") {
                    setFilteredExams([]);
                  } else {
                    handleSearch();
                  }
                }}
              />
              {filteredExams && (
                <div className="p-dropdown">
                  {filteredExams.map((exam, index) => (
                    <div
                      key={index}
                      className="p-dropdown-option"
                      onClick={() => handleSelect(exam)}
                    >
                      {exam.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="mx-md-3 button py-1" onClick={handleSearch}>
              Search Exams
            </button>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Main;
