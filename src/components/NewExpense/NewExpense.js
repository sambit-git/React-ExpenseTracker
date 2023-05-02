import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveData = (expenseFormData) => {
    const expenseData = {
      ...expenseFormData,
      id: (Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
    toggleForm();
  };
  const [showExpenseForm, setShowExpenseForm] = React.useState(false);

  const toggleForm = () => setShowExpenseForm((prevState) => !prevState);

  const hideForm = () => setShowExpenseForm( false );

  if (!showExpenseForm) {
    return (
      <div className="new-expense">
        <button onClick={toggleForm}>Add Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveData={onSaveData} onCancel={hideForm} />
      </div>
    );
  }
};

export default NewExpense;
