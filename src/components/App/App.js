import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

import moviesApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';
import auth from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import imageOk from '../../images/success.svg';
import imageError from '../../images/Error.svg';
import moviesMap from '../MoviesMap/MoviesMap';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || false
  );
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [registered, setRegistered] = useState(false);
  const [infoTooltipText, setInfoTooltipText] = useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getContent(jwt)
        .then((response) => {
          setLoggedIn(true);
          setCurrentUser({
            email: response.email,
            name: response.name,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    mainApi.setToken();
    if (loggedIn) {
      mainApi
        .getAllNeededData()
        .then(([userInfo, savedUserMovies]) => {
          setCurrentUser(userInfo);
          setSavedMovies(savedUserMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    setErrorMessage('');
    }, [errorMessage, navigate]);

  function handleRegister({ email, password, name }) {
    setIsLoading(true);
    auth
      .register({ email, password, name })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((error) => {
        setRegistered(false);
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipPopupOpen(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    auth
      .authorize({ email, password })
      .then((response) => {
        localStorage.setItem('jwt', response.token);
        setLoggedIn(true);
        setCurrentUser({
          email: response.email,
          name: response.name,
        });
        localStorage.setItem('loggedIn', true);
        navigate('/movies');
      })
      .catch((error) => {
        setRegistered(false);
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipPopupOpen(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser({ email, name }) {
    setIsLoading(true);
    mainApi
      .patchUserInfo({ email, name })
      .then(() => {
        setCurrentUser({ email, name });
        setErrorMessage('Данные успешно обновлены!');
        setInfoTooltipText('Данные успешно обновлены!');
        setInfoTooltipPopupOpen(true);
        setRegistered(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setRegistered(false);
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('lastRequest');
    localStorage.removeItem('checkbox');
    localStorage.removeItem('moviesLastRequest');
    localStorage.removeItem('allMovies');
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  function handleGetAllMovies() {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((InitialMovies) => {
        const transformedmovies = moviesMap(InitialMovies);
        localStorage.setItem('allMovies', JSON.stringify(transformedmovies));
        setInitialMovies(transformedmovies);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getLocalStorage() {
    const allMovies = localStorage.getItem('allMovies');
    if (allMovies) {
      setInitialMovies(JSON.parse(allMovies));
    } else {
      handleGetAllMovies();
    }
  }

  function handleSaveMovie(movie) {
    setIsLoading(true);
    mainApi
      .postNewMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDeleteMovie(_id) {
    setIsLoading(true);
    mainApi
      .deleteMovie(_id)
      .then(() => {
        const restSavedMovies = savedMovies.filter(
          (movie) => movie._id !== _id
        );
        setSavedMovies(restSavedMovies);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closePopup() {
    setInfoTooltipPopupOpen(false);
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          {!loggedIn ? (
            <Route
              path='/signup'
              element={
                <Register
                  onRegisterUserData={handleRegister}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                />
              }
            ></Route>
          ) : (
            <Route path='/signup' element={<Navigate to='/' />} />
          )}
          {!loggedIn ? (
            <Route
              path='/signin'
              element={
                <Login
                  onLoginUserData={handleLogin}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                />
              }
            ></Route>
          ) : (
            <Route path='/signin' element={<Navigate to='/' />} />
          )}
          {loggedIn ? (
            <Route
              path='/profile'
              element={
                <Profile
                  onUpdateUserInfo={handleUpdateUser}
                  signOut={handleSignOut}
                  isLoading={isLoading}
                />
              }
            ></Route>
          ) : (
            <Route path='/profile' element={<Navigate to='/' />} />
          )}

          <Route path='/' element={<Main />}></Route>

          <Route
            path='/movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Movies}
                initialMovies={initialMovies}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
                signOut={handleSignOut}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={SavedMovies}
                initialMovies={savedMovies}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
              />
            }
          />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          title={infoTooltipText}
          onClose={closePopup}
          image={registered ? imageOk : imageError}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
