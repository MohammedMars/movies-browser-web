import { searchMovies } from './api/omdbService';
import SearchBar from './Components/SearchBar/SearchBar';
import MovieList from './Components/MovieList/MovieList';
import Pagination from './Components/Pagination/Pagination';

export default async function Home({ searchParams: { s, page } }) {
  const query = s || 'War';
  const currentPage = page || '1';
  
  const searchData = await searchMovies(query, currentPage);
  const movies = searchData.Search || [];
  const totalResults = searchData?.totalResults || 0;

  const listTitle = s ? `Search Results for "${query}"` : 'Popular Movies';

  return (
    <>
      <div className="text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-2">🎬 Movie <span className='bold-darkred'>B</span>rowser</h1>
          <p className="lead mb-5">Find your favorite movies instantly</p>
          <SearchBar />
        </div>
      </div>
      <main className="container py-5">
        <h2 className="text-light mb-4">{listTitle}</h2>
        
        {movies.length > 0 ? (
          <>
            <MovieList movies={movies} />
            <Pagination
              currentPage={parseInt(currentPage)}
              totalResults={parseInt(totalResults)}
              query={query}
            />
          </>
        ) : (
          <p className="text-body-secondary text-center">No movies found. Please try another search.</p>
        )}
      </main>
    </>
  );
}
