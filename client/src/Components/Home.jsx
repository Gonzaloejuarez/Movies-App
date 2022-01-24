import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchedMovies from './Movies'

const Home = () => {
  const searchType = useSelector((state) => state.searchType);
  const searchedMovies = useSelector((state) => state.searchedMovies);
  return (
    <div>
      {Object.keys(searchedMovies).length > 1 ? (
        <div>
          {searchType === "s" && <SearchedMovies />}
          
        </div>
      ) : (
        <h1>Search For Movies!</h1>
      )}
    </div>
  );
};

export default Home;
