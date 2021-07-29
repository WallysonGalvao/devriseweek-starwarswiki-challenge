import React from 'react';

import {
  ScreenScrollContainer,
  Hero,
  GoBack,
  Text,
  WhereToWatchList,
} from '~/components';
import { useDataStore } from '~/services/stores';

export const Detail = (): JSX.Element => {
  const { selectedData } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      {selectedData.type === 'Filme' && <WhereToWatchList />}
      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>
      <Text mt={12} ml={24} mr={24} size={14} lh={20}>
        {selectedData.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  );
};
