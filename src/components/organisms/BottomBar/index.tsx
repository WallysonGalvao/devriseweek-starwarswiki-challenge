import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Text } from '~/components/atoms';
import * as themes from '~/styles/themes';
import { useDataStore } from '~/services/stores';

import * as S from './styles';

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
  Theme: 'cog',
};

export const BottomBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element | null => {
  const { selectedTheme } = useDataStore();
  const theme = themes[selectedTheme];

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <S.BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = options?.tabBarLabel
          ? options?.tabBarLabel
          : options?.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // console.log(theme.colors.primary);

        return (
          <S.BarItem
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Ionicons
              size={theme.metrics.px(20)}
              name={routeIcons[route.name as keyof typeof routeIcons]}
              color={isFocused ? theme.colors.primary : theme.colors.white}
            />
            <Text
              fontFamily="semibold"
              size={10}
              color={isFocused ? 'primary' : 'white'}>
              {label}
            </Text>
          </S.BarItem>
        );
      })}
    </S.BottomBarContainer>
  );
};
