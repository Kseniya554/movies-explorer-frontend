import React from 'react';
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
import durationMovie from '../../utils/Duration';

function MoviesCard({ isSavedMovie, movie, savedMovies, onSave, onDelete }) {
  const { nameRU, image, duration } = movie;
  const convertedDuration = durationMovie(duration);
  const location = useLocation();

  let isClick = false;
  let clickId;
  isClick = savedMovies.some((savedMovie) => {
    if (savedMovie.movieId === movie.movieId) {
      clickId = savedMovie._id;
      return true;
    }
  })
  const cardSaveButtonClassName = ( 
    `movies-card__button ${isClick && 'movies-card__button_active'}`
  );

  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <figcaption className='movies-card__figcaption'>
          <h3 className='movies-card__title'>{nameRU}</h3>
          <p className='movies-card__duration'>{convertedDuration}</p>
        </figcaption>
        <a className='movies-card__link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
          <img
            className='movies-card__image'
            src={image}
            alt={nameRU}
          /> 
        </a>

        {location.pathname === '/movies' && (
          <button
            className={cardSaveButtonClassName}
            name='movies-card__save-button'
            type='button'            
            onClick={() => {
              isClick || isSavedMovie ? onDelete(movie._id ? movie._id : clickId) : onSave(movie);
            }}
          >            
          </button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
            className='movies-card__button movies-card__button-delete'
            name='movies-card__delete-button'
            type='button'
            onClick={() => {
              isSavedMovie = onDelete(movie._id);
            }}
          >
            {/* <img
            className='movies-card__icon'
            src={deleteButton}
            alt='удалить'
          ></img> */}
          </button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
