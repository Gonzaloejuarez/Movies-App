import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav/Nav';
function App() {
  return (
    <div className="App">
      {/* aqui ponemos las rutas,
          nosotros en las rutas lo que hacemos es indicar que segun el path
          se ejecute un componente
      */}
      <Nav />
      <Route exact path="/" component={Home}></Route>
      
    </div>
  );
}

export default App;
