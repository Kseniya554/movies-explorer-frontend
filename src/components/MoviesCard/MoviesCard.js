import React from 'react';
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
// import saveButton from '../../images/save.svg';
// import deleteButton from '../../images/deleteButton.svg';
import durationMovie from '../../utils/Duration';

function MoviesCard({ movie, isSavedMovie, onSave, onDelete, savedMovie }) {
  const { nameRU, image,  duration } = movie;
  const convertedDuration = durationMovie(duration);
  const location = useLocation();

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
            className={
              isSavedMovie
                ? 'movies-card__button_active'
                : 'movies-card__button'
            }
            name='movies-card__save-button'
            type='button'
            // onClick={onSave}
            onClick={() => {
              isSavedMovie ? onDelete(movie._id ? movie._id : savedMovie) : onSave(movie);
            }}
          >
            {/* <img
            className='movies-card__icon'
            src={saveButton}
            alt='сохранить'
          ></img> */}
          </button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
            className='movies-card__button movies-card__button-delete'
            name='movies-card__delete-button'
            type='button'
            onClick={() => {
              isSavedMovie
                ? onDelete(movie._id ? movie._id : likedId)
                : onSave(movie);
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
