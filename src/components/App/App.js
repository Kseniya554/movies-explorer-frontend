import React, { useState, useEffect } from 'react';
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
// import initialMovies from '../../constants/initialMovies';

import moviesApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

function App() {
  // const [cardsMovie] = useState(initialMovies);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getAllMovies().then((movies) => {
      setMovies(movies);
      console.log(movies);
    });
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/' element={<Main />}></Route>
        <Route
          path='/movies'
          // element={<Movies />}
          element={<Movies movies={movies} isOwner={false} />}
        ></Route>
        <Route
          path='/saved-movies'
          element={<SavedMovies movies={movies} isOwner={true} />}
        ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
