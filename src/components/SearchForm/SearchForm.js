import React, { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import search from '../../images/find.svg'
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
  // console.log(values);


  useEffect(() => {
    resetValidation({ movietitle: searchRequest });
  }, [searchRequest]);

  function handleSearchFormClick(e) {
    e.preventDefault();
    handleSearch(movietitle);
  }
  // console.log(movietitle);
  // console.log(handleSearch)
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
          {/* <span
            className={`search-form__input-error ${
              !isValid && errors.movietitle
                ? 'search-form__input-error_active'
                : ''
            }`}
          ></span> */}
          <button
            className={`search-form__button ${
              !isValid && errors ? 'search-form__button_disabled' : ''
            }`}
            type='submit'
            disabled={!isValid}
          />
          <span
            className={`search-form__input-error ${
              !isValid && errors.movietitle
                ? 'search-form__input-error_active'
                : ''
            }`}
          ></span>
          {/* <span className='search-form__input-error'></span> */}
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
