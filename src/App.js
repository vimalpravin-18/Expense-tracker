import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (txn) => {
    setTransactions([txn, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((txn) => txn.id !== id));
  };

  const editTransaction = (id, updatedTxn) => {
  setTransactions((prevTxns) =>
    prevTxns.map((txn) => (txn.id === id ? { ...txn, ...updatedTxn } : txn))
  );
};

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Summary transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList
  transactions={transactions}
  deleteTransaction={deleteTransaction}
  editTransaction={editTransaction}
/>
      <ExpenseChart transactions={transactions} />
    </div>
  );
}

export default App;
