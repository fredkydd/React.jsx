'use strict';
import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm() {
  // !value is always a string even you declare the type of input number or date
  // const [enteredTitle, setEnteredTitle] = useState(''),
  //   titleHandler = (event) => {
  //     console.log(event.target.value);
  //     setEnteredTitle(event.target.value);
  //   },
  //   [enteredAmount, setEnteredAmount] = useState(''),
  //   amountHandler = (event) => {
  //     console.log('PLN ' + event.target.value);
  //     setEnteredAmount(event.target.value);
  //   },
  //   [enteredDate, setEnteredDate] = useState(''),
  //   dateHandler = (event) => {
  //     console.log(event.target.value);
  //     setEnteredDate(event.target.value);
  //   };

  // const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: '',
  //   }),
  //   titleHandler = (event) =>
  //     setUserInput({ ...userInput, title: event.target.value }),
  //   amountHandler = (event) =>
  //     setUserInput({ ...userInput, amount: event.target.value }),
  //   dateHandler = (event) =>
  //     setUserInput({ ...userInput, date: event.target.value });

  // *if you are depending previous snapshot use function form. Because React will not render them immadiately👇

  const [userInput, setUserInput] = useState({
      title: '',
      amount: '',
      date: '',
    }),
    titleHandler = (event) => {
      setUserInput((prevState) => {
        console.log(prevState);
        return { ...prevState, title: event.target.value };
      });
    },
    amountHandler = (event) => {
      setUserInput((prevState) => {
        console.log(prevState);
        return { ...prevState, amount: event.target.value };
      });
    },
    dateHandler = (event) => {
      setUserInput((prevState) => {
        console.log(prevState);
        return { ...prevState, date: event.target.value };
      });
    };
  console.log(userInput);

  // *Shared Function()
  // const [enteredTitle, setEnteredTitle] = useState(''),
  //   [enteredAmount, setEnteredAmount] = useState(''),
  //   [enteredDate, setEnteredDate] = useState(''),
  //   inputChangeHandler = (identifier, value) => {
  //     identifier === 'title'
  //       ? setEnteredTitle(value) +
  //         console.log(`enteredTitle: ${enteredTitle}\n value: ${value}`)
  //       : identifier === 'amount'
  //       ? setEnteredAmount(value) +
  //         console.log(`enteredTitle: ${enteredAmount}\n value: ${value}`)
  //       : identifier === 'date'
  //       ? setEnteredDate(value) +
  //         console.log(`enteredTitle: ${enteredDate}\n value: ${value}`)
  //       : console.log(
  //           `There's a problem: \nidentifier: ${identifier}\nvalue: ${value}`
  //         );
  //   };

  return (
    <>
      <form>
        <div className="new-expense-controls">
          <div className="new-expense-control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              required
              placeholder="add your title here 😒"
              onChange={titleHandler}
              // onChange={(event) =>
              //   inputChangeHandler('title', event.target.value)
              // }
            />
          </div>
          <div className="new-expense-control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              placeholder="min amount $0.01 🫰🏻"
              min="0.01"
              step="0.01"
              required
              onChange={amountHandler}
              // onChange={(event) =>
              //   inputChangeHandler('amount', event.target.value)
              // }
            />
          </div>
          <div className="new-expense-control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateHandler}
              // onChange={(event) =>
              //   inputChangeHandler('date', event.target.value)
              // }
            />
          </div>
        </div>
        <div className="new-expense-actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}
