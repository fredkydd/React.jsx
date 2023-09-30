/* eslint-disable react/prop-types */
'use strict';
import { useState } from 'react';
import './ExpenseFilter.css';

export default function ExpensesFilter({ selectedYearProps }) {
  const [selected, setSelected] = useState(2023),
    years = [2023, 2022, 2021, 2020],
    selectHandler = (event) => {
      setSelected(event.target.value);

      selectedYearProps(Number.parseInt(event.target.value));
    };

  return (
    <section className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filter by years</label>
        <select value={selected} onChange={selectHandler}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
