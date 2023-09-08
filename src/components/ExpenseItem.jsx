'use strict';
// import './ExpenseItem.css';
import styles from './ExpenseItem.module.css';
// import styled from 'styled-components';

export default function ExpenseItem() {
  return (
    <div className={[styles['expense-item']]}>
      <div>March 28th, 2021</div>
      <div className={[styles['expense-item-description']]}>
        <h2>Car Insurance</h2>
        <div className={[styles['expense-item-price']]}>699.99$</div>
      </div>
    </div>
  );
}
