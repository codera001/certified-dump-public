import React from 'react'

const DesktopRow = ({each, i}) => {
  return (
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
  );
}

export default DesktopRow