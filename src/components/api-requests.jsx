import axios from 'axios';

export const requestTrendingMovies = async () => {
  const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWY1MmEwZTlhYTFiZTE2MzYwOTM4OWIzMzZhNzRjMSIsIm5iZiI6MTcyNDE1NTY4Ni45NTgyNjgsInN1YiI6IjY2YzQ4NGY1ZWY0MTA2Mzg5NzI0ZDdjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GtsdL-5bi2flo02AKdUcs0XaU7iHARqt51yU70XURs',
    },
  });

  const response = await instance.get();
  return response.data;
};

export const requestMovieById = async movieId => {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWY1MmEwZTlhYTFiZTE2MzYwOTM4OWIzMzZhNzRjMSIsIm5iZiI6MTcyNDE1NTY4Ni45NTgyNjgsInN1YiI6IjY2YzQ4NGY1ZWY0MTA2Mzg5NzI0ZDdjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GtsdL-5bi2flo02AKdUcs0XaU7iHARqt51yU70XURs',
    },
  });
  const response = await instance.get();
  return response.data;
};

export const requestMovieBySearchQuery = async query => {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWY1MmEwZTlhYTFiZTE2MzYwOTM4OWIzMzZhNzRjMSIsIm5iZiI6MTcyNDE1NTY4Ni45NTgyNjgsInN1YiI6IjY2YzQ4NGY1ZWY0MTA2Mzg5NzI0ZDdjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GtsdL-5bi2flo02AKdUcs0XaU7iHARqt51yU70XURs',
    },
  });
  const response = await instance.get();
  return response.data;
};

export const requestMovieCastById = async movieId => {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWY1MmEwZTlhYTFiZTE2MzYwOTM4OWIzMzZhNzRjMSIsIm5iZiI6MTcyNDE1NTY4Ni45NTgyNjgsInN1YiI6IjY2YzQ4NGY1ZWY0MTA2Mzg5NzI0ZDdjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GtsdL-5bi2flo02AKdUcs0XaU7iHARqt51yU70XURs',
    },
  });
  const response = await instance.get();
  return response.data;
};

export const requestMovieReviewsById = async movieId => {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWY1MmEwZTlhYTFiZTE2MzYwOTM4OWIzMzZhNzRjMSIsIm5iZiI6MTcyNDE1NTY4Ni45NTgyNjgsInN1YiI6IjY2YzQ4NGY1ZWY0MTA2Mzg5NzI0ZDdjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GtsdL-5bi2flo02AKdUcs0XaU7iHARqt51yU70XURs',
    },
  });
  const response = await instance.get();
  return response.data;
};
