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

function SavedMovies({ initialMovies, onSave, onDelete, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [shotMovies, setShotMovies] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [moviesToInitialRender, setMoviesToInitialRender] = useState({
    current: 0,
    next: 0,
  });
  const { width } = useWindowWidth();

  // 1. Объединены все вызовы useEffect, для упрощения кода и оптимизации.
  useEffect(() => {
    setFoundMovies(initialMovies);
    if (searchRequest.length > 0 || isCheckboxActive) {
      setIsLoading(true);
      try {
        // Убран вызов searchMoviesHandler и вызов handleSearch перенесен непосредственно сюда.
        if (searchRequest.length > 0) {
          const moviesToRender = initialMovies.filter((movie) => {
            const a = searchRequest.toLowerCase().trim();
            return movie.nameRU.toLowerCase().indexOf(a) !== -1 || movie.nameEN.toLowerCase().indexOf(a) !== -1;
          });

          if (moviesToRender.length !== 0) {
            setFoundMovies(moviesToRender);
          }
        }
        // Убран вызов filterShotMoviesHandler и вызов handleFilter перенесен непосредственно сюда.
        setShotMovies(foundMovies.filter((movie) => movie.duration <= SHORT_FILM));
        return;
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    // Перенесена логика resize внутрь этого useEffect.
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
  }, [searchRequest, isCheckboxActive, width, initialMovies, foundMovies]);

  // 2. Используется useCallback для мемоизации функций обратного вызова.
  const handleMoreClick = useCallback(() => {
    setMoviesToInitialRender({
      current: moviesToInitialRender.current + moviesToInitialRender.next,
      next: moviesToInitialRender.next,
    });
  }, [moviesToInitialRender]);

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
        handleCheckboxClick={setIsCheckboxActive}
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
      <Footer />
    </section>
  );
}

export default SavedMovies;
