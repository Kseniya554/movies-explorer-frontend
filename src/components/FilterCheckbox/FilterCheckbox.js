import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className='filter-checkbox'>
        <label className='filter-checkbox__checkbox'>
          <input
            type='checkbox'
            // role='switch'
            className='filter-checkbox__checkbox-click'
            // id='light-switch'
          />
          <div className='filter-checkbox__checkbox-name'></div>
        </label>
      Короткометражки
    </section>
  );
}

export default FilterCheckbox;
