import React, { useEffect, useRef, useState } from "react";
import "./Table.css";
import RowWallet from "./RowWallet";
import RowModal from "./RowModal";
import DesktopRow from "./DesktopRow";

const ItemsPerPage = 7;

const Table = ({ title, data, searchTerm }) => {
  const [modalIndex, setModalIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const modalRef = useRef();

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(-1);
  };

  const filteredData = data
    .sort(function (a, b) {
      return b.id - a.id;
    })
    .filter((all) => {
      if (searchTerm === "") return all;
      else if (
        all.trx_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        all.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        all.status.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        // console.log(all);
        return all;
      } else return null;
    });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / ItemsPerPage);

  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;

  const visibleItems = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <table className="d-table">
        <thead>
          <tr>
            <th>{title[0]}</th>
            <th>{title[1]}</th>
            <th>{title[2]}</th>
            <th>{title[3]}</th>
            <th>{title[5]}</th>
            <th>{title[4]}</th>
          </tr>
        </thead>
        <tbody>
          {visibleItems.map((each, i) => (
            <DesktopRow key={i} i={i} each={each} />
          ))}

          {visibleItems.map((each, i) => (
            <tr
              key={i}
              className="d-mobile-row"
              onClick={() => {
                openModal(i);
              }}
            >
              <RowWallet each={each} />
              {modalIndex === i && (
                <RowModal
                  each={each}
                  closeModal={closeModal}
                  modalRef={modalRef}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "pagination-active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Table;
