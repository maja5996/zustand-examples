import React, {useState} from 'react'
import {usePersonStore} from '../store/usePersonStore'

export default function People() {
    const [onlyFirstName, setOnlyFirstName] = useState(false);
    const firstName = usePersonStore((state) => state.firstName);
    const lastName = usePersonStore((state) => (onlyFirstName ? null : state.lastName));

    return (
        <div>
         <button type="button" onClick={()=> setOnlyFirstName((s)=> !s)}>
             {onlyFirstName ? 'Showing only first name ' : 'Showing full name'}
         </button>
            {onlyFirstName ? (
                <div>First Name: {firstName} </div>
            ) : (
                <div>Full Name: {firstName} {lastName} </div>
            )}
        </div>
    )
}