import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "e" + (Math.random() * 10).toString(),
    };
    props.onAddExpense(expenseData);
    toggleForm();
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className={classes["new-expense"]}>
      {!showForm && <button onClick={toggleForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
