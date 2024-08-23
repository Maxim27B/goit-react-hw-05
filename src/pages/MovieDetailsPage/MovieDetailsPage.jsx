import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { requestMovieById } from '../../components/api-requests';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await requestMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error !== null && (
        <p style={{ color: 'red' }}>{error}. Please, try again</p>
      )}
      {movie !== null && (
        <>
          <div className={css.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt="Movie picture"
            />
            <div>
              <h3>
                {movie.title} ({movie.release_date.toString().slice(0, 4)})
              </h3>
              <p>
                User score: {(movie.vote_average * 10).toString().slice(0, 2)}%
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(genre => {
                  return `${genre.name} `;
                })}
              </p>
            </div>
          </div>
          <h4 className={css.additionalInfo}>Additional information</h4>
          <ul className={css.additionalInfoContainer}>
            <li>
              <NavLink
                to="cast"
                className={({ isActive }) => {
                  return clsx(css.link, isActive && css.active);
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => {
                  return clsx(css.link, isActive && css.active);
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
