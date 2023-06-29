class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((err) => {
        const error = new Error(err.message);
        error.status = response.status;
        throw error;
      });
    }
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  _getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this._getSavedMovies()]);
  }

  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._getResponseData);
  }

  postNewMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        // thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._getResponseData);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  // getToken() {
  //   return this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  // }
  setToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  getToken() {
    return this._headers.authorization;
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://api.best-movies-explorer.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
