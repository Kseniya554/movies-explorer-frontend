import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, isOwner }) {
  const arrayWith12Cards = movies.slice(0, 12); 
  const location = useLocation();
  return (    
    <>
      <section className='movies-section'>
        {arrayWith12Cards.map((cardMovie) => (
          <MoviesCard movie={cardMovie} key={cardMovie.id} />
        ))}
      </section>
      {!isOwner && (
        <section className='dop'>
          <button className='dop__button'>Ещё</button>
        </section>
      )}
      {location.pathname === '/saved-movies' && (
        <div className='dop-block'></div>
      )}
    </>
  );
}

export default MoviesCardList;
