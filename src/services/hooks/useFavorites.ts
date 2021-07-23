import AsyncStorage from '@react-native-async-storage/async-storage';
import { Film } from '~/services/hooks/useGetData';

const DB_KEY = '@StarWarsWiki:favorites';

type Error = {
  error: string;
};

type FavoritesReturn = {
  addFavorite: (data: Film) => Promise<Film[] | Error>;
  removeFavorite: (data: Film) => Promise<Film[] | Error>;
  getFavorites: () => Promise<Film[] | []>;
};

export const useFavorites = (): FavoritesReturn => {
  // const addFavorite = async (data: Film): Promise<Film[] | Error> => {
  const addFavorite = async (data: Film) => {
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

  const removeFavorite = async (data: Film) => {
    try {
      let newDb: Film[];
      const value = await AsyncStorage.getItem(DB_KEY);
      if (value !== null) {
        // já existe um banco de dados
        const db: Film[] = JSON.parse(value);

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
