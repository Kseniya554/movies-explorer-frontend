import React from 'react';
import './Portfolio.css';
import up from '../../images/up.svg';
import upMini from '../../images/up320.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__work'>
          <a
            href='https://github.com/Kseniya554/first-project'
            className='portfolio__link'
            rel='noreferrer'
            target='_blank'
          >
            Статичный сайт
            <p className='portfolio__span'></p>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            href='https://github.com/Kseniya554/russian-travel'
            className='portfolio__link'
            rel='noreferrer'
            target='_blank'
          >
            Адаптивный сайт
            <p className='portfolio__span'> </p>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            href='https://github.com/Kseniya554/react-mesto-api-full-gha'
            className='portfolio__link'
            rel='noreferrer'
            target='_blank'
          >
            Одностраничное приложение
            <p className='portfolio__span'> </p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
