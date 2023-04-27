import React from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState(2022);

  const onFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  )

  console.log("filtered year", filteredYear)
  console.log("props.expenses", props.expenses);
  console.log("filtered expenses", filteredExpenses);
  
  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={onFilter} selectedYear={filteredYear} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
