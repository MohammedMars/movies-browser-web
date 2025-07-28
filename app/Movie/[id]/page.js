import { getMovieDetails } from '../../api/omdbService';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BackButton from '../../Components/BackButton/BackButton';
import FavoriteButton from '../../Components/FavoriteButton/FavoriteButton';
import './style.css';
export default async function MovieDetailsPage({ params }) {
  const movie = await getMovieDetails(params.id);
  if (!movie || movie.Response === 'False') {
    notFound();
  }

  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="container py-5">
      <div className="bg-dark text-light rounded-4 shadow-lg p-4 p-md-5">
        <BackButton />
        
        <div className="row g-4 align-items-center mt-3">
          <div className="col-md-4 text-center">
            <Image
              src={posterUrl}
              alt={movie.Title}
              width={300}
              height={450}
              className="img-fluid rounded shadow-lg posterImage"
              unoptimized
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">{movie.Title} ({movie.Year})</h2>
            <FavoriteButton movieId={movie.imdbID} />
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>IMDb Rating:</strong> <span className="text-warning">⭐ {movie.imdbRating}/10</span></p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Country:</strong> {movie.Country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
