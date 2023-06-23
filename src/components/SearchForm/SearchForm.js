import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import search from '../../images/find.svg'

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__input-block'>
          <input
            className='search-form__input'
            type='text'
            placeholder='        Фильм'
            required
            minLength='2'
          />
          <button className='search-form__button' />
          <span className='search-form__input-error'></span>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
