import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ movies, isLoading }) {
  return (
    <section className='saved-movies'>
      <Header />
      <SearchForm />
      {/* <MoviesCardList cardsMovie={cardsMovie} /> */}
      {isLoading ? (
        <Preloader />
      ) : (
      // <MoviesCardList movies={movies.slice()} isOwner={isOwner} />
      <MoviesCardList movies={movies} buttonType='delete' />
      )}
      <Footer />
    </section>
  );
}

export default SavedMovies;
