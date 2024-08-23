import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { requestMovieCastById } from '../api-requests';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async id => {
      try {
        setLoading(true);
        const data = await requestMovieCastById(id);
        setMovieCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(movieId);
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error !== null && (
        <p style={{ color: 'red' }}>{error}. Please, try again</p>
      )}
      <ul className={css.actorList}>
        {Array.isArray(movieCast) &&
          movieCast.map(actor => {
            return (
              <>
                <li key={actor.id} className={css.actorContainer}>
                  <img
                    className={css.img}
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt="Actor photo"
                  />
                </li>
                <li>
                  <h4>{actor.name}</h4>
                </li>
                <li>
                  <p>Character : {actor.character}</p>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};

export default MovieCast;
