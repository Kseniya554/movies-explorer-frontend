import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import {
  MOVIES_12,
  MOVIES_8,
  MOVIES_5,
  MOVIES_3_MORE,
  MOVIES_2_MORE,
  WIDTH_1020,
  WIDTH_690,
  SHORT_FILM,
} from '../../constants/constants';
import useWindowWidth from '../../utils/Width';

function Movies({ initialMovies, onSave, onDelete, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltipText, setInfoTooltipText] = useState('');
  const [shotMovies, setShotMovies] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [moviesToInitialRender, setMoviesToInitialRender] = useState({
    current: 0,
    next: 0,
  });
  const { width } = useWindowWidth();

  useEffect(() => {
    searchMoviesHandler();
    filterShotMoviesHandler();
  }, [searchRequest, isCheckboxActive]);

  useEffect(() => {
    checkLastRequest();
  }, []);

  useEffect(() => {
    resize();
  }, [width]);

  function filterShotMoviesHandler() {
    setShotMovies(handleFilter(foundMovies));
  }

  function handleFilter(movies) {
    return movies.filter((movie) => {
      return movie.duration <= SHORT_FILM;
    });
  }

  async function searchMoviesHandler() {
    setIsLoading(true);
    setFoundMovies([]);
    try {
      if (searchRequest.length > 0) {
        const moviesToRender = await handleSearch(initialMovies, searchRequest);
        if (moviesToRender.length === 0) {
          setInfoTooltipText('Не найдено');
          setInfoTooltipPopupOpen(true);
        } else {
          setRequestToLocalStorage('lastRequest', searchRequest);
          setRequestToLocalStorage('moviesLastRequest', moviesToRender);
          setFoundMovies(moviesToRender);
          setRequestToLocalStorage('checkbox', isCheckboxActive);
        }
      }
      return;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(movies, keyword) {
    return movies.filter((movie) => {
      const a = keyword.toLowerCase().trim();
      return (
        movie.nameRU.toLowerCase().indexOf(a) !== -1 ||
        movie.nameEN.toLowerCase().indexOf(a) !== -1
      );
    });
  }

  function setRequestToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function checkLastRequest() {
    const lastMovies = localStorage.getItem('moviesLastRequest');
    if (lastMovies) {
      setFoundMovies(getLastRequestFromLocalStorage('moviesLastRequest'));
    }
    const lastRequestedKeyword = localStorage.getItem('lastRequest');
    if (lastRequestedKeyword) {
      setSearchRequest(getLastRequestFromLocalStorage('lastRequest'));
    }
    const lastRequestedCheckbox = localStorage.getItem('checkbox');
    if (lastRequestedCheckbox) {
      setIsCheckboxActive(getLastRequestFromLocalStorage('checkbox'));
    }
    return;
  }

  function getLastRequestFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function handleCheckboxClick(value) {
    setIsCheckboxActive(value);
  }

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  function resize() {
    if (width >= WIDTH_1020) {
      setMoviesToInitialRender({
        current: MOVIES_12,
        next: MOVIES_3_MORE,
      });
    } else if (width < WIDTH_690) {
      setMoviesToInitialRender({
        current: MOVIES_5,
        next: MOVIES_2_MORE,
      });
    } else {
      setMoviesToInitialRender({
        current: MOVIES_8,
        next: MOVIES_2_MORE,
      });
    }
  }

  function handleMoreClick() {
    setMoviesToInitialRender({
      current: moviesToInitialRender.current + moviesToInitialRender.next,
      next: moviesToInitialRender.next,
    });
  }

  return (
    <section className='movies'>
      <Header />
      <SearchForm
        handleSearch={setSearchRequest}
        handleCheckboxClick={handleCheckboxClick}
        searchRequest={searchRequest}
        checkbox={isCheckboxActive}
      />
      {/* <MoviesCardList cardsMovie={cardsMovie} /> */}
      <MoviesCardList
        // movies={movies} isOwner={isOwner}
        movies={isCheckboxActive ? shotMovies : foundMovies}
        isLoading={isLoading}
        onClick={handleMoreClick}
        limit={moviesToInitialRender.current}
        isSavedMovie={false}
        onSave={onSave}
        onDelete={onDelete}
        savedMovies={savedMovies}
      />
      {/* <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        title={infoTooltipText}
        onClose={closeAllPopups}
        // onOverlayClick={handleOverlayClick}
        image={errorImg}
      /> */}
      <Footer />
    </section>
  );
}

export default Movies;
