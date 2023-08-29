import React from 'react'

const RowWallet = ({each}) => {
  return (
    <tr className="d-mobile-row">
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
  );
}

export default RowWallet