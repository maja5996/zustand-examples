import React from 'react'
import {usePeopleStore} from '../store/usePeopleStore'

export default function People() {
    const people = usePeopleStore(state => state.people)

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