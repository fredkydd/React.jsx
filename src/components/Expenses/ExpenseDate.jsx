/* eslint-disable react/prop-types */
'use strict';
import styles from './ExpenseDate.module.css';

export default function ExpenseDate({ date }) {
  const day = date.toLocaleString('en-US', { day: '2-digit' }),
    month = date.toLocaleString('en-US', { month: 'long' }),
    year = date.getFullYear();

  return (
    <div className={[styles['expense-date']]}>
      <div className={`${styles['expense-date-day']}`}>{day}</div>
      <div className={styles['expense-date-month']}>{month}</div>
      <div className={styles['expense-date-year']}>{year}</div>
    </div>
  );
}
