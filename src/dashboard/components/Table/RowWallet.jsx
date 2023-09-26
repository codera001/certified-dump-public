import React from 'react'

const RowWallet = ({ each }) => {
  const status = each.status.toLowerCase();
  
  return (
    <>
      <td>
        <p>{each.type}</p>
        <em>{new Date(each.date).toDateString()}</em>
      </td>
      <td>
        <p>{each.amount}</p>
        {status === "successful" ? (
          <em className="d-mobile-success">Successful</em>
        ) : status === "pending" ? (
          <em className="d-mobile-pend">Pending</em>
        ) : (
          <em className="d-mobile-fail">Failed</em>
        )}
      </td>
    </>
  );
}

export default RowWallet