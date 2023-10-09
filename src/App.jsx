'use strict';
// import ExpenseItem from './components/ExpenseItem';
import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2021, 7, 14),
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
        date: new Date(2022, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 5, 12),
      },
    ]),
    expensesWithId = (expensesWithId) => {
      setExpenses((expenses) => {
        return [...expenses, expensesWithId];
      });
      // console.log(expenses);
    };

  return (
    <>
      <NewExpense expensesWithId={expensesWithId} />
      <Expenses expenses={expenses} />

      {/* <ExpenseItem expense={expenses.at(0)} /> */}
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

// !REACT DOM creates it instead of us
// function App() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, "Let's get started"),
//     React.createElement(Expenses, { expenses: expenses })
//   );
// }

// !props are custom HTML attributes
