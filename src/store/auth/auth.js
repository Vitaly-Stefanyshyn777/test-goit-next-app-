import { persist, devtools } from "zustand/middleware";

import { create } from "zustand";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        setAuth: ({ user, token }) => set({ user, token, isLoggedIn: true }),
        setUser: ({ user }) => set({ user, isLoggedIn: true }),
        logout: () => set({ user: null, token: null, isLoggedIn: false }),
        setRefreshing: () =>
          set((state) => {
            console.log(state);
          }),
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          token: state.token,
        }),
      }
    )
  )
);
