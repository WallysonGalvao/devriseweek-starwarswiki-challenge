import create from 'zustand';
import { DataResponse } from '../hooks';

type State = {
  selectedData: DataResponse;
  setSelectedData: (selectedData: DataResponse) => void;
};

export const useDataStore = create<State>(set => ({
  selectedData: {} as DataResponse,
  setSelectedData: selectedData => set({ selectedData }),
}));
