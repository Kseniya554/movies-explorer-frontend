class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options._headers;
  }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  async getAllMovies() {
    const response = await fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._getResponseData(response);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
