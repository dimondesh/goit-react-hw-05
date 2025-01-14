// File: src/services/api.js
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "d8af7cc934045a07b23d3a1636850702";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};
