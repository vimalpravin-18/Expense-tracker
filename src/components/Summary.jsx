import React from "react";

function Summary({ transactions }) {
  const income = transactions
    .filter(txn => txn.type === "income")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const expense = transactions
    .filter(txn => txn.type === "expense")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const balance = income - expense;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Summary</h2>
      <p><strong>Income:</strong> ₹{income.toFixed(2)}</p>
      <p><strong>Expense:</strong> ₹{expense.toFixed(2)}</p>
      <p><strong>Balance:</strong> ₹{balance.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
