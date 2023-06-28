import './Profile.css';
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import validation from '../../utils/Validation';

function Profile({ onUpdateUserInfo, signOut, isLoading, errorMessage }) {
  const currentUser = useContext(CurrentUserContext);
  const { errors, values, isValid, handleChange, resetValidation } =
    validation();
  const { email, name } = values;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    resetValidation({ email: currentUser.email, name: currentUser.name });
  }, [currentUser]);

  useEffect(() => {
    let isActiveButton = (currentUser.name !== values.name) || (currentUser.email !== values.email);
    setIsDisabled(isActiveButton);
  }, [values, currentUser, isValid])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUserInfo({ email, name });
  }
  return (
    <form className='profile' onSubmit={handleSubmit} noValidate>
      <Header />
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <fieldset className='profile__fieldset'>
        <label className='profile__label profile__label-top'>
          <p className='profile__name'>Имя</p>
          <input
            className='profile__input'
            type='text'
            placeholder={currentUser.name}
            value={values.name || ''}
            onChange={handleChange}
            minLength='2'
            name='name'
          />
        </label>
        <label className='profile__label'>
          <p className='profile__name'>E-mail</p>
          <input
            className='profile__input'
            type='email'
            placeholder={currentUser.email}
            required
            name='email'
            value={values.email || ''}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <div className='profile__links'>
        <button
          className={`profile__link profile__button ${!isValid && errors ? 'profile__button_disabled' : ''}`}
          disabled={!isValid || !isDisabled}
          type='submit'
        >
          Редактировать
        </button>
        <Link
          to='/'
          className='profile__link profile__link-exit'
          onClick={signOut}
        >
          Выйти из аккаунта
        </Link>
      </div>
    </form>
  );
}

export default Profile;
