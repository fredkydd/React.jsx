/* eslint-disable react/prop-types */
'use strict';
import { useState } from 'react';
import styles from './Expenses.module.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

export default function Expenses({ expenses }) {
  // *i use filteredText variable because useState will render this component again when i click the option value to change year.No need to another state!
  const [selectedYear, setSelectedYear] = useState(null),
    selectedYearPropsHandler = (year) => {
      setSelectedYear(year);
      console.log(`type of selectedYear is \n ${typeof selectedYear}`);
    };
  let filteredText = '2020, 2021, 2022, 2023',
    hiddenVisible = 'hidden';

  if (selectedYear === 2023) {
    filteredText = '2020, 2021, 2022';
  } else if (selectedYear === 2022) {
    filteredText = '2020, 2021, 2023';
  } else if (selectedYear === 2021) {
    filteredText = '2020, 2022, 2023';
  } else if (selectedYear === 2020) {
    filteredText = ' 2021, 2022, 2023';
  } else {
    filteredText = '2020, 2021, 2022, 2023';
    hiddenVisible = 'visible';
  }

  const filteredExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date); // *Convert to Date object
      // *Invalid date, skip this expense
      isNaN(expenseDate.getTime()) && false;
      const expenseYear = expenseDate.getFullYear();
      return selectedYear === null || selectedYear === expenseYear;
    }),
    expenseItems = filteredExpenses.map((expense) => {
      const expenseDate = new Date(expense.date),
        day = expenseDate.toLocaleString('en-US', { day: '2-digit' }),
        month = expenseDate.toLocaleString('en-US', { month: 'long' }),
        year = expenseDate.getFullYear();

      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={`${day} ${month}, ${year}`}
        />
      );
    });

  return (
    <Card className={styles['expenses']}>
      <ExpensesFilter selectedYearProps={selectedYearPropsHandler} />
      <p className={styles.filteredText}>
        Data for years:{' '}
        <strong>
          {' '}
          {filteredText} are {hiddenVisible}.
        </strong>
      </p>
      {expenseItems.length === 0 ? (
        <strong className={styles.error}>
          No expenses found for the {selectedYear} year
        </strong>
      ) : (
        expenseItems
      )}
    </Card>
  );
}
