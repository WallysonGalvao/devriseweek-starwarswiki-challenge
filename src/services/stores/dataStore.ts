import create from 'zustand';
import { Film } from '../hooks';

type State = {
  selectedData: Film;
  setSelectedData: (selectedData: Film) => void;
};

export const useDataStore = create<State>(set => ({
  selectedData: {} as Film,
  setSelectedData: selectedData => set({ selectedData }),
}));
