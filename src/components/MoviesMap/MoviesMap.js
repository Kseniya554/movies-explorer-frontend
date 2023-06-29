export default function moviesMap(movie) {
  console.log(movie);
  const imageUrl = `https://api.nomoreparties.co${movie.image.url}`;
  // const thumbnail = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;
  return movie.map((movie) => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: { imageUrl },
    trailerLink: movie.trailerLink,
    // thumbnail: {thumbnail},
    id: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    key: movie.movieId,
  }));
}
