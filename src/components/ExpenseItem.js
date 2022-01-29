import "./ExpenseItem.css"
function ExpenseItem() {
  return (
      <div className="expense-item">
          <div>Jan 29, 2022</div>
          <div className="expense-item__description">
              <h2>Car Insurance</h2>
              <div className="expense-item__price">$250.40</div>
          </div>
      </div>

  );
}

export default ExpenseItem;
