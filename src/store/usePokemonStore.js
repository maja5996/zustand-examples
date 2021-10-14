import  create from 'zustand'

export const usePokemonStore = create((set) => ({
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