import  create from 'zustand'

export const useDarkModeStore = create((set) => ({
    dark: false,
    toggleDarkMode: () => set((state)=> ({dark: !state.dark}))
}))
