'use strict';
import styles from './Expenses.module.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// *i've to use props.expenses here for React  { expenses: [ ...{} ] }
// *whatever you pass via props it gives you an object {} so that's why i got expenses as a object here instead of an array
// *When you pass an array (or any other data type) as a prop to a functional component, React wraps it in an object where
// !the prop name you provided becomes the key(expenses), and the value is the array (or data) you passed { expenses: [ ...{} ] }
// export default function Expenses(props) {}

export default function Expenses({ expenses }) {
  return (
    <Card className={styles['expenses']}>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
