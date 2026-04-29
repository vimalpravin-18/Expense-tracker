import React, { useState } from "react";

function TransactionList({ transactions, deleteTransaction, editTransaction }) {
  const [editingId, setEditingId] = useState(null);
  const [editDesc, setEditDesc] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editType, setEditType] = useState("expense");

  const startEditing = (txn) => {
    setEditingId(txn.id);
    setEditDesc(txn.description);
    setEditAmount(txn.amount);
    setEditType(txn.type);
  };

  const saveEdit = (id) => {
    if (!editDesc || !editAmount) {
      alert("Please fill in all fields");
      return;
    }
    editTransaction(id, {
      description: editDesc,
      amount: parseFloat(editAmount),
      type: editType,
    });
    setEditingId(null);
  };

  return (
    <div>
      <h2 style={{ color: "#34495e", marginBottom: "15px" }}>Transactions</h2>
      <ul className="transaction-list">
        {transactions.map((txn) => (
          <li className={txn.type} key={txn.id} style={{ position: "relative", paddingRight: "100px" }}>
            {editingId === txn.id ? (
              <>
                <input
                  type="text"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  style={{
                    flex: "2",
                    padding: "8px 12px",
                    width: "90px",
                    borderRadius: "10px",
                    border: "1.5px solid #ddd",
                    marginLeft: "-16px",
                    marginRight: "10px",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                  style={{
                    flex: "1",
                    padding: "8px 12px",
                    width: "70px",
                    borderRadius: "10px",
                    border: "1.5px solid #ddd",
                    marginRight: "10px",
                    fontSize: "1rem",
                  }}
                />
                <select
                  value={editType}
                  onChange={(e) => setEditType(e.target.value)}
                  style={{
                    flex: "1",
                    padding: "8px 12px",
                    width: "110px",
                    borderRadius: "10px",
                    border: "1.5px solid #ddd",
                    marginRight: "10px",
                    fontSize: "1rem",
                  }}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
                <button
                  onClick={() => saveEdit(txn.id)}
                  style={{
                    backgroundColor: "#27ae60",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "20px 40px",
                    marginRight: "8px",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "20px 40px",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>
                  {txn.description} - ₹{txn.amount} ({txn.type})<br />
                  <small>{txn.date}</small>
                </span>
                <div
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => startEditing(txn)}
                    style={{
                      backgroundColor: "#2980b9",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "30px",
                      textAlign: "center",
                    }}
                    title="Edit transaction"
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => deleteTransaction(txn.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "30px",
                      textAlign: "center",
                    }}
                    title="Delete transaction"
                  >
                    ×
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;