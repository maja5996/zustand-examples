import React from 'react'
import {usePokemonStore} from '../store'

export default function Pokemons() {
    const pokemons = usePokemonStore((state) => state.pokemons)
    const  removePokemon = usePokemonStore((state) => state.removePokemon())

    return (
        <div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <ul>{pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <div className="row">
                            <div className="col-md-6">{pokemon.name} </div>
                            <div className="col-md-6">
                                <button className="btn btn-outline-secondary btn-sm"
                                        onClick={(e) => removePokemon(pokemon.id)}>X
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
            <div className="col-md-4"></div>
        </div>
    )
}