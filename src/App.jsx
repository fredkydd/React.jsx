'use strict';

// import ExpenseItem from './components/ExpenseItem';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV Show',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      {/* <ExpenseItem expense={expenses.at(0)} /> */}
      <Expenses expenses={expenses} />
      {/* <ExpenseItem
        title={expenses.at(0).title}
        amount={expenses.at(0).amount}
        date={expenses.at(0).date}
      />
      <ExpenseItem
        title={expenses.at(1).title}
        amount={expenses.at(1).amount}
        date={expenses.at(1).date}
      />
      <ExpenseItem
        title={expenses.at(2).title}
        amount={expenses.at(2).amount}
        date={expenses.at(2).date}
      />
      <ExpenseItem
        title={expenses.at(3).title}
        amount={expenses.at(3).amount}
        date={expenses.at(3).date}
      /> */}
    </>
  );
}

export default App;
