'use strict';
import { useState } from 'react';
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

  // *useState() is a function that rerender the component when it's triggered by the predefined react functions
  // *we cant change value same ad we changing in Javascript
  // *React components are just functions and they called only once that why React invented special useState() function to change data dynamically and only recall the cfunction where it's belong not the whole page !!

  const [customTitle, setCustomTitle] = useState(title),
    titleHandler = (x) => {
      console.log(x.currentTarget);
      console.log('Clicked');
      setCustomTitle('Changed!!!');
    };

  return (
    <Card className={[styles['expense-item']]}>
      <ExpenseDate date={date} />
      {/* <div>{date.toUTCString()}</div> */}
      {/* <div>{props.date.toUTCString()}</div> */}
      {/* <div>{props.expense.date.toUTCString()}</div> */}
      <div className={`${styles['expense-item-description']}`}>
        <h2>{customTitle}</h2>
        {/* <h2>{props.title}</h2> */}
        {/* <h2>{props.expense.title}</h2> */}
        <div className={[styles['expense-item-price']]}>${amount}</div>
        {/* <div className={[styles['expense-item-price']]}>${props.amount}</div> */}
        {/* <div className={[styles['expense-item-price']]}>
          ${props.expense.amount}
        </div> */}
      </div>

      <button onClick={titleHandler}>Click Me!</button>
    </Card>
  );
}
// *props starts with lowercase 'on' it means they are React ready event handler functions and they need function to execute. 4 example: onClick()
// *and you need to pass function via these props
// *<button onClick={() => console.log('Clicked!!!')}>Click Me!</button> 👇
// *document.querySelector('button').addEventListener('click', () => console.log('Clicked!!!'));
