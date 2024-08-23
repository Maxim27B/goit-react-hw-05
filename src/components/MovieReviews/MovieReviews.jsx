import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { requestMovieReviewsById } from '../api-requests';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async id => {
      try {
        setLoading(true);
        const data = await requestMovieReviewsById(id);
        setMovieReviews(data.results);
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
      {Array.isArray(movieReviews) && movieReviews.length === 0 && (
        <p style={{ color: 'red' }}>
          {' '}
          Sorry. There are no reviews for this movie yet
        </p>
      )}
      <ul className={css.list}>
        {Array.isArray(movieReviews) &&
          movieReviews.map(review => {
            return (
              <li key={review.id} className={css.link}>
                <h4>Author: {review.author} </h4>
                <p>Review: {review.content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieReviews;
