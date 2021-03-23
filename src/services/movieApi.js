import axios from "axios";

const key = "26b654b472517a9b848f2c87e7e6e457";

const baseURL = "https://api.themoviedb.org/";

const getTrendingMovies = () => {
  return axios
    .get(`${baseURL}3/trending/all/day?api_key=${key}`)
    .then((response) => response.data.results);
};

const getMovieById = (id) => {
  return axios
    .get(`${baseURL}3/movie/${id}?api_key=${key}&language=en-US`)
    .then((response) => response.data)
    .catch((error) => {
      console.log({ error });
      return [];
    });
};

const getMovieBySearchForm = (searchQuery) => {
  return axios
    .get(
      `${baseURL}3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    )
    .then((response) => response.data.results);
};

const getMovieCast = (id) => {
  return axios
    .get(`${baseURL}3/movie/${id}/credits?api_key=${key}&language=en-US`)
    .then((response) => response.data.cast);
};

const getMovieReview = (id) => {
  return axios
    .get(`${baseURL}3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
    .then((response) => response.data.results);
};

export default {
  getTrendingMovies,
  getMovieById,
  getMovieBySearchForm,
  getMovieCast,
  getMovieReview,
};
