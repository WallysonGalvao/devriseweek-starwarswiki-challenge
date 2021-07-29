import React from 'react';

import { FlatList } from 'react-native';
import { ScreenContainer, SymbolCard, Text } from '~/components';

import { items, ItemTypes } from './items';

export const ThemeScreen = (): JSX.Element => {
  const keyExtractor = (item: ItemTypes) => item.id;

  const renderItem = ({ item }: { item: ItemTypes }) => {
    return (
      <SymbolCard
        imageSource={item.icon}
        title={item.name}
        theme={item.theme}
      />
    );
  };

  return (
    <ScreenContainer>
      <Text fontFamily="bold" size={28} mb={24}>
        Temas
      </Text>
      <FlatList
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </ScreenContainer>
  );
};
