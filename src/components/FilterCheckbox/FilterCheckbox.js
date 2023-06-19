import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className='filter-checkbox'>
      {/* <div className='filter-checkbox__container'> */}
        <label className='filter-checkbox__checkbox'>
          <input
            type='checkbox'
            // role='switch'
            className='filter-checkbox__checkbox-click'
            // id='light-switch'
          />
          <div className='filter-checkbox__checkbox-name'></div>
        </label>
      {/* </div> */}
      Короткометражки
    </section>
  );
}

export default FilterCheckbox;
