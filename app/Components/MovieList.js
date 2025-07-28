import MovieCard from './MovieCard/MovieCard';
export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="row g-4 justify-content-center">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col-6 col-md-4 col-lg-3 col-xxl-2">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}