import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeKeysProps } from '~/styles/themes';

const DB_KEY = '@StarWarsWiki:theme';

type Error = {
  error: string;
};

type ThemeReturn = {
  addTheme: (theme: ThemeKeysProps) => Promise<void>;
  getTheme: () => Promise<ThemeKeysProps>;
};

export const useTheme = (): ThemeReturn => {
  const addTheme = async (theme: ThemeKeysProps) => {
    try {
      await AsyncStorage.setItem(DB_KEY, theme);
    } catch (error) {
      console.error(error);
    }
  };

  const getTheme = async () => {
    const value = await AsyncStorage.getItem(DB_KEY);
    if (value !== null) return value as ThemeKeysProps;
    return 'empire';
  };

  return {
    addTheme,
    getTheme,
  };
};
