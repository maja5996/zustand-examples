import React, {useEffect} from "react";
import './App.css';
import {usePokemonStore, useSettingsStore} from './store'
import  People from './components/People'
import  Input from './components/Input'
import BearCounter from './components/BearCounter'
import Profile from "./components/Profile";
import FilterInput from "./components/Pokemons/FilterInput";
import PokemonList from './components/Pokemons/PokemonList'
import EditPerson from './components/Person/EditPerson'
import ShowPerson from './components/Person/ShowPerson'
import DarkMode from "./components/DarkMode";

function App() {

  return (
    <div>
      <DarkMode/>
      <Input/>
      <People />
      <BearCounter/>
      <Profile/>
      <EditPerson/>
      <FilterInput/>
      <ShowPerson/>
      <PokemonList/>

    </div>
  );
}

export default App;
