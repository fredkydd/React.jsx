/* eslint-disable react/prop-types */
'use strict';
import { useState } from 'react';
import styles from './Expenses.module.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState(null),
    selectedYearPropsHandler = (year) => {
      setSelectedYear(year);
    };

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
