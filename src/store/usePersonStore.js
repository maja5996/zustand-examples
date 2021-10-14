import  create from 'zustand'

export const usePersonStore = create((set) => ({
    firstName: 'Maja',
    lastName: 'Mihajlov',
    setFirstName: (firstName) => set({firstName}),
    setLastName: (lastName) => set({lastName})
}))