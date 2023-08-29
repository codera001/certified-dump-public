import React, { useRef, useState } from "react";
import "./Table.css";
import RowWallet from "./RowWallet";
import RowModal from "./RowModal";
import DesktopRow from "./DesktopRow";

const Table = ({ title, data }) => {
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

        {data.map((each, i) => (
          <DesktopRow i={i} each={each} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
