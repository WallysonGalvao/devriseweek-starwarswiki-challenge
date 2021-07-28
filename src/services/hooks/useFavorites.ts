import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataResponse } from '~/services/hooks/useGetData';

const DB_KEY = '@StarWarsWiki:favorites';

type Error = {
  error: string;
};

type FavoritesReturn = {
  addFavorite: (data: DataResponse) => Promise<DataResponse[] | Error>;
  removeFavorite: (data: DataResponse) => Promise<DataResponse[] | Error>;
  getFavorites: () => Promise<DataResponse[] | []>;
};

export const useFavorites = (): FavoritesReturn => {
  // const addFavorite = async (data: DataResponse): Promise<DataResponse[] | Error> => {
  const addFavorite = async (data: DataResponse) => {
    try {
      let newDb;
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        // já existe um banco de dados
        const db = JSON.parse(value);
        newDb = [...db, data];
      } else {
        // preciso criar um novo banco de dados
        newDb = [data];
      }
      const jsonValue = JSON.stringify(newDb);
      await AsyncStorage.setItem(DB_KEY, jsonValue);
      return newDb;
    } catch (error) {
      return { error };
    }
  };

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY);
    if (value !== null) {
      const db = JSON.parse(value);
      return db;
    }
    return [];
  };

  const removeFavorite = async (data: DataResponse) => {
    try {
      let newDb: DataResponse[];
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        // já existe um banco de dados
        const db: DataResponse[] = JSON.parse(value);

        newDb = db.filter(fv => fv.id !== data.id && fv.title !== data.title);
      } else {
        // preciso criar um novo banco de dados
        newDb = [];
      }

      const jsonValue = JSON.stringify(newDb);
      await AsyncStorage.setItem(DB_KEY, jsonValue);
      return newDb;
    } catch (error) {
      return { error };
    }
  };

  return {
    addFavorite,
    removeFavorite,
    getFavorites,
  };
};
