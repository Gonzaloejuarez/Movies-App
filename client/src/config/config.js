import axios from "axios";

export const API = {
  getMovieByTitle: async (title, cb) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=97fe16d&t=${title}`
      );
      cb(null, response.data);
    } catch (error) {
      cb(false);
    }
  },
  getAllMoviesBySearch: async (title, page = 1, cb) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=97fe16d&s=${title}&page=${page}`
      );
      cb(null, response.data);
    } catch (error) {
      cb(false);
    }
  },
  getMovieDetails: async (movieId, cb) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=97fe16d&i=${movieId}`
      );
      await cb(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
