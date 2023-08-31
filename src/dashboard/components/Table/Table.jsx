import React, { useEffect, useRef, useState } from "react";
import "./Table.css";
import RowWallet from "./RowWallet";
import RowModal from "./RowModal";
import DesktopRow from "./DesktopRow";

const Table = ({ title, data, searchTerm }) => {
  const [modalIndex, setModalIndex] = useState(-1);
  const modalRef = useRef();

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(-1);
  };

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
        {data
          .filter((all) => {
            if (searchTerm == "") return all;
            else if (
              all.trx_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              all.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
              all.status.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return all;
            } else return null;
          })
          .map((each, i) => (
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

        {data
          .filter((all) => {
            if (searchTerm == "") return all;
            else if (
              all.trx_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              all.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
              all.status.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return all;
            } else return null;
          })
          .map((each, i) => (
            <DesktopRow key={i} i={i} each={each} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
