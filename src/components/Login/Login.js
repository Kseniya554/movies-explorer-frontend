import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/green-logo.svg';

function Login() {
  return (
    <div className='login'>
      <div className='login__header'>
        <Link to='/'>
          <img className='login__logo rotation' src={logo} alt='логотип-шестерёнка' />
        </Link>
      </div>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' noValidate>
        <label className='login__label'>
          <p className='login__title-input'>E-mail</p>
          <input
            className='login__input'
            name='email'
            id='email'
            type='email'
            placeholder='pochta@yandex.ru'
            required
          />
          <span className='login__input-error'></span>
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
          />
          <span className='login__input-error'></span>
        </label>
        <button className='login__button' type='submit'>
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
