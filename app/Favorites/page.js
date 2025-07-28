'use client';

import { useState, useEffect } from 'react';
import { useFavorites } from '../Context/FavoritesContext';
import { getMovieDetails } from '../api/omdbService';
import MovieList from '../Components/MovieList/MovieList';
import ClientPagination from '../Components/ClientPagination/ClientPagination';
export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const [allFavoriteMovies, setAllFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const ITEMS_PER_PAGE = 12; 

  useEffect(() => {
    if (favoriteIds.length === 0) {
      setAllFavoriteMovies([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      setLoading(true);
      const moviePromises = favoriteIds.map(id => getMovieDetails(id));
      const movies = await Promise.all(moviePromises);
      setAllFavoriteMovies(movies.filter(movie => movie));
      setLoading(false);
    };

    fetchFavorites();
  }, [favoriteIds]);
  const filteredMovies = allFavoriteMovies.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentMovies = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">❤️ Favorite <span className='bold-darkred'>M</span>ovies</h1>
        <p className="lead text-body-secondary">Your personal collection of saved movies (<span className="bold-darkred">{favoriteIds.length}</span>)</p>
      </div>
      {allFavoriteMovies.length > 0 && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 col-lg-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search in your favorites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '40vh' }}>
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : allFavoriteMovies.length === 0 ? (
        <p className="text-center text-body-secondary fs-5">You haven't added any movies to your favorites yet.</p>
      ) : filteredMovies.length > 0 ? (
        <>
          <MovieList movies={currentMovies} />
          <ClientPagination
            currentPage={currentPage}
            totalItems={filteredMovies.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <p className="text-center text-body-secondary fs-5">No favorite movies match your search for "{searchTerm}".</p>
      )}
    </main>
  );
}