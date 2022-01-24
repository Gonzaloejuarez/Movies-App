import axios from "axios";

const apiKey = "97fe16d";
const url = `https://www.omdbapi.com/?apikey=${apiKey}&`;

export const getMovies = async (search) => {
    if (search === '') {
        return {};
    }
    try {
        const searchUrl = url+'s='+search;
        const movies = await axios.get(searchUrl);
        return movies.data
    } catch (error) {
        return error;
    }
}

export const dataMovie = async (imdbID) => {
    try {
        const searchUrl = url+'i='+imdbID
        const movie = await axios.get(searchUrl)
        return movie.data
    } catch(error) {
        return error
    }   
}


