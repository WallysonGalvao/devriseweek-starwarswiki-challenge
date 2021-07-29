import React from 'react';
import { FlatList } from 'react-native';

import { Text, Container } from '~/components/atoms';
import { Card } from '~/components/molecules';

import noDataSearch from '~/assets/images/no-data-search.png';
import noDataFavorites from '~/assets/images/no-data-favorites.png';
import { DataResponse } from '~/services/hooks';

import * as S from './styles';

type GridListProps = {
  data: DataResponse[];
  type: string;
  loading?: boolean;
};

export const GridList = ({
  data,
  type,
  loading,
}: GridListProps): JSX.Element => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={item => String(item.id)}
      ItemSeparatorComponent={() => <S.SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={500}>
          <S.NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <Text fontFamily="semibold" size={14} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado.`}
          </Text>
        </Container>
      )}
    />
  );
};
