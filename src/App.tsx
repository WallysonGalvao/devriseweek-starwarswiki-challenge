import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './routes';

import { theme } from './styles/theme';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <StatusBar translucent backgroundColor={theme.colors.dark} />
    <Routes />
  </ThemeProvider>
);

export default App;
