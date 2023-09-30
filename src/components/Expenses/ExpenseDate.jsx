/* eslint-disable react/prop-types */
'use strict';
import styles from './ExpenseDate.module.css';

export default function ExpenseDate({ date }) {
  const parsedDate = new Date(date),
    isValidDate = !isNaN(parsedDate.getTime()),
    errorMessage = isValidDate ? null : 'Invalid Date';

  return (
    <section className={styles['expense-date']}>
      {errorMessage ? (
        <div className={styles['error-message']}>{errorMessage}</div>
      ) : (
        <>
          <div className={styles['expense-date-day']}>
            {parsedDate.toLocaleString('en-US', { day: '2-digit' })}
          </div>
          <div className={styles['expense-date-month']}>
            {parsedDate.toLocaleString('en-US', { month: 'long' })}
          </div>
          <div className={styles['expense-date-year']}>
            {parsedDate.getFullYear()}
          </div>
        </>
      )}
    </section>
  );
}
