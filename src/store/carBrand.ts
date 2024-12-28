import { create } from "zustand";

interface State {
	activeID: number;
	setActiveID: (activeID: number) => void;
}

export const useCarBrandStore = create<State>()((set) => ({
	activeID: 1,
	setActiveID: (activeID: number) => set({ activeID }),
}));
