import React, { useEffect, useState } from "react";
import "./Exams.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Provider from "../../component/Provider";
import loader from "../../static/loader.gif";
import PublicLayout from "../../component/PublicLayout";
import SearchBar from "../../component/SearchBar";
import Back from "../../component/Back";

function Blockchain() {
  const [books, setBooks] = useState(null);
  const { providerName, examName } = useParams();
  const checkProvider = (name) => name.providerid == providerName;
  const GetBooks = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getBooks"
      );
      // console.log(response);
      // console.log(response.data.books);
      //get all exams by the name of provider here
      setBooks(response.data.books);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    GetBooks();
  }, []);
  return (
    <PublicLayout>
      <div className="navigate container mb-4">
        <Back path={`/provider/${providerName}`} />
        <SearchBar text="Book Name or Code" />
      </div>
      <div className="p-exams py-2">
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          {providerName} {examName} Books
        </h3>
        {books ? (
          <>
            <div className="exam-card-section">
              {books.filter(checkProvider).map((item, i) => (
                <Provider
                  key={i}
                  image={item.image}
                  title={item.title}
                  providerName={`/provider/${providerName}/${examName}/${item.id}`}
                  i={i}
                  text="Preview Book"
                  price={`$${item.price}`}
                />
              ))}
            </div>
            {books.filter(checkProvider).length === 0 ? (
              <div style={{ textAlign: "center" }}>No book found</div>
            ) : (
              ""
            )}
          </>
        ) : (
          <div className="d-gif-div">
            <img loading="lazy" src={loader} alt="loading-gif" className="d-gif" />
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
export default Blockchain;
