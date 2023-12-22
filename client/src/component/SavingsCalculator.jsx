// src/components/SavingsCalculator.jsx

import React, { useState } from 'react';

const SavingsCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlySavingsRate, setMonthlySavingsRate] = useState('');
  const [savingsGoal, setSavingsGoal] = useState('');
  const [monthlySavings, setMonthlySavings] = useState(null);

  const calculateMonthlySavings = () => {
    const savings = (monthlyIncome * monthlySavingsRate) / 100;
    setMonthlySavings(savings);
  };

  return (
    <div className="calculator">
      <h2>Savings Calculator</h2>
      <label>
        Monthly Income:
        <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} />
      </label>
      <label>
        Monthly Savings Rate (%):
        <input type="number" value={monthlySavingsRate} onChange={(e) => setMonthlySavingsRate(e.target.value)} />
      </label>
      <label>
        Savings Goal:
        <input type="number" value={savingsGoal} onChange={(e) => setSavingsGoal(e.target.value)} />
      </label>
      <button onClick={calculateMonthlySavings}>Calculate Monthly Savings</button>
      {monthlySavings !== null && <p>Your monthly savings: {monthlySavings}</p>}
    </div>
  );
};

export default SavingsCalculator;
