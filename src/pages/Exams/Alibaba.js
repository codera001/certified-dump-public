import React, { useEffect, useState } from "react";
import "./Exams.css";
import Provider from "../../component/Provider";
import axios from "axios";
import loader from "../../static/loader.gif";
import { useParams } from "react-router-dom";
import PublicLayout from "../../component/PublicLayout";
import SearchBar from "../../component/SearchBar";
import Back from "../../component/Back";

function Alibaba() {
  const [exams, setExams] = useState(null);
  const [search, setSearch] = useState("");
  const { providerName } = useParams();
  const checkProvider = (name) =>
    name.providerid.toLowerCase() == providerName.toLowerCase();

  const GetExams = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getExams"
      );
      setExams(response.data.exams);
    } catch (error) {}
  };

  useEffect(() => {
    GetExams();
  }, []);

  return (
    <PublicLayout>
      <div className="navigate container mb-4">
        <Back path="/providers" />
        <SearchBar setSearch={setSearch} text="Exam Code or Name" />
      </div>
      <div className="p-exams py-2">
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          {providerName} Exams
        </h3>
        {exams ? (
          <>
            <div className="exam-card-section mt-4">
              {exams
                .filter(checkProvider)
                .filter((exam) => {
                  if (search == "") return exam;
                  else if (exam.title.toLowerCase().includes(search)) {
                    return exam;
                  } else return null;
                })
                .map((item, i) => (
                  <Provider
                    key={i}
                    image={item.image}
                    title={item.title}
                    providerName={`/provider/${providerName}/${item.title}`}
                    i={i}
                    text="View Books"
                  />
                ))}
            </div>
            {exams.filter(checkProvider).length === 0 ? (
              <div style={{ textAlign: "center" }}>No Exams found</div>
            ) : (
              ""
            )}
          </>
        ) : (
          <div className="d-gif-div">
            <img
              loading="lazy"
              src={loader}
              alt="loading-gif"
              className="d-gif"
            />
          </div>
        )}

        {search !== "" &&
          exams.filter((exam) => {
            return exam.title.toLowerCase().includes(search);
          }).length === 0 && (
            <div className="d-overview-no-books">No Exam Found</div>
          )}
      </div>
    </PublicLayout>
  );
}
export default Alibaba;
