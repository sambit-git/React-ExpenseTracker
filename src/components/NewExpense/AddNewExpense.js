import React from "react";

import "./ExpenseForm.css";

const AddNewExpense = (props) => {

  return (
      <div className="new-expense__controls">
        <div className="new_expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
  );
};

export default AddNewExpense;
