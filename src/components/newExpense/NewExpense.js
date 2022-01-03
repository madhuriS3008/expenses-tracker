import React from "react";

import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "e" + (Math.random() * 10).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
