import { create } from "zustand";

type FiltersState = {
  city: string | null;
  setCity: (city: string | null) => void;
  clearFilters: () => void;
};

export const useFiltersStore = create<FiltersState>((set) => ({
  city: null,
  setCity: (city) => set({ city }),
  clearFilters: () => set({ city: null }),
}));
