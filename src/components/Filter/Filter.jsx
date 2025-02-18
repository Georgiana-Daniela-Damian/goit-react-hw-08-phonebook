import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => setFilter(e.target.value);

  return (
    <div className={style.divFilter}>
      <p className={style.label}>Find Contacts by Name</p>
      <input
        className={style.input}
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
