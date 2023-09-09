'use strict';
// import './ExpenseItem.css';
import styles from './ExpenseItem.module.css';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default function ExpenseItem(props) {
  // console.log(props);
  return (
    <div className={[styles['expense-item']]}>
      <div>{props.date.toUTCString()}</div>
      <div className={`${styles['expense-item-description']}`}>
        <h2>{props.title}</h2>
        <div className={[styles['expense-item-price']]}>${props.amount}</div>
      </div>
    </div>
  );
}
