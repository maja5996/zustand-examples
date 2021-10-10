import create from 'zustand'
import {devtools, persist} from "zustand/middleware";

let settingsStore = (set) => ({
    dark: false,
    toggleDarkMode: () => set((state) => ({ dark: !state.dark}))
})

let peopleStore = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
     set((state) => ({people: [...state.people, person]})),
})

let bearStore = (set) => ({
    bears: 0,
    increasePopulation: () => set(state => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears: 0})
})

let profileStore = ((set, get) => ({
    username: "Red",
    setUsername: (username) => set({ username }),
    count: () => get().username.length,
}))


let pokemonStore = ((set) => ({
    pokemon: [],
    filter: "",
    setPokemon: (pokemon) => set(state => ({
        ...state,
        pokemon
    })),
    setFilter: (filter) => set(state => ({
        ...state,
        filter
    }))
}))

let personStore = ((set)=> ({
    firstName: 'Maja',
    lastName: 'Mihajlov',
    setFirstName: (firstName) => set({firstName}),
    setLastName: (lastName) => set({lastName})
}))


settingsStore = devtools(store)
settingsStore = persist(store, {name: "user_settings"})

export const useSettingsStore = create(settingsStore)
export  const usePeoplesStore = create(peopleStore)
export const useBearStore = create(bearStore)
export const useProfileStore = create(profileStore)
export const usePokemonStore = create(pokemonStore)
export const usePersonStore = create(personStore)


let pokemonsStore = ((set) => ({
    pokemons: [{id: 1, name: 'Bulbasaur'},
        {id: 2, name: 'Ivysaur'},
        {id: 3, name: 'Venusaur'},
        { id: 4, name: "Charmander" },
        { id: 5, name: "Charmeleon" },
    ],

    addPokemons: (pokemon) =>
        set((state)=> ({
            pokemons: [
                {name: pokemon.name, id: Math.round() * 100},
                ...state.pokemons,
            ]})),

    removePokemon: (id) =>
        set((state) => ({
            pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
        }))
}))