import React from 'react';
import './Portfolio.css';

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
            Статичный сайт<span className='portfolio__span'>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            href='https://github.com/Kseniya554/russian-travel'
            className='portfolio__link'
            rel='noreferrer'
            target='_blank'
          >
            Адаптивный сайт<span className='portfolio__span'>&#8599;</span>
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
            <span className='portfolio__span'>&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
