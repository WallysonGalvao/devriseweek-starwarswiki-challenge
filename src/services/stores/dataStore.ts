import create from 'zustand';

export type SelectedDataProps = {
  id: number;
  image_url: string;
  title?: string;
  subtitle?: string;
  type?: string;
  description?: string;
};

type State = {
  selectedData: SelectedDataProps;
  setSelectedData: (selectedData: SelectedDataProps) => void;
};

export const useDataStore = create<State>(set => ({
  selectedData: {} as SelectedDataProps,
  setSelectedData: selectedData => set({ selectedData }),
}));
