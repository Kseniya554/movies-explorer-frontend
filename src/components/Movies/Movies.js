import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, isOwner }) {
  return (
    <section className='movies'>
      <Header />
      <SearchForm />
      {/* <MoviesCardList cardsMovie={cardsMovie} /> */}
      <MoviesCardList movies={movies} isOwner={isOwner} />
      <Footer />
    </section>
  );
}

export default Movies;
