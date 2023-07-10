import React, { useState } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import burgerButton from '../../images/burger-menu.svg';
import closeButton from '../../images/close.svg';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className='navigation'>
      {location.pathname === '/' && (
        <div className='navigation__start'>
          <Link to='/signup' className='navigation__link-main'>
            <button className='navigation__button'>Регистрация</button>
          </Link>
          <Link to='/signin' className='navigation__link-main'>
            <button className='navigation__button-enter'>Войти</button>
          </Link>
        </div>
      )}
      {location.pathname === '/movies' && (
        <section className={ isMenuOpen ? 'navigation__bacground' : 'navigation__bacground_none' }>
        <div
          className={
            isMenuOpen
              ? ['navigation__movies', 'navigation__movies_active'].join(' ')
              : 'navigation__movies'
          }
        >
          <div className='navigation__links'>
            <Link
              className={
                isMenuOpen
                  ? ['navigation__main-link']
                  : ['navigation__main-link_disabled']
              }
              to='/'
            >
              Главная
            </Link>
            <Link
              className='navigation__link navigation__link-film'
              to='/movies'
            >
              Фильмы
            </Link>
            <Link className='navigation__link' to='/saved-movies'>
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            to='/profile'
            className='navigation__link navigation__link-profile'
          >
            Аккаунт
          </Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='burger-menu'
        >
          {isMenuOpen ? (
            <img
              className='burger-menu__button burger-menu__button-close'
              src={closeButton}
              alt='крестик'
            />
          ) : (
            <img
              className='burger-menu__button'
              src={burgerButton}
              alt='иконка меню'
            />
          )}
        </div>
      </section>
      )}
      {location.pathname === '/saved-movies' && (
        <section className={ isMenuOpen ? 'navigation__bacground' : 'navigation__bacground_none' }>
          <div
            className={
              isMenuOpen
                ? ['navigation__movies', 'navigation__movies_active'].join(' ')
                : 'navigation__movies'
            }
          >
            <div className='navigation__links'>
              <Link
                className={
                  isMenuOpen
                    ? ['navigation__main-link']
                    : ['navigation__main-link_disabled']
                }
                to='/'
              >
                Главная
              </Link>
              <Link
                className='navigation__link navigation__link-film'
                to='/movies'
              >
                Фильмы
              </Link>
              <Link className='navigation__link' to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </div>
            <Link
              to='/profile'
              className='navigation__link navigation__link-profile'
            >
              Аккаунт
            </Link>
          </div>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='burger-menu'
          >
            {isMenuOpen ? (
              <img
                className='burger-menu__button burger-menu__button-close'
                src={closeButton}
                alt='крестик'
              />
            ) : (
              <img
                className='burger-menu__button'
                src={burgerButton}
                alt='иконка меню'
              />
            )}
          </div>
        </section>
      )}
      {location.pathname === '/profile' && (
        <section className={ isMenuOpen ? 'navigation__bacground' : 'navigation__bacground_none' }>
          <div
            className={
              isMenuOpen
                ? ['navigation__movies', 'navigation__movies_active'].join(' ')
                : 'navigation__movies'
            }
          >
            <div className='navigation__links'>
              <Link
                className={
                  isMenuOpen
                    ? ['navigation__main-link']
                    : ['navigation__main-link_disabled']
                }
                to='/'
              >
                Главная
              </Link>
              <Link
                className='navigation__link navigation__link-film'
                to='/movies'
              >
                Фильмы
              </Link>
              <Link className='navigation__link' to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </div>
            <Link
              to='/profile'
              className='navigation__link navigation__link-profile'
            >
              Аккаунт
            </Link>
          </div>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='burger-menu'
          >
            {isMenuOpen ? (
              <img
                className='burger-menu__button burger-menu__button-close'
                src={closeButton}
                alt='крестик'
              />
            ) : (
              <img
                className='burger-menu__button'
                src={burgerButton}
                alt='иконка меню'
              />
            )}
          </div>
        </section>
      )}
    </nav>
  );
}

export default Navigation;
