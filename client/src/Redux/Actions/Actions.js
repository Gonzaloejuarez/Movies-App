import axios from "axios"
import { ADD_MOVIES_API, GET_DETAIL_MOVIE } from "../constantes"


export const add_movies_api = (title) => async (dispatch) => {
    try{
        const movies = await axios.get(`https://www.omdbapi.com/?apikey=97fe16d&s=${title}`);
        dispatch({type: ADD_MOVIES_API, payload: movies.data})
    }catch(err){
        console.log(err)
    }
}

export const get_detail_movie = (idMovie) => async (dispatch) => {
    try{
        const detail = await axios.get(`https://www.omdbapi.com/?apikey=97fe16d&i=${idMovie}`);
        dispatch({
            type : GET_DETAIL_MOVIE,
            payload : detail.data
        })
    }catch(err){
        console.log(err)
    }
}