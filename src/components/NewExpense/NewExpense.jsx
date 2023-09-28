/* eslint-disable react/prop-types */
'use strict';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense({ expensesWithId }) {
  const onSubmitNoID = (userInput) => {
    const expenses = {
      ...userInput,
      id: ('e' + (4 + Math.random().toFixed())).toString(),
    };
    console.log('This is the expenses with unique id 👇');
    console.log(expenses);

    expensesWithId(expenses);
  };
  // *we should execute this function inside of ExpenseForm component
  // *For that we should send this function as a props

  return (
    <section className="new-expense">
      <ExpenseForm onSubmitNoID={onSubmitNoID} />
    </section>
  );
}
