import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditMode, setIsEditMode] = useState();

  const editModeHandler = () => {
    setIsEditMode(true);
  };

  const exitEditMode = () => {
    setIsEditMode(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditMode(false);
  };

  return (
    <div className="new-expense">
      {!isEditMode && (
        <button onClick={editModeHandler}>Add New Expense</button>
      )}
      {isEditMode && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={exitEditMode}
        />
      )}
    </div>
  );
};

export default NewExpense;
