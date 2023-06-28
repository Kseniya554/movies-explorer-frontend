import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  isOwner,
  isSavedMovies,
  onSave,
  onDelete,
  savedMovies,
  isLoading,
  onClick,
  limit,
}) {
  const arrayWith12Cards = movies.slice(0, 12);
  const location = useLocation();
  return (
    <>
      <section className='movies-section'>
        {arrayWith12Cards.map((cardMovie) => (
          <MoviesCard
            movie={cardMovie}
            key={cardMovie.id}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
          />
        ))}
        {/* {isLoading ? (
          <Preloader />
        ) : (
          movies?.map((movie, index, array) => {
            return (
              index < limit && (
                <MoviesCard
                  isSavedMovies={isSavedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
                  movie={movie}
                  savedMovies={savedMovies}
                  key={movie.movieId}
                />
              )
            );
          })
        )} */}
      </section>
      {!isOwner && movies.length > limit && (
        <section className='dop'>
          <button className='dop__button' onClick={onClick} type='button'>
            Ещё
          </button>
        </section>
      )}
      {location.pathname === '/saved-movies' && (
        <div className='dop-block'></div>
      )}
    </>
  );
}

export default MoviesCardList;
