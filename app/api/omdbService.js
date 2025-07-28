
const API_KEY = '868108b8'; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function searchMovies(query, page = '1') {
  if (!query) return null;

  try {
    const response = await fetch(`${API_URL}&s=${query}&page=${page}`,{
      cache:'no-store'
    });
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    }
    return [];
  } catch (error) {
    throw new Error("Failed to search movies.");
  }
}

export async function getMovieDetails(id) {
  if (!id) return null;

  try {
    const response = await fetch(`${API_URL}&i=${id}`,{
      cache:'no-store'
    });
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    }
    return null;
  } catch (error) {
    throw new Error("Failed to fetch movie details.");
  }
}