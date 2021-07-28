import { api } from '../api';

type Error = {
  error: string;
  message: string;
  statusCode: number;
};

export type DataResponse = {
  id: number;
  image_url: string;
  title?: string;
  subtitle?: string;
  type?: string;
  description?: string;
  trailer_url: string;
};

type PromiseReturn = DataResponse[] & Error;

type GetDataReturn = {
  getFilms: () => Promise<PromiseReturn>;
  getPlanets: () => Promise<PromiseReturn>;
  getSpecies: () => Promise<PromiseReturn>;
  getVehicles: () => Promise<PromiseReturn>;
  getStarships: () => Promise<PromiseReturn>;
  getCharacters: () => Promise<PromiseReturn>;
  getSearchResult: (query: string) => Promise<PromiseReturn>;
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

  const getPlanets = async () => {
    try {
      const response = await api.get('/planets');
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  const getSpecies = async () => {
    try {
      const response = await api.get('/species');
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  const getVehicles = async () => {
    try {
      const response = await api.get('/vehicles');
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  const getStarships = async () => {
    try {
      const response = await api.get('/starships');
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
    getPlanets,
    getSpecies,
    getVehicles,
    getStarships,
    getCharacters,
    getSearchResult,
  };
};
