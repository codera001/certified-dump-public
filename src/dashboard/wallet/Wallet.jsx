import React, { useEffect, useState } from "react";
import "./Wallet.css";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import SearchBar from "../components/SearchBar.jsx/SearchBar";
import axios from "axios";
import loader from "../../static/loader.gif";

const Wallet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [spent, setSpent] = useState(null);
  const [error, setError] = useState("");
  let userid = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");
  const balance = sessionStorage.getItem("balance");
  const currency = sessionStorage.getItem("currency");
  const [loading, setLoading] = useState(true);

  const titles = ["S/N", "Id", "Amount", "Date & Time", "Status", "Type"];

  const moneySpent = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api-wallet/userTotalSpentbalance?userid=${userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response)
      setSpent(response.data.result[0].total_amount);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(!loading);
    }
  };

  const fetchUserTransactions = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api-wallet/usertransaction?userid=${userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactions(
        response.data.result.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        })
      );
      // console.log(response.data.result);
    } catch (error) {
      setError(error.response.data.msg);
      // console.log(error.response);
    } finally {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    moneySpent();
    fetchUserTransactions();
  }, []);

  return (
    <Layout>
      <div className="d-wallets">
        <div className="d-spent">
          <p>Total Spent</p>
          {loading ? (
            <div className="d-gif-div">
              <img
                loading="lazy"
                src={loader}
                alt="loading-gif"
                className="d-gif"
              />
            </div>
          ) : spent ? (
            <strong>
              {currency === "NGN" ? "NGN" : "$"}
              {spent}
            </strong>
          ) : (
            <strong>{currency === "NGN" ? "NGN" : "$"}0.00</strong>
          )}
          <p>Total amount spent on Exam Purchase</p>
        </div>
        <div className="d-bal">
          <p>Wallet Balance</p>
          <strong>
            {currency === "NGN" ? "NGN" : "$"}
            {Number(balance).toFixed(2)}
          </strong>
          <p>Total available balance for Purchase</p>
        </div>
      </div>
      <div className="d-table-container">
        <div className="d-table-header">
          <h3>Your transactions History</h3>
        </div>
        {loading ? (
          <div className="d-gif-div">
            <img
              loading="lazy"
              src={loader}
              alt="loading-gif"
              className="d-gif"
            />
          </div>
        ) : error ? (
          <div className="error">You have no transaction history</div>
        ) : (
          <>
            <SearchBar
              title="Search Transactions"
              setSearchTerm={setSearchTerm}
            />
            <Table title={titles} data={transactions} searchTerm={searchTerm} />
            {searchTerm !== "" &&
              transactions.filter((all) => {
                return (
                  all.trx_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  all.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  all.status.toLowerCase().includes(searchTerm.toLowerCase())
                );
              }).length === 0 && (
                <div className="d-lib-no-books">No transactions Found</div>
              )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Wallet;
