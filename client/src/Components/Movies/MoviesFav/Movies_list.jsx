import React,{useContext} from "react"
import { MoviesContext } from "../../../config/app_config";
import MoviesFav from "./Movies";
import styles from './Movies.module.css';

export const MovieFavoritas = () => {
    let { userLists, ratedList } = useContext(MoviesContext);
    if(ratedList) ratedList.sort((mov1,mov2) => (mov1.Rating > mov2.Rating) ? -1 : ((mov2.Rating > mov1.Rating) ? 1 : 0));
    return(
        <div>
            <h1>Mis Listas</h1>
            <div  className={styles.divMovieFav}>
                    <MoviesFav list={{name:"Películas reseñadas", movies: ratedList}}/>
                    {Object.keys(userLists).map((list) => {
                        if(list != "watchList") return <MoviesFav list={{name: list, movies: userLists[list]}}/>
                    })}
                </div>
        </div>
    )
}


export default MovieFavoritas