import  create from 'zustand'

export const useProfileStore = create((set,get) => ({
    username: 'Maja',
    setUsername : (username) => set({username}),
    count: () => get().username.length
}))

