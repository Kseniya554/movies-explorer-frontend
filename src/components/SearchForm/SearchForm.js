import React, { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../utils/Validation';

function SearchForm({
  handleSearch,
  handleCheckboxClick,
  searchRequest,
  checkbox,
}) {
  const { errors, values, isValid, handleChange, resetValidation } =
  useValidation();
  const { movietitle } = values;

  useEffect(() => {
    resetValidation({ movietitle: searchRequest });
  }, [searchRequest]);

  function handleSearchFormClick(e) {
    e.preventDefault();
    handleSearch(movietitle);
  }
  return (
    <section className='search-form'>
      <form
        className='search-form__form'
        onSubmit={handleSearchFormClick}
        noValidate
      >
        <div className='search-form__input-block'>
          <input
            className='search-form__input'
            type='text'
            placeholder='        Фильм'
            required
            minLength='1'
            onChange={handleChange}
            value={values.movietitle || ''}
            name='movietitle'
          />
          <button
            className={`search-form__button`}
            type='submit'
          />
          {/* <span
            className={`search-form__input-error ${
              errors.movietitle
                ? 'search-form__input-error_active'
                : ''
            }`} */}
          {/* ></span> */}
        </div>
        <FilterCheckbox
          onClick={handleCheckboxClick}
          checkbox={checkbox}
        />
      </form>
    </section>
  );
}

export default SearchForm;