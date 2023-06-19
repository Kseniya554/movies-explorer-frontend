import React from 'react';
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
import saveButton from '../../images/save.svg';
import deleteButton from '../../images/deleteButton.svg';

function MoviesCard({ movie }) {
  // const { image, nameRU, duration } = movie;
  const image = `https://api.nomoreparties.co/${movie.image.url}`;
  const location = useLocation();
  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <figcaption className='movies-card__figcaption'>
          <h3 className='movies-card__title'>{movie.nameRU}</h3>
          <p className='movies-card__duration'>{movie.duration}</p>
        </figcaption>
        <img className='movies-card__image' src={image} alt={movie.nameRU} />
        {location.pathname === '/movies' && (
        <button
          className='movies-card__button movies-card__button-active'
          name='movies-card__save-button'
          type='button'
        >
          {/* <img
            className='movies-card__icon'
            src={saveButton}
            alt='сохранить'
          ></img> */}
        </button>)}
        {location.pathname === '/saved-movies' && (
        <button
          className='movies-card__button movies-card__button-delete'
          name='movies-card__delete-button'
          type='button'
        >
          {/* <img
            className='movies-card__icon'
            src={deleteButton}
            alt='удалить'
          ></img> */}
        </button>)}
      </div>
    </article>
  );
}

export default MoviesCard;
