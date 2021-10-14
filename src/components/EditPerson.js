import React from 'react'
import {usePersonStore} from '../store/usePersonStore'

export default function EditPerson() {
    const firstName = usePersonStore((state) => state.firstName);
    const lastName = usePersonStore((state)=> state.lastName);
    const setFirstName = usePersonStore((state) => state.setFirstName)
    const setLastName = usePersonStore((state) => state.setLastName)

    return (
        <div>
            <div>
                First Name:
                <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                Last Name:
                <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                />
            </div>
        </div>
    )
}