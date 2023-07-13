import React, { useState, useEffect, useCallback } from 'react';
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
  MOVIES_3_MORE,
  MOVIES_2_MORE,
  WIDTH_1020,
  WIDTH_690,
} from '../../constants/constants';
import useWindowWidth from '../../utils/Width';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import imageError from '../../images/Error.svg';

function SavedMovies({ initialMovies, onSave, onDelete, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltipText, setInfoTooltipText] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [shotMovies, setShotMovies] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [moviesToInitialRender, setMoviesToInitialRender] = useState({
    current: 0,
    next: 0,
  });
  const { width } = useWindowWidth();

  useEffect(() => {
    setFoundMovies(initialMovies);
  }, [])

  useEffect(() => {
    searchMoviesHandler();
    filterShotMoviesHandler();
  }, [searchRequest, isCheckboxActive]);

  useEffect(() => {
    resize()
  }, [width]);

  async function searchMoviesHandler() {
    setIsLoading(true);
    try {
      if(searchRequest.length > 0) {
        const moviesToRender = await handleSearch(initialMovies, searchRequest);
        if(moviesToRender.length === 0) {
          setInfoTooltipText('Не найдено');
          setInfoTooltipPopupOpen(true);
        } else {
          setFoundMovies(moviesToRender);
        }
      }
      return
    } catch(err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      const a = keyword.toLowerCase().trim();
      return movie.nameRU.toLowerCase().indexOf(a) !== -1 ||
      movie.nameEN.toLowerCase().indexOf(a) !== -1
    })
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

  function closePopup() {
    setInfoTooltipPopupOpen(false);
  }

  

  function resize() {
    if( width >= WIDTH_1020) {
      setMoviesToInitialRender({current: MOVIES_12, next: MOVIES_3_MORE});
    } else if( width < WIDTH_690) {
      setMoviesToInitialRender({current: MOVIES_5, next: MOVIES_2_MORE});
    } else {
      setMoviesToInitialRender({current: MOVIES_8, next: MOVIES_2_MORE});
    }
  }

  function handleMoreClick() {
    setMoviesToInitialRender({current: moviesToInitialRender.current + moviesToInitialRender.next, next: moviesToInitialRender.next});
  }

  const getMoviesList = () => {
    if (!searchRequest) {
      return isCheckboxActive ? shotMovies : initialMovies;
    }
    return isCheckboxActive ? shotMovies : foundMovies;
  };

  return (
    <section className="saved-movies">
      <Header />
      <SearchForm
        handleSearch={setSearchRequest}
        handleCheckboxClick={handleCheckboxClick}
        searchRequest={searchRequest}
        checkbox={isCheckboxActive}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={getMoviesList()} 
          isSavedMovie={true}
          onSave={onSave}
          onDelete={onDelete}
          savedMovies={savedMovies}
          isLoading={isLoading}
          onClick={handleMoreClick}
          limit={moviesToInitialRender.current}
        />
      )}
      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        title={infoTooltipText}
        onClose={closePopup}
        image={imageError}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
