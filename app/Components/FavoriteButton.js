'use client';

import { useFavorites } from '../Context/FavoritesContext';

export default function FavoriteButton({ movieId }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(movieId);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(movieId)}
      className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-light'} mt-3 mb-4`}
    >
      <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i> {isFavorite ? 'Favorited' : 'Add to Favorites'}
    </button>
  );
}