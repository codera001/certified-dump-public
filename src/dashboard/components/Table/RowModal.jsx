import React from 'react'

const RowModal = ({each, closeModal, modalRef}) => {
  return (
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
  );
}

export default RowModal