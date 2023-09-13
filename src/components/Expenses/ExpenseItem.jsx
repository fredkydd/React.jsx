'use strict';
// import './ExpenseItem.css';
import styles from './ExpenseItem.module.css';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

// *getting data individually from object
ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

// *getting the whole object
// ExpenseItem.propTypes = {
//   expense: PropTypes.shape({
//     date: PropTypes.instanceOf(Date).isRequired,
//     title: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default function ExpenseItem(props){}

// *Destructuting Object {date, title, amount} 👇  { date, title, amount } = { props }
export default function ExpenseItem({ date, title, amount }) {
  // console.log(props);

  return (
    <Card className={[styles['expense-item']]}>
      <ExpenseDate date={date} />
      {/* <div>{date.toUTCString()}</div> */}
      {/* <div>{props.date.toUTCString()}</div> */}
      {/* <div>{props.expense.date.toUTCString()}</div> */}
      <div className={`${styles['expense-item-description']}`}>
        <h2>{title}</h2>
        {/* <h2>{props.title}</h2> */}
        {/* <h2>{props.expense.title}</h2> */}
        <div className={[styles['expense-item-price']]}>${amount}</div>
        {/* <div className={[styles['expense-item-price']]}>${props.amount}</div> */}
        {/* <div className={[styles['expense-item-price']]}>
          ${props.expense.amount}
        </div> */}
      </div>
    </Card>
  );
}
