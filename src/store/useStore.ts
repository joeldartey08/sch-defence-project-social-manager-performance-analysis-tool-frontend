import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  setUAuthentication: () => void;
  logout: () => void;
}

export const useStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  setUAuthentication: () =>
    set({
      isAuthenticated: true,
    }),


  logout: () =>
    set({
      isAuthenticated: false,
    }),
}));
