import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Profile() {
  return (
    <section className='profile'>
      <Header />
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <fieldset className='profile__fieldset'>
        <label className='profile__label profile__label-top'>
          <p className='profile__name'>Имя</p>
          <input
            className='profile__input'
            type='text'
            placeholder='Виталий'
            required
          />
        </label>
        <label className='profile__label'>
          <p className='profile__name'>E-mail</p>
          <input
            className='profile__input'
            type='email'
            placeholder='pochta@yandex.ru'
            required
          />
        </label>
      </fieldset>
      <div className='profile__links'>
        <Link to='/' className='profile__link'>
          Редактировать
        </Link>
        <Link to='/' className='profile__link profile__link-exit'>
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
