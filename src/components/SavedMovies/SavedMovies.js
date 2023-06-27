import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies, isOwner }) {
  return (
    <section className='saved-movies'>
      <Header />
      <SearchForm />
      {/* <MoviesCardList cardsMovie={cardsMovie} /> */}
      <MoviesCardList movies={movies.slice(0, 3)} isOwner={isOwner} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
