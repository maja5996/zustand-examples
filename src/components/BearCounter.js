import React from 'react'
import {useBearStore} from "../store/useBearStore";

export default function BearCounter() {
    const bears = useBearStore(state => state.bears)
    const increasePopulation = useBearStore(state => state.increasePopulation)
    const removeAllBears = useBearStore(state => state.removeAllBears)

    return (
        <div>
            <h1>{bears} around here...</h1>
            <button onClick={increasePopulation}>Increase Population</button>
            <br/>
            <button onClick={removeAllBears}>Remove All Bears</button>
        </div>
    )
}

