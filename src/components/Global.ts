import { create } from "zustand"

type Store = {
    SearchInput: string,
    reset: boolean
    SetSearch: (searchInput: string) => void
    setReset: (reset: boolean) => void
}

export const SearchGlobal = create<Store>()((set) => ({
    SearchInput: '',
    reset: false,
    SetSearch: (searchInput) => set({ SearchInput: searchInput }),
    setReset: (reset) => set({ reset: reset })
}))