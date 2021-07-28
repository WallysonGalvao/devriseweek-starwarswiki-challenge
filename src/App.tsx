import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Routes } from './routes';

import { theme } from './styles/theme';
import '~/config/flipper';

Ionicons.loadFont();

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <StatusBar translucent barStyle="light-content" />
    <Routes />
  </ThemeProvider>
);

export default App;
