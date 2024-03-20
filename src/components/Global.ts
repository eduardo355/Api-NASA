import { create } from "zustand"

type Store = {
    SearchInput: string,
    SetSearch: (searchInput: string) => void
}

export const SearchGlobal = create<Store>()((set) => ({
    SearchInput: '',
    SetSearch: (searchInput) => set({ SearchInput: searchInput })
}))