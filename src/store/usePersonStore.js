import  create from 'zustand'

export const usePersonStore = create((set) => ({
    firstName: 'Maja',
    lastName: '',
    setFirstName: (firstName) => set({firstName}),
    setLastName: (lastName) => set({lastName})
}))
