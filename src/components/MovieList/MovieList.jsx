import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {Array.isArray(movies) &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <h3>{movie.title}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieList;
