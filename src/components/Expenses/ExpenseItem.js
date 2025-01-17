import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const onTitleChange = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={onTitleChange}>On Click</button>
        </div>
      </Card>
    </li>
  );
}
