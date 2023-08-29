import React, { useRef, useState } from "react";
import "./Table.css";
import RowWallet from "./RowWallet";
import RowModal from "./RowModal";
import DesktopRow from "./DesktopRow";

const Table = ({ title, data, searchTerm }) => {
  const [show, setShow] = useState(false);
  let modalRef = useRef();
  const closeModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShow(false);
    }
  };
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
        {data.map((each, i) => (
          <>
            <RowWallet key={i} each={each} onClick={() => setShow(!show)} />
            {show && (
              <RowModal
                each={each}
                closeModal={closeModal}
                modalRef={modalRef}
              />
            )}
          </>
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
            <DesktopRow i={i} each={each} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
