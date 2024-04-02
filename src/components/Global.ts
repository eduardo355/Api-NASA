import { create } from "zustand"

type Store = {
    SearchInput: string
    SetSearch: (searchInput: string) => void
    
}

type marte = {
    SearchMarte: string
    reset: boolean
    setSearchMarte: (SearchMarte: string) => void
    setReset: (reset: boolean) => void
}

export const SearchGlobal = create<Store>()((set) => ({
    SearchInput: '',
    SetSearch: (searchInput) => set({ SearchInput: searchInput }),
}))

export const SearchMarteGlobal = create<marte>()((set) => ({
    SearchMarte: '',
    reset: false,
    setSearchMarte: (SearchMarte) => set({ SearchMarte: SearchMarte }),
    setReset: (reset) => set({ reset: reset })
}))