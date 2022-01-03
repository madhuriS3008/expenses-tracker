import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ErrorModal from "../ui/ErrorModal";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState();

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

  const errorHandler = (errorMessage) => {
    setError(errorMessage);
  };

  const closeErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
          onConfirm={closeErrorHandler}
        />
      )}
      <div className={classes["new-expense"]}>
        {!showForm && <button onClick={toggleForm}>Add New Expense</button>}
        {showForm && (
          <ExpenseForm
            onError={errorHandler}
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={toggleForm}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
