import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { SHORT_FILM } from '../../constants/constants';
import {
  MOVIES_12,
  MOVIES_8,
  MOVIES_5,
  MOVIES_3_ADD,
  MOVIES_2_ADD,
  WIDTH_3_MOVIES,
  WIDTH_2_MOVIES,
} from '../../constants/constants';
import useWindowWidth from '../../utils/Width';

function SavedMovies({ movie, initialMovies, onSave, onDelete, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [shotMovies, setShotMovies] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltiptext, setInfoTooltiptext] = useState('');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [moviesToInitialRender, setMoviesToInitialRender] = useState({
    current: 0,
    next: 0,
  });
  const { width } = useWindowWidth();
  // console.log(movies)

  useEffect(() => {
    setFoundMovies(initialMovies);
  }, []);

  useEffect(() => {
    searchMoviesHandler();
    filterShotMoviesHandler();
  }, [searchRequest, isCheckboxActive]);

  useEffect(() => {
    resize();
  }, [width]);

  async function searchMoviesHandler() {
    setIsLoading(true);
    try {
      if (searchRequest.length > 0) {
        const moviesToRender = await handleSearch(initialMovies, searchRequest);
        if (moviesToRender.length === 0) {
          setInfoTooltiptext(MOVIES_NOT_FOUND);
          setInfoTooltipPopupOpen(true);
        } else {
          setFoundMovies(moviesToRender);
        }
      }
      return;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      const a = keyword.toLowerCase().trim();
      return (
        movie.nameRU.toLowerCase().indexOf(a) !== -1 ||
        movie.nameEN.toLowerCase().indexOf(a) !== -1
      );
    });
  }

  function handleFilter(moviesArray) {
    return moviesArray.filter((movie) => {
      return movie.duration <= SHORT_FILM;
    });
  }

  function filterShotMoviesHandler() {
    setShotMovies(handleFilter(foundMovies));
  }

  function handleCheckboxClick(value) {
    setIsCheckboxActive(value);
  }

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function resize() {
    if (width >= WIDTH_3_MOVIES) {
      setMoviesToInitialRender({
        current: MOVIES_12,
        next: MOVIES_3_ADD,
      });
    } else if (width < WIDTH_2_MOVIES) {
      setMoviesToInitialRender({
        current: MOVIES_5,
        next: MOVIES_2_ADD,
      });
    } else {
      setMoviesToInitialRender({
        current: MOVIES_8,
        next: MOVIES_2_ADD,
      });
    }
  }

  function handleMoreClick() {
    setMoviesToInitialRender({
      current: moviesToInitialRender.current + moviesToInitialRender.next,
      next: moviesToInitialRender.next,
    });
  }
// console.log(key);
  return (
    <section className='saved-movies'>
      <Header />
      <SearchForm
        handleSearch={setSearchRequest}
        handleCheckboxClick={handleCheckboxClick}
        searchRequest={searchRequest}
        checkboxState={isCheckboxActive}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        // <MoviesCardList movies={movies.slice()} isOwner={isOwner} />
        <MoviesCardList
          movies={ 
            !searchRequest
              ? isCheckboxActive
                ? shotMovies
                : initialMovies
              : isCheckboxActive
              ? shotMovies
              : foundMovies
          }
          isLoading={isLoading}
          // buttonType='delete'
          onClick={handleMoreClick}
          limit={moviesToInitialRender.current}
          isSavedMovie={true}
          onSave={onSave}
          onDelete={onDelete}
          savedMovies={savedMovies}
          // key={movie.id}
        />
      )}
      <Footer />
    </section>
  );
}

export default SavedMovies;
