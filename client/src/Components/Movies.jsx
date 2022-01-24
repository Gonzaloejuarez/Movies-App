import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {getMovies}  from '../Redux/Actions/Actions'
import {API} from '../config/config'

const SearchedMovies = () => {
  const searchedMovies = useSelector((state) => state.searchedMovies);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const history = useHistory();


 
  const truncate = (str, len = 20) => {
    if (str.length > 15) {
      return `${str.substring(0, len)}...`;
    } else {
      return str;
    }
  };

  return (
    <div>
      <div>

        {searchedMovies &&
          searchedMovies.map((movie, index) => (
              <div key={index}>
              <div>
                  {truncate(movie.Title)} ({movie.Year})
              </div>
              <img
                onClick={() => history.push(`/movie/${movie.imdbID}`)}
                src={movie.Poster}
                alt="No Poster"
                />
            </div>
          ))}
     
    </div>
    
    </div>
  );
};

export default SearchedMovies;
