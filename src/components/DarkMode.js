import React from 'react'
import {useDarkModeStore} from '../store/useDarkModeStore'


export default function DarkMode() {
    const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode)
    const dark = useDarkModeStore((state)=> state.dark)

    return (
        <div>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}

