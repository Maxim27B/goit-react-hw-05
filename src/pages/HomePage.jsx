import Loader from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { requestTrendingMovies } from '../components/api-requests';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await requestTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error !== null && (
        <p style={{ color: 'red' }}>{error}. Please, try again</p>
      )}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
