import React, { useState } from "react";
import "./Wallet.css";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import SearchBar from "../components/SearchBar.jsx/SearchBar";

const Wallet = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    {
      trx_id: "cd356",
      amt: `$25`,
      date: "30/08/23 08:00:31",
      status: "failed",
      type: "Wallet Funding",
    },
    {
      trx_id: "cd357",
      amt: `$15`,
      date: "31/08/23 09:00:00",
      status: "successful",
      type: "Wallet Funding",
    },
    {
      trx_id: "cd358",
      amt: `$9`,
      date: "01/09/23 07:00:31",
      status: "failed",
      type: "Book Purchase",
    },
    {
      trx_id: "cd359",
      amt: `$6`,
      date: "01/09/23 09:00:31",
      status: "successful",
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
        <SearchBar title="Search Transactions" setSearchTerm={setSearchTerm} />
        <Table title={titles} data={data} searchTerm={searchTerm} />
        {searchTerm !== "" &&
          data.filter((all) => {
            return (
              all.trx_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              all.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
              all.status.toLowerCase().includes(searchTerm.toLowerCase())
            );
          }).length === 0 && (
            <div className="d-lib-no-books">No transactions Found</div>
          )}
      </div>
    </Layout>
  );
};

export default Wallet;
