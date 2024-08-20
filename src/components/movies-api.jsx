import axios from 'axios';

const moviesApi = async () => {
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

export default moviesApi;
