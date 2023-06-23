import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/green-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  // const [login, setLogin] = React.useState();
  // const [authorized, setAuthorized] = React.useState();

  // React.useEffect(() => {

  // })
  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__logo rotation'
          src={logo}
          alt='логотип-шестерёнка'
        />
      </Link>
      <Navigation />
    </header>
  );
}
export default Header;
