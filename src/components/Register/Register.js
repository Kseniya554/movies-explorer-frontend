import './Register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/green-logo.svg';

function Register() {
  return (
    <div className='register'>
      <div className='register__header'>
        <Link to='/'>
          <img className='register__logo rotation' src={logo} alt='логотип-шестерёнка' />
        </Link>
      </div>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' noValidate>
        <label className='register__label'>
          <p className='register__title-input'>Имя</p>
          <input
            className='register__input'
            name='email'
            id='email'
            type='email'
            placeholder='Виталий'
            required
          />
          <span className='register__input-error'></span>
        </label>
        <label className='register__label'>
          <p className='register__title-input'>E-mail</p>
          <input
            className='register__input register__title-email'
            name='email'
            id='email'
            type='email'
            placeholder='pochta@yandex.ru'
            required
          />
          <span className='register__input-error'></span>
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
          />
          <span className='register__input-error'>Что-то пошло не так...</span>
        </label>
        <button className='register__button' type='submit'>
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
