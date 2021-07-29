import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Home,
  SplashScreen,
  Detail,
  SearchScreen,
  FavoritesScreen,
  WatchScreen,
  ThemeScreen,
} from '~/screens';

import { BottomBar } from '~/components';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Detail: undefined;
  Watch: undefined;
};

export type RootBottomParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Theme: undefined;
};

const BottomRoute = () => {
  const Tab = createBottomTabNavigator<RootBottomParamList>();

  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Tema' }}
        name="Theme"
        component={ThemeScreen}
      />
    </Tab.Navigator>
  );
};

export const Routes = (): JSX.Element => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Watch" component={WatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
