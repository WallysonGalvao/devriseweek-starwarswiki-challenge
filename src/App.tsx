import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Routes } from './routes';

import { theme } from './styles/theme';

Ionicons.loadFont();

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <StatusBar translucent backgroundColor={theme.colors.white} />
    <Routes />
  </ThemeProvider>
);

export default App;
