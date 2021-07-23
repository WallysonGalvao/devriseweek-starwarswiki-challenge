import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Film, useDataStore } from '~/services/stores';

import * as S from './styles';

type CardProps = {
  item: Film;
};

export const Card = ({ item }: CardProps): JSX.Element => {
  const { setSelectedData } = useDataStore();
  const { navigate } = useNavigation();

  const onSelectItem = () => {
    setSelectedData(item);
    navigate('Detail');
  };

  return (
    <S.CardContainer onPress={onSelectItem}>
      <S.CardImage source={{ uri: item.image_url }} />
    </S.CardContainer>
  );
};
