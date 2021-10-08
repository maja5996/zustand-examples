import React, {useEffect}  from 'react'
import {usePokemonStore} from "../../store";

const URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"

fetch(URL)
    .then((resp) => resp.json())
    .then((pokemon) =>
     usePokemonStore.setState((state) => ({
         ...state,
         pokemon,
     }))
    )

export default function PokemonList() {
    const setPokemon = usePokemonStore(state => state.setPokemon);
    const pokemon = usePokemonStore(state => state.pokemon)
    const filter = usePokemonStore((state) => state.filter)

    // React.useEffect(() => {
    //   fetch(URL)
    //     .then((resp) => resp.json())
    //     .then((pokemon) => setPokemon(pokemon));
    // });

    return (
        <div>
         {/*<div>{JSON.stringify(pokemon)}</div>*/}
            <table width="100%">
                <tbody>
                {pokemon.filter((p) =>
                    p.name.english.toLowerCase().includes(filter.toLowerCase())
                )
                .map((p)=> (
                    <tr key={p.id}>
                        <td>{p.name.english}</td>
                        <td>{p.type.join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}