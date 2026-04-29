import React from "react";

function ExpenseChart({ transactions }) {
  const income = transactions
    .filter((txn) => txn.type === "income")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const expense = transactions
    .filter((txn) => txn.type === "expense")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const total = income + expense;
  const incomePercent = total ? (income / total) * 100 : 0;
  const expensePercent = total ? (expense / total) * 100 : 0;

  return (
    <div className="chart-container">
      <h2 className="chart-title">Expense Distribution</h2>
      <div className="chart-bar">
        <div
          className="chart-income"
          style={{ width: `${incomePercent}%` }}
        >
          Income {incomePercent.toFixed(1)}%
        </div>
        <div
          className="chart-expense"
          style={{ width: `${expensePercent}%` }}
        >
          Expense {expensePercent.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}

export default ExpenseChart;
