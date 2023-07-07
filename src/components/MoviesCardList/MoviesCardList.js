import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  isOwner,
  isSavedMovie,
  onSave,
  onDelete,
  savedMovies,
  isLoading,
  onClick,
  limit,
}) {
  const location = useLocation();
    // Скрытие кнопки "Ещё" после отображения всех карточек
  // const cards = document.querySelectorAll('.card');
  // const moreButton = document.querySelector('.dop__button');

  // function hideMoreButton() {
  // if (movies.length === 0) {
  // moreButton.style.display = 'none';
  // }
  // }
  return (
    <>
      <section className='movies-section'>
        {isLoading ? (
          <Preloader />
        ) : (
          movies?.map((movie, length, array) => {
            // console.log(movies)
            return (
              length < limit &&
              <MoviesCard
                isSavedMovie={isSavedMovie}
                movie={movie}
                key={movie.movieId}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
              />
            );
          })
        )}
      </section>
      {(movies.length > limit) && (
        <section className='dop'>
          <button className='dop__button' onClick={onClick} type='button'>
            Ещё
          </button> 
        </section>
      )}console.log('dop__button')
      {location.pathname === '/saved-movies' && (
        <div className='dop-block'></div>
      )}
    </>
  );
}

export default MoviesCardList;
