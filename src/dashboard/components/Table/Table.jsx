import React from "react";
import "./Table.css";

const Table = ({ title, data }) => {
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
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{each.trx_id}</td>
            <td>{each.amt}</td>
            <td>{each.date}</td>
            <td>{each.type}</td>
            {each.status === 'successful' ? (
              <td className="d-status-success">Successful</td>
            ) : 
              each.status === "pending" ? (
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
