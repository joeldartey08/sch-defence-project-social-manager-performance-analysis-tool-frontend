import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  setUAuthentication: (data: boolean) => void;
  logout: () => void;
}

export const useStore = create<AuthState>((set) => ({
  isAuthenticated: localStorage.getItem("sch_token") ? true : false,

  setUAuthentication: (data) =>
    set({
      isAuthenticated: data,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
    }),
}));
