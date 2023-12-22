// src/components/InvestmentPlanner.jsx

import React, { useState } from 'react';

const InvestmentPlanner = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualReturnRate, setAnnualReturnRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    const monthlyRate = annualReturnRate / 12 / 100;
    const periods = investmentPeriod * 12;

    const futureVal =
      initialInvestment * Math.pow(1 + monthlyRate, periods) +
      monthlyContribution * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate);

    setFutureValue(futureVal.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Investment Planner</h2>
      <label>
        Initial Investment:
        <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} />
      </label>
      <label>
        Monthly Contribution:
        <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} />
      </label>
      <label>
        Annual Return Rate (%):
        <input type="number" value={annualReturnRate} onChange={(e) => setAnnualReturnRate(e.target.value)} />
      </label>
      <label>
        Investment Period (years):
        <input type="number" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(e.target.value)} />
      </label>
      <button onClick={calculateFutureValue}>Calculate Future Value</button>
      {futureValue !== null && <p>Your future investment value: ${futureValue}</p>}
    </div>
  );
};

export default InvestmentPlanner;
