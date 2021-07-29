import create from 'zustand';
import { ThemeKeysProps } from '~/styles/themes';
import { DataResponse } from '../hooks';

type State = {
  selectedData: DataResponse;
  setSelectedData: (selectedData: DataResponse) => void;

  selectedTheme: ThemeKeysProps;
  setTheme: (selectedTheme: ThemeKeysProps) => void;
};

export const useDataStore = create<State>(set => ({
  selectedData: {} as DataResponse,
  setSelectedData: selectedData => set({ selectedData }),

  selectedTheme: 'empire',
  setTheme: selectedTheme => set({ selectedTheme }),
}));
