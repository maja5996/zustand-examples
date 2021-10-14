import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage'
import PeoplePage from "./pages/PeoplePage";
import PersonPage from './pages/PersonPage'
import BearsPage from "./pages/BearsPage";
import PokemonsPage from "./pages/PokemonsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

  return (
      <BrowserRouter>
          <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/people" component={PeoplePage} />
          <Route path="/person" component={PersonPage}/>
          <Route path="/bears" component={BearsPage}/>
          <Route path="/pokemons" component={PokemonsPage} />
          <Route path="/profile" component={ProfilePage}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
