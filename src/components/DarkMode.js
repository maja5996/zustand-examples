import React, {useEffect} from 'react'
import {useDarkModeStore} from '../store/useDarkModeStore'

export default function DarkMode() {
    const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode)
    const dark = useDarkModeStore((state)=> state.dark)

    useEffect(()=> {
        if(dark) {
            document.querySelector('body').classList.add('dark')
        } else {
            document.querySelector('body').classList.remove('dark')
        }
    }, [dark])

    return (
        <div>
            <button onClick={toggleDarkMode} className='toggleButton'>Dark Mode</button>
        </div>
    )
}
