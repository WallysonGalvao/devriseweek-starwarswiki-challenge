import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from '~/components/atoms';
import { DataResponse } from '~/services/hooks';
import { useDataStore } from '~/services/stores';

import * as S from './styles';

const sizes = {
  small: {
    h: 124,
    w: 88,
  },
  large: {
    h: 150,
    w: 102,
  },
};

type CardProps = {
  item: DataResponse;
  size?: string;
};

export const Card = ({ item, size }: CardProps): JSX.Element => {
  const { setSelectedData } = useDataStore();
  const { navigate } = useNavigation();

  const onSelectItem = () => {
    setSelectedData(item);
    navigate('Detail');
  };

  return (
    <S.Container>
      <S.CardContainer
        onPress={onSelectItem}
        size={size ? sizes[size as keyof typeof sizes] : sizes.small}>
        <S.CardImage source={{ uri: item.image_url }} />
      </S.CardContainer>
      <S.TextContainer>
        <Text size={14} align="center">
          {item.title}
        </Text>
      </S.TextContainer>
    </S.Container>
  );
};
