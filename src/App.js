import logo from './logo.svg';
import './App.css';
import {usePokemonStore, useSettingsStore} from './store'
import  People from './components/People'
import  Input from './components/Input'
import BearCounter from './components/BearCounter'
import React, {useEffect} from "react";
import Profile from "./components/Profile";
import FilterInput from "./components/Pokemons/FilterInput";
import PokemonList from './components/Pokemons/PokemonList'
import EditPerson from './components/Person/EditPerson'
import ShowPerson from './components/Person/ShowPerson'

function App() {
  //const people = useStore (state => state.people)
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode)
  const dark = useSettingsStore((state)=> state.dark)


  return (
    <div>
    <p>People</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Input/>
      <People />
      <BearCounter/>
      <Profile/>
      <EditPerson/>
      <FilterInput/>
      <PokemonList/>
      <ShowPerson/>

    </div>
  );
}

export default App;
