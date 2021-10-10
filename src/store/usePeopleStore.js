import  create from 'zustand'

export const usePeopleStore = create((set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
        set((state) => ({people: [...state.people, person]})),
}))

