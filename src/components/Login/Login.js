import './Login.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/green-logo.svg';
import Preloader from '../Preloader/Preloader';
import validation from '../../utils/Validation';

function Login({ ...props }) {
  const { errors, values, isValid, handleChange, resetValidation } =
    validation();

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onLoginUserData({
      email: values.email,
      password: values.password,
    });
  }
  return (
    <div className='login'>
      <div className='login__header'>
        <Link to='/'>
          <img
            className='login__logo rotation'
            src={logo}
            alt='логотип-шестерёнка'
          />
        </Link>
      </div>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit} noValidate>
        {props.isLoading ? <Preloader /> : ''}
        <label className='login__label'>
          <p className='login__title-input'>E-mail</p>
          <input
            className='login__input'
            name='email'
            id='email'
            type='email'
            placeholder='email'
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span
            className={`login__input-error ${
              !isValid && errors.email ? 'login__input-error_active' : ''
            }`}
          >
            {errors.email || ''}
          </span>
        </label>
        <label className='login__label'>
          <p className='login__title-input'>Пароль</p>
          <input
            className='login__input'
            name='password'
            id='password'
            type='password'
            placeholder=''
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span
            className={`login__input-error ${
              !isValid && errors.password ? 'login__input-error_active' : ''
            }`}
          >
            {errors.password || ''}
          </span>
        </label>
        <button className={`login__button ${
            !isValid && errors ? 'login__button_disabled' : ''
          }`} type='submit' disabled={!isValid}>
          Войти
        </button>
        <div className='login__register'>
          <p className='login__register-text'>Ещё не зарегистрированы?</p>
          <Link className='login__register-link' to='/signup'>
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
