import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav/Nav';
import {  MoviesProvider } from './config/app_config';
import { getMovies } from './config/config';
import Search from './Components/Search/Search';
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
          <Search handleSearch={handleSearch}/>
          <Home movies={searchedMovies.Search ? searchedMovies.Search : []}/>
          </Route>
          <Route path="/porVer">

          </Route>

          <Route path="/MiLista">

          </Route>
        </Switch>
          </div>
      </Router>
    </div>
    </MoviesProvider>
  );
}

export default App;
