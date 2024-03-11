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
  const [search, setSearch] = useState("");
  const { providerName, examName } = useParams();
  const currency = sessionStorage.getItem("currency");
  const rate = sessionStorage.getItem("fx");
  const checkExam = (name) => name.exam.toLowerCase() == examName.toLowerCase();
  const GetBooks = async () => {
    try {
      const response = await axios.get(
        "https://api.certifieddump.com/api-admin/getBooks"
      );
      setBooks(response.data.books);
    } catch (error) {}
  };

    function formatBal(bal) {
      const parts = bal.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

  useEffect(() => {
    GetBooks();
  }, []);

  return (
    <PublicLayout>
      <div className="navigate container mb-4">
        <Back path={`/provider/${providerName}`} />
        <SearchBar setSearch={setSearch} text="Book Name or Code" />
      </div>
      <div className="p-exams py-2">
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          {examName} Books
        </h3>
        {books ? (
          <>
            <div className="exam-card-section mt-4">
              {books
                .filter(checkExam)
                .filter((book) => {
                  if (search == "") return book;
                  else if (book.title.toLowerCase().includes(search)) {
                    return book;
                  } else return null;
                })
                .map((item, i) => (
                  <Provider
                    key={i}
                    image={item.image}
                    title={item.title}
                    providerName={`/provider/${providerName}/${examName}/${item.id}`}
                    i={i}
                    text="Preview Book"
                    price={`${
                      currency === "NGN"
                        ? `NGN${formatBal(Number(rate) * Number(item.price))}`
                        : `$${formatBal(item.price)}`
                    }`}
                  />
                ))}
            </div>
            {books.filter(checkExam).length === 0 ? (
              <div style={{ textAlign: "center" }}>No book found</div>
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
          books.filter((book) => {
            return book.title.toLowerCase().includes(search);
          }).length === 0 && (
            <div className="d-overview-no-books">No Book Found</div>
          )}
      </div>
    </PublicLayout>
  );
}
export default Blockchain;
