import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { requestMovieBySearchQuery } from '../../components/api-requests';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovies = async query => {
      if (!query) return;
      try {
        setLoading(true);
        const data = await requestMovieBySearchQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(query);
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input name="query" className={css.input} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {loading && <Loader />}
      {error !== null && (
        <p style={{ color: 'red' }}>{error}. Please, try again</p>
      )}
      {Array.isArray(movies) && movies.length === 0 && (
        <p style={{ color: 'red' }}>
          Sorry. Nothing was found for your request
        </p>
      )}
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
