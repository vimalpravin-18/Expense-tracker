import { useState } from "react";

function ExpenseTrack()  {
    const[expense , setExpense] = useState([])
    const[title, setTitle] = useState("")
    const[amount, setAmount] = useState("");

    if(title.trim() == "" || amount == "") {
        alert("Enter valid data !")
        return;
    }

    const NewExpense = {
        id : Date.now(),
        title : title ,
        amount : Number(amount)
    };

    setExpense([...expense, NewExpense])

    setTitle("")
    setAmount("")


    function DeleteExpense(id) {
        const updated = expense.filter(_, i => i !== id) 
        setExpense(updated);
    }

    function getTotal() {
        return expense.reduce((Total, e) => total + e.amount, 0); 
    }

    return (
        <div style={padding = "20px"}>
                <h1>Expense Tracker</h1>

                <input 
                    type="text"
                    value={title}
                    placeholder="Description"
                    onChange={(e) => e.target.value} 
                 />

                 <input
                    type="Number" 
                    value={amount}
                    placeholder="Enter amount"
                    onChange={(e) => e.target.value}
                />

                <button onClick={ExpenseTrack}>Add</button>

                <h2>Total : ${getTotal()}</h2>

                <ul>
                    {expense.map(e => (
                        <li key={id}>
                            {e.title} - {e.amount}
                            <button onClick={DeleteExpense(e.id)}>delete</button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default ExpenseTrack;