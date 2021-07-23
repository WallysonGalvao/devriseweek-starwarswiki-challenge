import React from 'react';
import { FlatList } from 'react-native';

import { Card } from '~/components/molecules';
import { Text } from '~/components/atoms';
import { theme } from '~/styles/theme';
import { Film, Characters } from '~/services/hooks/useGetData';

import * as S from './styles';

type HomeListProps = {
  data: Film[] | Characters[];
  title: string;
  type: string;
};

export const HomeList = ({ data, title, type }: HomeListProps): JSX.Element => {
  return (
    <S.ListContainer>
      <Text ml={24} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={{ ...item, type }} />}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </S.ListContainer>
  );
};
