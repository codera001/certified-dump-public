import React from "react";
import "./Wallet.css";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";

const Wallet = () => {
  const titles = ["S/N", "Id", "Amount", "Date & Time", "Status", "Type"];
  const data = [
    {
      trx_id: "cd349",
      amt: `$20`,
      date: "23/08/23 23:00:31",
      status: "successful",
      type: "Book Purchase",
    },
    {
      trx_id: "cd350",
      amt: `$50`,
      date: "23/08/23 23:00:21",
      status: "pending",
      type: "Wallet Funding",
    },
    {
      trx_id: "cd351",
      amt: `$20`,
      date: "23/08/23 23:00:00",
      status: "failed",
      type: "Book Purchase",
    },
    {
      trx_id: "cd352",
      amt: `$50`,
      date: "23/08/23 22:00:21",
      status: "successful",
      type: "Wallet Funding",
    },
    {
      trx_id: "cd353",
      amt: `$20`,
      date: "23/08/23 21:00:31",
      status: "successful",
      type: "Book Purchase",
    },
    {
      trx_id: "cd354",
      amt: `$50`,
      date: "23/08/23 20:00:21",
      status: "pending",
      type: "Wallet Funding",
    },
    {
      trx_id: "cd355",
      amt: `$20`,
      date: "23/08/23 19:00:31",
      status: "failed",
      type: "Book Purchase",
    },
  ];

  return (
    <Layout>
      <div className="d-wallets">
        <div className="d-spent">
          <p>Total Spent</p>
          <strong>$450</strong>
          <p>Total amount spent on Exam Purchase</p>
        </div>
        <div className="d-bal">
          <p>Wallet Balance</p>
          <strong>$50</strong>
          <p>Total available balance for Purchase</p>
        </div>
      </div>
      <div className="d-table-container">
        <div className="d-table-header">
        <h3>Your transactions History</h3>
      </div>
        <Table title={titles} data={data} />
      </div>
    </Layout>
  );
};

export default Wallet;
