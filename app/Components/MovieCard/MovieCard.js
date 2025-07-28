'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFavorites } from '../../Context/FavoritesContext';
import './style.css';
export default function MovieCard({ movie }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(movie.imdbID);
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png';

  return (
    <div className="card bg-dark text-white h-100 shadow-sm">
      <Link href={`/Movie/${movie.imdbID}`}>
        <Image
          src={posterUrl}
          alt={`${movie.Title} Poster`}
          width={500}
          height={750}
          className="card-img-top cardImage"
          unoptimized
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{movie.Title}</h5>
        <p className="card-text text-body-secondary">{movie.Year}</p>
        <button
          type="button"
          onClick={() => toggleFavorite(movie.imdbID)}
          className={`btn btn-sm mt-auto ${isFavorite ? 'btn-warning' : 'btn-outline-secondary'}`}
        >
          <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i> {isFavorite ? 'Favorited' : 'Favorite'}
        </button>
      </div>
    </div>
  );
}