import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
// import buttonProfile from '../../images/profile.svg';

function Navigation() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleMenuClick = () => setIsMenuOpen(true);
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
        <div className='navigation__movies'>
          <div className='navigation__links'>
            <Link className='navigation__link' to='/movies'>
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
          {/* <div className='navigation__burger'>
            <span></span>
          </div> */}
          {/* <button
            className='navigation__burger'
            onClick={handleMenuClick}
          /> */}
        </div>
      )}
      {location.pathname === '/saved-movies' && (
        <div className='navigation__movies navbar'>
          <div className='navigation__links'>
            <Link className='navigation__link' to='/movies'>
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
      )}
    </nav>
  );
}

export default Navigation;
