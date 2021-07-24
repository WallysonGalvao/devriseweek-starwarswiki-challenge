import { api } from '../api';

type Error = {
  error: string;
  message: string;
  statusCode: number;
};

export type Film = {
  id: number;
  image_url: string;
  title?: string;
  subtitle?: string;
  type?: string;
  description?: string;
  trailer_url: string;
};

export type Characters = {
  id: number;
  description: string;
  image_url: string;
  subtitle: string;
  title: string;
};

type GetDataReturn = {
  getFilms: () => Promise<Film[] & Error>;
  getCharacters: () => Promise<Characters[] & Error>;
  getSearchResult: (query: string) => Promise<Film[] & Error>;
};
export const useGetData = (): GetDataReturn => {
  const getFilms = async () => {
    try {
      const response = await api.get('/films');
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  const getCharacters = async () => {
    try {
      const response = await api.get('/characters');
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  const getSearchResult = async (query: string) => {
    try {
      const response = await api.get(`search?query=${query}`);
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  return {
    getFilms,
    getCharacters,
    getSearchResult,
  };
};
