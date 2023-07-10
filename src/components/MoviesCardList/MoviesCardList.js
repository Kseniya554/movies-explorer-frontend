import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  isSavedMovie,
  onSave,
  onDelete,
  savedMovies,
  isLoading,
  onClick,
  limit,
}) {
  const location = useLocation();
  return (
    <>
      <section className='movies-section'>
        {isLoading ? (
          <Preloader />
        ) : (
          movies.map((movie, movieIndex) => {
            return (
              movieIndex < limit &&
              <MoviesCard
                isSavedMovie={isSavedMovie}
                movie={movie}                
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
                key={movie.movieId}
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
      )}
      {location.pathname === '/saved-movies' && (
        <div className='dop-block'></div>
      )}
    </>
  );
}

export default MoviesCardList;
