import React from "react";

const RowWallet = ({ each, formatBal }) => {
  const status = each.status.toLowerCase();
  const currency = sessionStorage.getItem("currency");

  return (
    <>
      <td>
        <p>{each.type}</p>
        <em>
          {new Date(each.date).toLocaleDateString() +
            " " +
            new Date(each.date).toLocaleTimeString()}
        </em>
      </td>
      <td>
        <p>
          {currency === "NGN" ? (
            <s style={{ textDecorationStyle: "double" }}>N</s>
          ) : (
            "$"
          )}
          {formatBal(each.amount)}
        </p>
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
};

export default RowWallet;
