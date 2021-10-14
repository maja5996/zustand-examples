import React from 'react'
import {useProfileStore} from '../store/useProfileStore'

export default function Profile() {
    const {username, setUsername} = useProfileStore()
    const count = useProfileStore(state=> state.count())

    return (
        <div>
            <h2>Profile:</h2>
            <p>{username}</p>
            <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <p>Count: {count}</p>
        </div>
    )
}

