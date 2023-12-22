// src/components/BudgetCalculator.jsx

import React, { useState } from 'react';

const BudgetCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [budget, setBudget] = useState(null);

  const calculateBudget = () => {
    const budgetValue = income - expenses;
    setBudget(budgetValue);
  };

  return (
    <div className="calculator">
      <h2>Budget Calculator</h2>
      <label>
        Income:
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
      </label>
      <label>
        Expenses:
        <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
      </label>
      <button onClick={calculateBudget}>Calculate Budget</button>
      {budget !== null && <p>Your budget: {budget}</p>}
    </div>
  );
};

export default BudgetCalculator;
