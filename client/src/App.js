import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {  MoviesProvider } from './config/app_config';
import { getMovies } from './config/config';

//importaciones de componentes
import InicioComponente from './Components/Inicio';
import Search from './Components/Search/Search';
import Home from './Components/Home';
import Nav from './Components/Nav/Nav';
import MovieFavoritas from './Components/Movies/MoviesFav/Movies_list';
import SeeMovies from './Components/Movies/MoviesView/SeeMovies';
function App() {

  const [searchedMovies, setSearchedMovies] = useState({});

  const handleSearch = async (search) => {
    let movies = await getMovies(search);
    // if (movies.length > 100) {
    //   movies = movies.slice(0,100)
    // }
    setSearchedMovies(movies);
  }

  return (
    <MoviesProvider>
    <div className="App">
      <Router>
          <Nav/>
          <div>
        <Switch>
          <Route exact path="/">
          <InicioComponente />
          {/* <Search handleSearch={handleSearch}/> */}
          <Home handleSearch={handleSearch} movies={searchedMovies.Search ? searchedMovies.Search : []}/>
          </Route>
          <Route path="/porVer" component={SeeMovies }></Route>
          <Route path="/lista" component={MovieFavoritas}></Route>
        </Switch>
          </div>
      </Router>
    </div>
    </MoviesProvider>
  );
}

export default App;
