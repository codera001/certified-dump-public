import React from "react";

const RowModal = ({ each, closeModal, modalRef }) => {
  const status = each.status.toLowerCase();

  return (
    <td onClick={closeModal} className="d-table-modal">
      <p ref={modalRef} className="d-modal-ticket">
        <span>Transaction ID: {each.trx_id}</span>
        <span>Date: {new Date(each.date).toDateString()}</span>
        <span>Type: {each.type}</span>
        <span>Amount: {each.amount}</span>
        <span>
          Status:{" "}
          {status === "successful" ? (
            <em className="d-mobile-success">Successful</em>
          ) : status === "pending" ? (
            <em className="d-mobile-pend">Pending</em>
          ) : (
            <em className="d-mobile-fail">Failed</em>
          )}
        </span>
      </p>
    </td>
  );
};

export default RowModal;
