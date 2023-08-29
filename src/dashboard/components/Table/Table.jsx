import React, { useRef, useState } from "react";
import "./Table.css";

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
            <tr key={i} className="d-mobile-row" onClick={() => setShow(!show)}>
              <td>
                <p>{each.type}</p>
                <em>{each.date}</em>
              </td>
              <td>
                <p>{each.amt}</p>
                {each.status === "successful" ? (
                  <em className="d-mobile-success">Successful</em>
                ) : each.status === "pending" ? (
                  <em className="d-mobile-pend">Pending</em>
                ) : (
                  <em className="d-mobile-fail">Failed</em>
                )}
              </td>
            </tr>

            {show && (
              <div key={each.date} onClick={closeModal} className="d-table-modal">
                <div ref={modalRef} className="d-modal-ticket">
                  <p>{each.date}</p>
                  <p>{each.type}</p>
                  <p>{each.amt}</p>
                  <p>{each.id}</p>
                  {each.status === "successful" ? (
                    <em className="d-mobile-success">Successful</em>
                  ) : each.status === "pending" ? (
                    <em className="d-mobile-pend">Pending</em>
                  ) : (
                    <em className="d-mobile-fail">Failed</em>
                  )}
                </div>
              </div>
            )}
          </>
        ))}

        {data.map((each, i) => (
          <tr key={i} className="d-desktop-row">
            <td>{i + 1}</td>
            <td>{each.trx_id}</td>
            <td>{each.amt}</td>
            <td>{each.date}</td>
            <td>{each.type}</td>
            {each.status === "successful" ? (
              <td className="d-status-success">Successful</td>
            ) : each.status === "pending" ? (
              <td className="d-status-pend">Pending</td>
            ) : (
              <td className="d-status-fail">Failed</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
