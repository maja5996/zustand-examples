import React from 'react'
import {usePeoplesStore} from '../store'

export default function People() {
    const people = usePeoplesStore(state => state.people)

    return (
        <div>
            <p>We have {people.length} in our DB </p>
            <ul>
                {people.map(p => (
                    <li>{p}</li>
                ))}
            </ul>
        </div>
    )
}