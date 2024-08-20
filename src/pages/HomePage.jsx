import Loader from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import moviesApi from '../components/movies-api';

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  //   const fetchMovies = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await moviesApi();
  //       console.log(data.results);
  //       return data.results;
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   const movies = fetchMovies();
  //   console.log(movies);
  return (
    <>
      {loading && <Loader />}

      <p>HomePage</p>
    </>
  );
};

export default HomePage;
