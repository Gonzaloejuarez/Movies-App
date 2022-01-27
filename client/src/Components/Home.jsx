import React,{useContext, useState} from "react";
import { dataMovie } from "../config/config";
import { motion } from 'framer-motion';
import { MoviesContext } from "../config/app_config";
import style from './Home.module.css'
import MovieModal from "./DetailMovies/MovieDetail";
import Card from "./DetailMovies/MovieCard";
import Search from "./Search/Search";

const Home = ({movies, handleSearch}) => {
    let watchFlag = false;
    const {userLists} = useContext(MoviesContext);
    if(movies === undefined) {
        if(userLists != null) movies = userLists.watchList;
        watchFlag = true;
    }
    const [selectedMovie, setSelectedMovie] = useState(null)
    const handleSelectedMovie = async (imdbID) => {
        const fetchedMovie = await dataMovie(imdbID)
        setSelectedMovie(fetchedMovie)
    }
  return (
    <div className={style.divHome}>
      <section className={style.sectionHome}>
        <h1>Descubre</h1>
        <Search handleSearch={handleSearch}/>
      </section>

        <div className={style.moviesGrid}>
            {movies && movies.map((movie) => (
                <motion.div layout>
                    <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} handleSelectedMovie={handleSelectedMovie} imdbID={movie.imdbID} watchlist={watchFlag}/>
                </motion.div>
            ))}
           {selectedMovie && <MovieModal selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}
            </div>
        </div>
  );
};

export default Home;
