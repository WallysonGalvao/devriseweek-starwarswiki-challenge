import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Routes } from './routes';
import * as themes from './styles/themes';
import { useTheme } from './services/hooks';
import { useDataStore } from './services/stores';
import '~/config/flipper';

Ionicons.loadFont();

const App = (): JSX.Element => {
  const { selectedTheme, setTheme } = useDataStore();
  const { getTheme } = useTheme();

  const getThemeStorage = async () => {
    const theme = await getTheme();
    setTheme(theme);
  };

  useEffect(() => {
    getThemeStorage();
  }, []);

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <StatusBar translucent barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
