// import { BASE_URL } from "../../constants/constants";

export default function moviesMap(movie) {
    const image = `https://api.nomoreparties.co/${movie.image.url}`;
    const thumbnail = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;
    return (
      movie.map((movie) => ({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: {image},
        trailerLink: movie.trailerLink,
        thumbnail: {thumbnail},
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        key: movie.id
      }))
    )
  }