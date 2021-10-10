import React from 'react'
import {usePokemonStore} from '../../store/usePokemonStore'

export default function FilterInput() {
    const filter = usePokemonStore(state => state.filter)
    const setFilter = usePokemonStore(state => state.setFilter)

    return (
        <div>
            <input
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            />
            <div> {filter}</div>
        </div>
    )
}