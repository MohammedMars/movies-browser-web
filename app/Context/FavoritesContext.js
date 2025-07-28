'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const FAVORITES_KEY = 'favoriteMovies';
const FavoritesContext = createContext({
  favoriteIds: [],
  toggleFavorite: () => {},
});
export function useFavorites() {
  return useContext(FavoritesContext);
}
export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  useEffect(() => {
    try {
      const storedIds = localStorage.getItem(FAVORITES_KEY);
      if (storedIds) {
        setFavoriteIds(JSON.parse(storedIds));
      }
    } catch (e) {
      console.error("Failed to parse favorites from localStorage", e);
      setFavoriteIds([]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (movieId) => {
    setFavoriteIds((prevIds) =>
      prevIds.includes(movieId)
        ? prevIds.filter((id) => id !== movieId)
        : [...prevIds, movieId]
    );
  };

  const value = {
    favoriteIds,
    toggleFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}