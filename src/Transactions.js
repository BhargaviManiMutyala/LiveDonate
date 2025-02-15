import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./transactions.css"; // Import CSS file
import "./Sidebar.js";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  //const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then(response => setTransactions(response.data))
      .catch(error => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className="transactions-container">

      {/* Transactions Table */}
      <div className="transactions-content">
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Pancard</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.transactionId}>
                <td>{index + 1}</td>
                <td>{txn.name}</td>
                <td>₹{txn.amount}</td>
                <td>{txn.transactionId}</td>
                <td>{new Date(txn.date).toDateString()}</td>
                <td>{txn.pancard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
