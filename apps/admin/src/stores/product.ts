import { create } from "zustand";

type State = {
  option: {
    name: string;
    value: string[];
  }[];
};

type Action = {
  addOption: (option: any) => void;
};

export const useProductStore = create<State & Action>()((set) => ({
  option: [],
  addOption: (option) =>
    set(() => ({
      option: [...option, option],
    })),
}));
