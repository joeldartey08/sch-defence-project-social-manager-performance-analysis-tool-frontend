import { create } from "zustand";

type ToastState = {
  isOpen: boolean;
  type: "success" | "error" | "loading" | null;
  message: string;
  showToast: (type: "success" | "error" | "loading", message: string) => void;
  closeToast: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
  isOpen: false,
  type: null,
  message: "",
  showToast: (type, message) => set({ isOpen: true, type, message }),
  closeToast: () => set({ isOpen: false, type: null, message: "" }),
}));
