import './Register.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/green-logo.svg';
import Preloader from '../Preloader/Preloader';
import useValidation from '../../utils/Validation';

function Register({ ...props }) {
  const { errors, values, isValid, handleChange, resetValidation } =
  useValidation();

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegisterUserData({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  }
  return (
    <div className='register'>
      <div className='register__header'>
        <Link to='/'>
          <img
            className='register__logo rotation'
            src={logo}
            alt='логотип-шестерёнка'
          />
        </Link>
      </div>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit} noValidate>
        {props.isLoading ? <Preloader /> : ''}
        <label className='register__label'>
          <p className='register__title-input'>Имя</p>
          <input
            className='register__input'
            name='name'
            id='name'
            type='text'
            placeholder='Имя'
            required
            value={values.name || ''}
            onChange={handleChange}
            minLength='2'
            maxLength='30'
          />
          <span
            className={`register__input-error ${
              !isValid && errors.name ? 'register__input-error_active' : ''
            }`}
          >
            {errors.name || ''}
          </span>
        </label>
        <label className='register__label'>
          <p className='register__title-input'>E-mail</p>
          <input
            className='register__input register__title-email'
            name='email'
            id='email'
            type='email'
            placeholder='email'
            required
            value={values.email || ''}
            onChange={handleChange}
            pattern="^[A-Za-z0-9_.+\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-.]+$"
          />
          <span
            className={`register__input-error ${
              !isValid && errors.email ? 'register__input-error_active' : ''
            }`}
          >
            {errors.email || ''}
          </span>
        </label>
        <label className='register__label'>
          <p className='register__title-input'>Пароль</p>
          <input
            className='register__input'
            name='password'
            id='password'
            type='password'
            placeholder=''
            required
            value={values.password || ''}
            onChange={handleChange}
            minLength='7'
          />
          <span
            className={`register__input-error ${
              !isValid && errors.password ? 'register__input-error_active' : ''
            }`}
          >
            {errors.password || ''}
          </span>
        </label>
        <button
          className={`register__button ${
            !isValid && errors ? 'register__button_disabled' : ''
          }`}
          type='submit'
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <div className='register__register'>
          <p className='register__register-text'>Уже зарегистрированы?</p>
          <Link className='register__register-link' to='/signin'>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
