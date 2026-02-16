import { create } from "zustand";

type PopupStore = {
  menu: boolean;
  toggleMenu: () => void;
  filter: boolean;
  toggleFilter: () => void;
  login: boolean;
  toggleLogin: () => void;
  register: boolean;
  toggleRegister: () => void;
};

export const usePopupStore = create<PopupStore>((set) => ({
  menu: false,
  toggleMenu: () => {
    set((state) => ({
      menu: !state.menu,
    }));
  },
  filter: false,
  toggleFilter: () => {
    set((state) => ({
      filter: !state.filter,
    }));
  },
  login: false,
  toggleLogin: () => {
    set((state) => ({
      login: !state.login,
    }));
  },
  register: false,
  toggleRegister: () => {
    set((state) => ({
      register: !state.register,
    }));
  },
}));
