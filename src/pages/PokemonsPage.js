import React from 'react'
import PokemonList from "../components/PokemonList";
import FilterInput from "../components/FilterInput";

export default function PokemonsPage() {

    return (
        <div>
            <FilterInput/>
            <PokemonList/>
        </div>
    )
}

