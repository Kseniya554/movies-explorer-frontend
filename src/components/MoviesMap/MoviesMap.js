export default function moviesMap(movies) {
  return movies.map((movie) => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: { imageUrl: `https://api.nomoreparties.co${movie.image.url}` },
    trailerLink: movie.trailerLink,
    thumbnail: { thumbnailUrl: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`},
    id: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    key: movie.movieId,
  }))
}
