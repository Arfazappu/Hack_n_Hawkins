import React from 'react';
import BudgetCalculator from '../BudgetCalculator';
import SavingsCalculator from '../SavingsCalculator';
import InvestmentPlanner from '../InvestmentPlanner';

const AllCalculators = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const calculatorStyles = {
    backgroundColor: ['#fff', 'white'],
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px auto',
    width:'50%',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...calculatorStyles, backgroundColor: calculatorStyles.backgroundColor[0] }}>
        <h2 style={titleStyle}>Budget Calculator</h2>
        <p style={subtitleStyle}>Manage your budget effectively with our budget calculator.</p>
        <BudgetCalculator />
      </div>

      <div style={{ ...calculatorStyles, backgroundColor: calculatorStyles.backgroundColor[1] }}>
        <h2 style={titleStyle}>Savings Calculator</h2>
        <p style={subtitleStyle}>Plan your savings goals with our savings calculator.</p>
        <SavingsCalculator />
      </div>

      <div style={{ ...calculatorStyles, backgroundColor: calculatorStyles.backgroundColor[0] }}>
        <h2 style={titleStyle}>Investment Planner</h2>
        <p style={subtitleStyle}>Explore investment opportunities with our investment planner.</p>
        <InvestmentPlanner />
      </div>
    </div>
  );
};

export default AllCalculators;
