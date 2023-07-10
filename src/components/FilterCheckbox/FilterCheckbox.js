import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onClick, checkbox }) {
  return (
    <section className='filter-checkbox'>
      {/* <div className='filter-checkbox__container'> */}
        <label className='filter-checkbox__checkbox'>
          <input
            type='checkbox'
            className='filter-checkbox__checkbox-click'
            onChange={(e) => onClick(e.target.checked)}
            checked={checkbox}
          />
          <div className='filter-checkbox__checkbox-name'></div>
        </label>
      {/* </div> */}
      Короткометражки
    </section>
  );
}

export default FilterCheckbox;
