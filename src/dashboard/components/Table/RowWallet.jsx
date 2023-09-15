import React from 'react'

const RowWallet = ({ each }) => {
  const status = each.status.toLowerCase();
  
  return (
    <>
      <td>
        <p>{each.type}</p>
        <em>{each.date}</em>
      </td>
      <td>
        <p>{each.amount}</p>
        {status === "successful" ? (
          <em className="d-mobile-success">Successful</em>
        ) : status === "Pending" ? (
          <em className="d-mobile-pend">Pending</em>
        ) : (
          <em className="d-mobile-fail">Failed</em>
        )}
      </td>
    </>
  );
}

export default RowWallet