import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Фильтр
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
