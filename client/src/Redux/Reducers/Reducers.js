import { ADD_MOVIES_API, GET_DETAIL_MOVIE } from "../constantes";


const initialState = {
    listMovies : [],
    movieDetail : {}
}

export const reducer = (state = initialState, {type, payload}) => {
    if(type === ADD_MOVIES_API){
        return{
            ...state,
            listMovies : payload.Search
        }
    }
    if(type === GET_DETAIL_MOVIE) {
        return{
            ...state,
            movieDetail : payload
        }
    }
}


export default reducer