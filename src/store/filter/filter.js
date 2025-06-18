import { create } from "zustand";

export const useFilter = create((set) => ({
  filter: "",
  setFilter: (value) => {
    set({ filter: value.toLowerCase() });
  },
}));
