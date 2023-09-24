import React from "react";

const DesktopRow = ({ each, i }) => {
  const status = each.status.toLowerCase();

  return (
    <tr key={i} className="d-desktop-row">
      <td>{i + 1}</td>
      <td>{each.trx_id}</td>
      <td>{each.amount}</td>
      <td>{each.date}</td>
      <td>{each.type}</td>
      {status === "successful" ? (
        <td className="d-status-success">Successful</td>
      ) : status === "Pending" ? (
        <td className="d-status-pend">Pending</td>
      ) : (
        <td className="d-status-fail">Failed</td>
      )}
    </tr>
  );
};

export default DesktopRow;
